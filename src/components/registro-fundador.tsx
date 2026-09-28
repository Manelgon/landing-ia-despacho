'use client'

import { useState } from 'react'
import { CLAUSULA_FUNDADORES, FUNDADORES } from '@/content/fundadores'
import { registrarFundador } from '@/lib/supabase'

/**
 * Registro de fundadores. Una sola pantalla: aquí no hay filtro, porque
 * quien llega ya tiene el enlace. El filtro es la palabra clave del correo.
 *
 * Nombre y apellidos van por separado porque Evolcampus los pide así y
 * partir «José Luis García» por el primer espacio sale mal.
 */

const campo =
  'w-full rounded-lg border border-line bg-card px-4 py-3.5 text-[16px] text-ink placeholder:text-muted/70 focus:border-amber focus:outline-none'
const etiqueta = 'block font-mono text-[11px] font-semibold tracking-[0.14em] text-muted uppercase'

/** Las mismas reglas que el formulario del despacho (solicitud.tsx). */
const CORREO = /^[^\s@]+@[^\s@]+\.[a-zA-ZÀ-ÿ]{2,}$/

function telefonoValido(valor: string): boolean {
  const limpio = valor.replace(/[\s.-]/g, '').replace(/^(\+34|0034)/, '')
  return /^\d{9}$/.test(limpio)
}

type Campo = 'nombre' | 'apellidos' | 'despacho' | 'email' | 'telefono'

const CAMPOS: { id: Campo; texto: string; opcional?: boolean; tipo?: string; auto: string }[] = [
  { id: 'nombre', texto: 'Nombre', auto: 'given-name' },
  { id: 'apellidos', texto: 'Apellidos', auto: 'family-name' },
  { id: 'email', texto: 'Correo electrónico', tipo: 'email', auto: 'email' },
  { id: 'telefono', texto: 'Teléfono', tipo: 'tel', auto: 'tel' },
  { id: 'despacho', texto: 'Despacho', opcional: true, auto: 'organization' },
]

export function RegistroFundador() {
  const [datos, setDatos] = useState<Record<string, string>>({})
  const [acepta, setAcepta] = useState(false)
  // Campo trampa: invisible para personas, los robots lo rellenan
  const [trampa, setTrampa] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [campoMal, setCampoMal] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)

  const poner = (id: string, valor: string) => {
    setDatos((d) => ({ ...d, [id]: valor }))
    if (campoMal === id) {
      setCampoMal(null)
      setError(null)
    }
  }

  function fallo(id: string, mensaje: string) {
    setCampoMal(id)
    setError(mensaje)
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault()
    const v = (id: Campo) => (datos[id] ?? '').trim()

    if (v('nombre').length < 2) return fallo('nombre', 'Escribe tu nombre.')
    if (v('apellidos').length < 2) return fallo('apellidos', 'Escribe tus apellidos.')
    if (!CORREO.test(v('email'))) return fallo('email', 'Ese correo no parece válido. Revísalo: nombre@dominio.es')
    if (!telefonoValido(v('telefono'))) return fallo('telefono', 'El teléfono tiene que tener nueve dígitos.')
    if (!acepta) return fallo('consentimiento', 'Hay que aceptar la política de privacidad.')

    setCampoMal(null)
    setError(null)

    if (trampa) return setEnviado(true)

    setEnviando(true)
    try {
      await registrarFundador({
        nombre: v('nombre'),
        apellidos: v('apellidos'),
        despacho: v('despacho') || null,
        email: v('email').toLowerCase(),
        telefono: v('telefono').replace(/[\s.-]/g, ''),
        consentimiento: true,
        origen: 'landing-fundadores',
      })
      setEnviado(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No hemos podido guardar el registro.')
    } finally {
      setEnviando(false)
    }
  }

  if (enviado) {
    return (
      <div className="mt-6 border-l-2 border-ok bg-card px-6 py-8" role="status">
        <h3 className="text-[24px] font-extrabold tracking-[-0.02em] text-navy">{FUNDADORES.exito.titulo}</h3>
        <p className="mt-3 text-[15.5px] leading-[1.65]">{FUNDADORES.exito.texto}</p>
      </div>
    )
  }

  return (
    <form onSubmit={enviar} noValidate className="mt-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {CAMPOS.map((c) => (
          <div key={c.id} className={c.id === 'email' ? 'sm:col-span-2' : ''}>
            <label htmlFor={`f-${c.id}`} className={etiqueta}>
              {c.texto}
              {c.opcional ? (
                <span className="normal-case"> (opcional)</span>
              ) : (
                <span className="text-amber" aria-hidden="true"> *</span>
              )}
            </label>
            <input
              id={`f-${c.id}`}
              type={c.tipo ?? 'text'}
              inputMode={c.tipo === 'email' ? 'email' : c.tipo === 'tel' ? 'tel' : undefined}
              autoComplete={c.auto}
              required={!c.opcional}
              maxLength={c.tipo === 'tel' ? 17 : 120}
              aria-invalid={campoMal === c.id}
              className={`${campo} mt-2 ${campoMal === c.id ? 'border-aviso-borde' : ''}`}
              value={datos[c.id] ?? ''}
              onChange={(e) => poner(c.id, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="f-web">No rellenar</label>
        <input id="f-web" tabIndex={-1} autoComplete="off" value={trampa} onChange={(e) => setTrampa(e.target.value)} />
      </div>

      <label className="mt-6 flex items-start gap-3 text-[13.5px] leading-[1.55] text-ink">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-[#FF7A00]"
          aria-describedby="f-clausula"
          aria-invalid={campoMal === 'consentimiento'}
          checked={acepta}
          onChange={(e) => {
            setAcepta(e.target.checked)
            if (campoMal === 'consentimiento') {
              setCampoMal(null)
              setError(null)
            }
          }}
        />
        <span>
          Confirmo que soy mayor de 18 años y que he leído y acepto la{' '}
          <a href={CLAUSULA_FUNDADORES.politica} target="_blank" rel="noopener noreferrer" className="text-navy underline">
            política de privacidad
          </a>
          .
        </span>
      </label>

      <dl
        id="f-clausula"
        className="mt-3 space-y-1 border-l-2 border-line pl-3 text-[11.5px] leading-[1.5] text-muted"
      >
        {CLAUSULA_FUNDADORES.capa.map((c) => (
          <div key={c.dato}>
            <dt className="inline font-semibold text-navy">{c.dato}: </dt>
            <dd className="inline">{c.texto}</dd>
          </div>
        ))}
        <div>
          <dt className="inline font-semibold text-navy">Derechos: </dt>
          <dd className="inline">
            Acceder, rectificar y suprimir tus datos, y otros derechos explicados en la{' '}
            <a href={CLAUSULA_FUNDADORES.politica} target="_blank" rel="noopener noreferrer" className="text-navy underline">
              información adicional
            </a>
            .
          </dd>
        </div>
      </dl>

      {error ? (
        <p role="alert" className="mt-5 text-[14.5px] font-bold text-aviso-texto">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={enviando}
        className="mt-6 w-full rounded-lg bg-amber px-8 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-amber-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {enviando ? FUNDADORES.formulario.enviando : FUNDADORES.formulario.boton}
      </button>
    </form>
  )
}
