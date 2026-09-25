'use client'

import { useEffect, useRef, useState } from 'react'
import { CLAUSULA, FILTRO, PREGUNTAS } from '@/content/solicitud'
import { enviarSolicitud } from '@/lib/supabase'

/**
 * Filtro previo, una pregunta por pantalla.
 *
 * Se contesta en dos minutos porque nunca se ve más de una cosa a la vez.
 * Al elegir una opción avanza solo; los pasos con campos de escribir esperan
 * a que se pulse Siguiente.
 */

const PASOS = ['datos', ...PREGUNTAS.map((p) => p.id), 'contacto'] as const

const campo =
  'w-full rounded-lg border border-line bg-card px-4 py-3.5 text-[16px] text-ink placeholder:text-muted/70 focus:border-amber focus:outline-none'
const etiqueta = 'block font-mono text-[11px] font-semibold tracking-[0.14em] text-muted uppercase'

/**
 * Un correo con arroba no basta: "pepe@gmail" se escribe solo y no existe.
 * Se pide nombre, arroba, dominio y una extensión de al menos dos letras.
 */
const CORREO = /^[^\s@]+@[^\s@]+\.[a-zA-ZÀ-ÿ]{2,}$/

/** Nueve dígitos. Se admite escribirlo con espacios, guiones o con el +34. */
function telefonoValido(valor: string): boolean {
  const limpio = valor.replace(/[\s.-]/g, '').replace(/^(\+34|0034)/, '')
  return /^\d{9}$/.test(limpio)
}

/**
 * `compacto`: la misma solicitud metida en la tarjeta del hero. Menos aire y
 * letra algo más pequeña; los pasos y la validación son los mismos.
 */
