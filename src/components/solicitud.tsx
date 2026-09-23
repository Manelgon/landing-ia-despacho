'use client'

import { useEffect, useRef, useState } from 'react'
import { FILTRO, PREGUNTAS } from '@/content/solicitud'
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

export function Solicitud() {
  const [paso, setPaso] = useState(0)
  const [datos, setDatos] = useState<Record<string, string>>({})
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)
  const contenedor = useRef<HTMLDivElement>(null)

  const total = PASOS.length
  const esPrimero = paso === 0
  const esUltimo = paso === total - 1
  const pregunta = paso > 0 && !esUltimo ? PREGUNTAS[paso - 1] : null

  const poner = (id: string, valor: string) => setDatos((d) => ({ ...d, [id]: valor }))

  // Al cambiar de paso, el foco va al primer campo para poder seguir tecleando
  useEffect(() => {
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
    if (!datos.email || !datos.email.includes('@')) return setError('Necesitamos un correo válido.')
    if (datos.consentimiento !== 'si') return setError('Hay que aceptar la política de privacidad.')
    setError(null)
    setEnviando(true)
    try {
      await enviarSolicitud({
        nombre: datos.nombre.trim(),
        despacho: datos.despacho?.trim() || null,
        email: datos.email.trim(),
        telefono: datos.telefono?.trim() || null,
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
    <div className="mt-10">
      {/* Cuánto queda */}
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
        className="mt-7 min-h-[260px] motion-safe:animate-[aparecer_.35s_ease-out]"
      >
        {esPrimero ? (
          <>
            <p className="text-[clamp(21px,2.6vw,26px)] font-extrabold tracking-[-0.02em] text-ink">
              Empecemos por lo básico
            </p>
            <div className="mt-8 grid max-w-[620px] gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className={etiqueta}>
                  Nombre y apellidos
                </label>
                <input
                  id="nombre"
                  className={`${campo} mt-2.5`}
                  value={datos.nombre ?? ''}
                  onChange={(e) => poner('nombre', e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), siguiente())}
                />
              </div>
              <div>
                <label htmlFor="despacho" className={etiqueta}>
                  Despacho <span className="normal-case">(opcional)</span>
                </label>
                <input
                  id="despacho"
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
            <p className="text-[clamp(21px,2.6vw,26px)] font-extrabold tracking-[-0.02em] text-ink">
              ¿Dónde te escribimos?
            </p>
            <div className="mt-8 grid max-w-[620px] gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={etiqueta}>
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className={`${campo} mt-2.5`}
                  value={datos.email ?? ''}
                  onChange={(e) => poner('email', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="telefono" className={etiqueta}>
                  Teléfono <span className="normal-case">(opcional)</span>
                </label>
                <input
                  id="telefono"
                  type="tel"
                  className={`${campo} mt-2.5`}
                  value={datos.telefono ?? ''}
                  onChange={(e) => poner('telefono', e.target.value)}
                />
              </div>
            </div>
            <label className="mt-8 flex max-w-[620px] items-start gap-3 text-[14.5px] leading-[1.6] text-muted">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 accent-[#FF7A00]"
                checked={datos.consentimiento === 'si'}
                onChange={(e) => poner('consentimiento', e.target.checked ? 'si' : '')}
              />
              <span>
                He leído y acepto la{' '}
                <a
                  href="https://afcademia.com/politica-de-privacidad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy underline"
                >
                  política de privacidad
                </a>
                . Usamos tus datos para valorar si el itinerario encaja con tu despacho y
                responderte.
              </span>
            </label>
          </>
        ) : pregunta ? (
          <>
            <p className="font-mono text-[12px] tracking-[0.14em] text-amber tabular-nums">
              {pregunta.numero}
            </p>
            <p className="mt-3 max-w-[22ch] text-[clamp(23px,3.2vw,32px)] leading-[1.2] font-extrabold tracking-[-0.025em] text-ink">
              {pregunta.texto}
            </p>
            {'ayuda' in pregunta && pregunta.ayuda ? (
              <p className="mt-3 text-[15px] text-muted">{pregunta.ayuda}</p>
            ) : null}

            {'libre' in pregunta && pregunta.libre ? (
              <textarea
                rows={4}
                placeholder={'marcador' in pregunta ? pregunta.marcador : undefined}
                className={`${campo} mt-8 max-w-[620px] resize-y`}
                value={datos[pregunta.id] ?? ''}
                onChange={(e) => poner(pregunta.id, e.target.value)}
              />
            ) : (
              <div className="mt-8 flex max-w-[680px] flex-wrap gap-3">
                {'opciones' in pregunta &&
                  pregunta.opciones.map((o) => {
                    const elegida = datos[pregunta.id] === o
                    return (
                      <button
                        key={o}
                        type="button"
                        aria-pressed={elegida}
                        onClick={() => elegir(pregunta.id, o)}
                        className={`rounded-lg border px-5 py-3 text-left text-[15.5px] transition-colors ${
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

      <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-7">
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
            className="rounded-lg bg-amber px-8 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-amber-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {esUltimo ? (enviando ? FILTRO.enviando : FILTRO.boton) : 'Siguiente →'}
          </button>
        </div>
      </div>
    </div>
  )
}
