'use client'

import { useState } from 'react'
import { FILTRO, PREGUNTAS } from '@/content/solicitud'
import { enviarSolicitud } from '@/lib/supabase'

const campo =
  'w-full rounded-lg border border-line bg-card px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-amber focus:outline-none'

const etiqueta = 'block font-mono text-[11px] font-semibold tracking-[0.14em] text-muted uppercase'

/** Opción de respuesta: se comporta como un botón, no como un desplegable. */
function Opcion({
  texto,
  elegida,
  onClick,
}: {
  texto: string
  elegida: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={elegida}
      className={`rounded-lg border px-4 py-2.5 text-left text-[14.5px] transition-colors ${
        elegida
          ? 'border-amber bg-amber-soft font-bold text-aviso-texto'
          : 'border-line bg-card text-body hover:border-amber/50'
      }`}
    >
      {texto}
    </button>
  )
}

export function Solicitud() {
  const [datos, setDatos] = useState<Record<string, string>>({})
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)

  const poner = (id: string, valor: string) => setDatos((d) => ({ ...d, [id]: valor }))

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setEnviando(true)
    const form = new FormData(e.currentTarget)
    try {
      await enviarSolicitud({
        nombre: String(form.get('nombre') || '').trim(),
        despacho: String(form.get('despacho') || '').trim() || null,
        email: String(form.get('email') || '').trim(),
        telefono: String(form.get('telefono') || '').trim() || null,
        intentos: String(form.get('intentos') || '').trim() || null,
        consentimiento: true,
        ...Object.fromEntries(PREGUNTAS.filter((p) => !('libre' in p)).map((p) => [p.id, datos[p.id] ?? null])),
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
      <div className="reveal mt-14 rounded-xl border-l-2 border-ok bg-card px-7 py-9 sm:px-10">
        <h3 className="text-[clamp(22px,3vw,28px)] font-extrabold tracking-[-0.02em] text-navy">
          {FILTRO.exito.titulo}
        </h3>
        <p className="mt-4 max-w-[58ch] text-[16.5px] leading-[1.65]">{FILTRO.exito.texto}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="reveal mt-14">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={etiqueta}>
            Nombre y apellidos
          </label>
          <input id="nombre" name="nombre" required minLength={2} className={`${campo} mt-2.5`} />
        </div>
        <div>
          <label htmlFor="despacho" className={etiqueta}>
            Despacho
          </label>
          <input id="despacho" name="despacho" className={`${campo} mt-2.5`} />
        </div>
      </div>

      <ol className="mt-12 list-none border-t border-line">
        {PREGUNTAS.map((p) => (
          <li key={p.id} className="border-b border-line-soft py-8">
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="font-mono text-[13px] text-amber tabular-nums">
                {p.numero}
              </span>
              <div className="flex-1">
                <p className="text-[17px] font-bold text-ink">{p.texto}</p>
                {'ayuda' in p && p.ayuda ? (
                  <p className="mt-1.5 text-[14px] text-muted">{p.ayuda}</p>
                ) : null}

                {'libre' in p && p.libre ? (
                  <textarea
                    name={p.id}
                    rows={3}
                    placeholder={'marcador' in p ? p.marcador : undefined}
                    className={`${campo} mt-4 resize-y`}
                  />
                ) : (
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {'opciones' in p &&
                      p.opciones.map((o) => (
                        <Opcion
                          key={o}
                          texto={o}
                          elegida={datos[p.id] === o}
                          onClick={() => poner(p.id, o)}
                        />
                      ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={etiqueta}>
            Correo electrónico
          </label>
          <input id="email" name="email" type="email" required className={`${campo} mt-2.5`} />
        </div>
        <div>
          <label htmlFor="telefono" className={etiqueta}>
            Teléfono
          </label>
          <input id="telefono" name="telefono" type="tel" className={`${campo} mt-2.5`} />
        </div>
      </div>

      <label className="mt-8 flex items-start gap-3 text-[14.5px] leading-[1.6] text-muted">
        <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#FF7A00]" />
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
          . Tus datos se usan para valorar si el itinerario encaja con tu despacho y responderte. No
          se ceden a terceros.
        </span>
      </label>

      {error ? (
        <p
          role="alert"
          className="mt-6 border-l-2 border-aviso-borde bg-aviso-fondo px-5 py-4 text-[15px] text-aviso-texto"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={enviando}
        className="mt-8 inline-block rounded-lg bg-amber px-8 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:bg-amber-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {enviando ? FILTRO.enviando : FILTRO.boton}
      </button>
    </form>
  )
}