export function Solicitud({ compacto = false }: { compacto?: boolean }) {
  const k = (normal: string, peq: string) => (compacto ? peq : normal)
  // Con las dos solicitudes en la página, los id no pueden repetirse
  const uid = (x: string) => (compacto ? `hero-${x}` : x)
  const [paso, setPaso] = useState(0)
  const [datos, setDatos] = useState<Record<string, string>>({})
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [campoMal, setCampoMal] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)
  const contenedor = useRef<HTMLDivElement>(null)

  const total = PASOS.length
  const esPrimero = paso === 0
  const esUltimo = paso === total - 1
  const pregunta = paso > 0 && !esUltimo ? PREGUNTAS[paso - 1] : null

  const poner = (id: string, valor: string) => {
    setDatos((d) => ({ ...d, [id]: valor }))
    if (campoMal === id) {
      setCampoMal(null)
      setError(null)
    }
  }

  // Al cambiar de paso, el foco va al primer campo para poder seguir tecleando.
  // Al cargar la página no: el formulario está en el hero y en el móvil
  // abriría el teclado sin que nadie lo haya tocado.
  const pasoAnterior = useRef(paso)
  useEffect(() => {
    if (pasoAnterior.current === paso) return
    pasoAnterior.current = paso
    const primero = contenedor.current?.querySelector<HTMLElement>('input, textarea')
    primero?.focus({ preventScroll: true })
  }, [paso])

  function puedeAvanzar(): string | null {
    if (esPrimero) {
      if (!datos.nombre || datos.nombre.trim().length < 2) return 'Escribe tu nombre para seguir.'
      return null
    }
    if (pregunta && !('libre' in pregunta && pregunta.libre) && !datos[pregunta.id]) {
      return 'Elige una opción para seguir.'
    }
    return null
  }

  function siguiente() {
    const fallo = puedeAvanzar()
    if (fallo) return setError(fallo)
    setError(null)
    setPaso((p) => Math.min(p + 1, total - 1))
  }

  function atras() {
    setError(null)
    setPaso((p) => Math.max(p - 1, 0))
  }

  /** Elegir una opción responde y avanza: un gesto en vez de dos. */
  function elegir(id: string, valor: string) {
    poner(id, valor)
    setError(null)
    const rapido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setTimeout(() => setPaso((p) => Math.min(p + 1, total - 1)), rapido ? 0 : 180)
  }

  async function enviar() {
    const correo = (datos.email ?? '').trim()
    const telefono = (datos.telefono ?? '').trim()

    if (!CORREO.test(correo)) {
      setCampoMal('email')
      return setError('Ese correo no parece válido. Revísalo: nombre@dominio.es')
    }
    // El teléfono es obligatorio desde el 25 de septiembre de 2026: después
    // viene una llamada. Y tiene que servir para llamar: una llamada que no
    // entra es un lead perdido sin saberlo.
    if (!telefono) {
      setCampoMal('telefono')
      return setError('Déjanos un teléfono: el siguiente paso es una llamada.')
    }
    if (!telefonoValido(telefono)) {
      setCampoMal('telefono')
      return setError('El teléfono tiene que tener nueve dígitos.')
    }
    if (datos.consentimiento !== 'si') {
      setCampoMal('consentimiento')
      return setError('Hay que aceptar la política de privacidad.')
    }
    setCampoMal(null)
    setError(null)
    setEnviando(true)
    try {
      await enviarSolicitud({
        nombre: datos.nombre.trim(),
        despacho: datos.despacho?.trim() || null,
        email: correo,
        telefono: telefono.replace(/[\s.-]/g, ''),
        consentimiento: true,
        origen: 'landing-ia-despacho',
        ...Object.fromEntries(PREGUNTAS.map((p) => [p.id, datos[p.id]?.trim() || null])),
      })
      setEnviado(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No hemos podido enviar la solicitud.')
    } finally {
      setEnviando(false)
    }
  }

  if (enviado) {
    return (
      <div className="mt-10 border-l-2 border-ok bg-card px-7 py-10 sm:px-10">
        <h3 className="text-[clamp(23px,3vw,30px)] font-extrabold tracking-[-0.02em] text-navy">
          {FILTRO.exito.titulo}
        </h3>
        <p className="mt-4 max-w-[58ch] text-[16.5px] leading-[1.65]">{FILTRO.exito.texto}</p>
      </div>
    )
  }

  return (
    <div className={k('mt-7', 'mt-5')}>
      {/* Cuánto queda: el mismo aire arriba y abajo de la barra */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-line">
          <div
            className="h-full bg-amber transition-[width] duration-300 ease-out"
            style={{ width: `${((paso + 1) / total) * 100}%` }}
          />
        </div>
        <span className="shrink-0 font-mono text-[11px] tracking-[0.1em] text-muted tabular-nums">
          {paso + 1} / {total}
        </span>
      </div>

      <div
        ref={contenedor}
        key={paso}
        className={`${k('mt-7', 'mt-5')} motion-safe:animate-[aparecer_.35s_ease-out]`}
      >
        {esPrimero ? (
          <>
            <p className={`${k('text-[clamp(21px,2.6vw,26px)]', 'text-[19px]')} font-extrabold tracking-[-0.02em] text-ink`}>
              Empecemos por lo básico
            </p>
            <div className={`${k('mt-8 gap-5', 'mt-5 gap-4')} grid max-w-[480px]`}>
              <div>
                <label htmlFor={uid('nombre')} className={etiqueta}>
                  Nombre y apellidos
                  <span className="text-amber" aria-hidden="true"> *</span>
                </label>
                <input
                  id={uid('nombre')}
                  required
                  autoComplete="name"
                  className={`${campo} mt-2.5`}
                  value={datos.nombre ?? ''}
                  onChange={(e) => poner('nombre', e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), siguiente())}
                />
              </div>
              <div>
                <label htmlFor={uid('despacho')} className={etiqueta}>
                  Despacho <span className="normal-case">(opcional)</span>
                </label>
                <input
                  id={uid('despacho')}
                  className={`${campo} mt-2.5`}
                  value={datos.despacho ?? ''}
                  onChange={(e) => poner('despacho', e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), siguiente())}
                />
              </div>
            </div>
          </>
        ) : esUltimo ? (
          <>
            <p className={`${k('text-[clamp(21px,2.6vw,26px)]', 'text-[19px]')} font-extrabold tracking-[-0.02em] text-ink`}>
              ¿Dónde te escribimos?
            </p>
            <div className={`${k('mt-8 gap-5', 'mt-5 gap-4')} grid max-w-[480px]`}>
              <div>
                <label htmlFor={uid('email')} className={etiqueta}>
                  Correo electrónico
                  <span className="text-amber" aria-hidden="true"> *</span>
                </label>
                <input
                  id={uid('email')}
                  required
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  aria-invalid={campoMal === 'email'}
                  className={`${campo} mt-2.5 ${campoMal === 'email' ? 'border-aviso-borde' : ''}`}
                  value={datos.email ?? ''}
                  onChange={(e) => poner('email', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor={uid('telefono')} className={etiqueta}>
                  Teléfono
                  <span className="text-amber" aria-hidden="true"> *</span>
                </label>
                <input
                  id={uid('telefono')}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  maxLength={17}
                  aria-invalid={campoMal === 'telefono'}
                  className={`${campo} mt-2.5 ${campoMal === 'telefono' ? 'border-aviso-borde' : ''}`}
                  value={datos.telefono ?? ''}
                  onChange={(e) => poner('telefono', e.target.value)}
                />
              </div>
            </div>
            <label className={`${k('mt-8 text-[14.5px]', 'mt-5 text-[13px]')} flex max-w-[620px] items-start gap-3 leading-[1.55] text-ink`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 accent-[#FF7A00]"
                aria-describedby={uid('clausula')}
                checked={datos.consentimiento === 'si'}
                onChange={(e) => poner('consentimiento', e.target.checked ? 'si' : '')}
              />
              <span>
                Confirmo que soy mayor de 18 años y que he leído y acepto la{' '}
                <a href={CLAUSULA.politica} target="_blank" rel="noopener noreferrer" className="text-navy underline">
                  política de privacidad
                </a>
                .
              </span>
            </label>

            {/* Primera capa de información, la misma que en afcademia.com */}
            <dl
              id={uid('clausula')}
              className={`${k('mt-4 text-[12.5px]', 'mt-3 text-[11.5px]')} max-w-[620px] space-y-1 border-l-2 border-line pl-3 leading-[1.5] text-muted`}
            >
              {CLAUSULA.capa.map((c) => (
                <div key={c.dato}>
                  <dt className="inline font-semibold text-navy">{c.dato}: </dt>
                  <dd className="inline">{c.texto}</dd>
                </div>
              ))}
              <div>
                <dt className="inline font-semibold text-navy">Derechos: </dt>
                <dd className="inline">
                  Acceder, rectificar y suprimir tus datos, y otros derechos explicados en la{' '}
                  <a href={CLAUSULA.politica} target="_blank" rel="noopener noreferrer" className="text-navy underline">
                    información adicional
                  </a>
                  .
                </dd>
              </div>
            </dl>
          </>
        ) : pregunta ? (
          <>
            <p className="font-mono text-[12px] tracking-[0.14em] text-amber tabular-nums">
              {pregunta.numero}
            </p>
            <p className={`${k('max-w-[22ch] text-[clamp(23px,3.2vw,32px)]', 'text-[20px]')} mt-3 leading-[1.2] font-extrabold tracking-[-0.025em] text-ink`}>
              {pregunta.texto}
            </p>
            {'ayuda' in pregunta && pregunta.ayuda ? (
              <p className="mt-3 text-[15px] text-muted">{pregunta.ayuda}</p>
            ) : null}

            {'libre' in pregunta && pregunta.libre ? (
              <textarea
                rows={4}
                placeholder={'marcador' in pregunta ? pregunta.marcador : undefined}
                className={`${campo} ${k('mt-8', 'mt-5')} max-w-[620px] resize-y`}
                value={datos[pregunta.id] ?? ''}
                onChange={(e) => poner(pregunta.id, e.target.value)}
              />
            ) : (
              <div className={`${k('mt-8 gap-3', 'mt-5 gap-2')} flex max-w-[680px] flex-wrap`}>
                {'opciones' in pregunta &&
                  pregunta.opciones.map((o) => {
                    const elegida = datos[pregunta.id] === o
                    return (
                      <button
                        key={o}
                        type="button"
                        aria-pressed={elegida}
                        onClick={() => elegir(pregunta.id, o)}
                        className={`flex-[1_1_auto] rounded-lg border text-center whitespace-nowrap transition-colors ${k('px-5 py-3 text-[15.5px] max-sm:px-4 max-sm:text-[14.5px]', 'px-4 py-2.5 text-[14px]')} ${
                          elegida
                            ? 'border-amber bg-amber-soft font-bold text-aviso-texto'
                            : 'border-line bg-card text-body hover:border-amber/60'
                        }`}
                      >
                        {o}
                      </button>
                    )
                  })}
              </div>
            )}
          </>
        ) : null}
      </div>

      {error ? (
        <p role="alert" className="mt-6 text-[15px] font-bold text-aviso-texto">
          {error}
        </p>
      ) : null}

      <div className={`${k('mt-10 pt-7', 'mt-6 pt-5')} flex flex-wrap items-center gap-4 border-t border-line`}>
        {!esPrimero ? (
          <button
            type="button"
            onClick={atras}
            className="font-mono text-[12px] tracking-[0.1em] text-muted uppercase transition-colors hover:text-navy"
          >
            ← Atrás
          </button>
        ) : null}

        <div className="ml-auto flex items-center gap-5">
          {pregunta && 'libre' in pregunta && pregunta.libre ? (
            <button
              type="button"
              onClick={siguiente}
              className="font-mono text-[12px] tracking-[0.1em] text-muted uppercase transition-colors hover:text-navy"
            >
              Saltar
            </button>
          ) : null}

          <button
            type="button"
            onClick={esUltimo ? enviar : siguiente}
            disabled={enviando}
            className={`rounded-lg bg-amber ${k('px-8', 'px-6')} py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-amber-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60`}
          >
            {esUltimo ? (enviando ? FILTRO.enviando : FILTRO.boton) : 'Siguiente →'}
          </button>
        </div>
      </div>
    </div>
  )
}
