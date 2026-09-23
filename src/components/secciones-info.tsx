import Image from 'next/image'
import { DOCENTE, FAQ, SELLOS, TESTIMONIOS } from '@/content/curso'
import { CONVERSION } from '@/config/conversion'
import { Cta } from './cta'
import { Solicitud } from './solicitud'
import { FILTRO, PASOS, ENCAJE } from '@/content/solicitud'
import { Seccion, Titulo, Eyebrow, Filete } from './ui'

const cascada = (i: number, paso = 70) => ({ '--reveal-delay': `${i * paso}ms` }) as React.CSSProperties

export function Docente() {
  return (
    <section id="docente" className="scroll-mt-20 border-y border-white/10 bg-navy-deep py-24 text-white sm:py-28">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Image
            src={DOCENTE.foto}
            alt={`Retrato de ${DOCENTE.nombre}`}
            width={1066}
            height={1600}
            loading="lazy"
            className="reveal aspect-[4/5] w-full max-w-[330px] rounded-[10px] border border-white/15 object-cover object-top"
          />

          <div className="reveal" style={cascada(1, 120)}>
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
              Quién está detrás
            </p>

            <h2 className="mt-5 text-[clamp(28px,3.8vw,42px)] font-extrabold tracking-[-0.03em] text-white">
              {DOCENTE.nombre}
            </h2>

            <p className="mt-3 font-mono text-[12px] tracking-[0.1em] text-[#FFB36B] uppercase">
              {DOCENTE.rol}
            </p>

            <p className="mt-7 max-w-[58ch] text-[16.5px] leading-[1.65] text-white/80">{DOCENTE.bio}</p>

            <ul className="mt-9 grid list-none gap-6 sm:grid-cols-3 sm:gap-5">
              {DOCENTE.claves.map((c, i) => (
                <li
                  key={c.titulo}
                  style={cascada(i + 2, 90)}
                  className="reveal border-l-2 border-amber pl-4"
                >
                  <b className="block text-[15px] font-bold text-white">{c.titulo}</b>
                  <span className="mt-1.5 block text-[13.5px] leading-[1.5] text-white/70">
                    {c.texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * El filtro, en la página. Dos columnas: quién encaja y quién no. Va justo
 * antes del precio, que es donde alguien decide si sigue leyendo.
 */
export function Encaje() {
  return (
    <Seccion>
      <Titulo eyebrow={ENCAJE.eyebrow}>{ENCAJE.titulo}</Titulo>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
        {[ENCAJE.si, ENCAJE.no].map((col, c) => (
          <div key={col.titulo} style={cascada(c, 110)} className="reveal">
            <h3
              className={`text-[17px] font-extrabold tracking-[-0.01em] ${c === 0 ? 'text-navy' : 'text-muted'}`}
            >
              {col.titulo}
            </h3>
            <ul className="mt-5 grid list-none gap-4">
              {col.lista.map((t) => (
                <li key={t} className="flex gap-3.5 text-[15px] leading-[1.55]">
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 shrink-0 font-mono text-[14px] ${c === 0 ? 'text-amber' : 'text-muted'}`}
                  >
                    {c === 0 ? '✓' : '✕'}
                  </span>
                  <span className={c === 0 ? 'text-body' : 'text-muted'}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Seccion>
  )
}

export function Preguntas() {
  return (
    <Seccion alterna>
      <Titulo eyebrow="Dudas frecuentes">Preguntas que nos hacen</Titulo>

      <div className="mt-16 border-t border-line-soft">
        {FAQ.map((f, i) => (
          <details key={f.p} style={cascada(i, 50)} className="reveal group border-b border-line-soft">
            <summary className="flex cursor-pointer items-baseline justify-between gap-6 py-6 text-[clamp(16.5px,2vw,19px)] font-bold text-ink transition-colors hover:text-navy">
              <span className="max-w-[54ch]">{f.p}</span>
              <span aria-hidden="true" className="shrink-0 font-mono text-[18px] text-amber">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">&minus;</span>
              </span>
            </summary>
            <p className="max-w-[62ch] pb-7 text-[16px] leading-[1.7]">{f.r}</p>
          </details>
        ))}
      </div>
    </Seccion>
  )
}

const TAMANO_SELLO: Record<string, string> = {
  ENISA: 'h-[54px] w-[54px]',
  FUNDAE: 'h-auto w-[140px]',
}

export function Matricula() {
  const { precio, precioNota, plazas } = CONVERSION

  const incluye = [
    '30 unidades y 54 horas',
    'Los cinco circuitos montados',
    'Tutoría por correo con el docente',
    'Certificado al superarlo',
  ]

  return (
    <Seccion id="matricula" alterna>
      <Titulo eyebrow="Matricularte">Lo que cuesta y cómo entrar</Titulo>

      {/* Precio a la izquierda, solicitud a la derecha: el importe queda a la
          vista mientras se rellenan las preguntas. */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <div className="reveal flex h-full flex-col rounded-xl bg-navy p-8 text-white">
            <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#FFB36B] uppercase">
              Precio del itinerario
            </p>
            {precio ? (
              <>
                <p className="mt-5 text-[clamp(40px,6vw,56px)] leading-none font-extrabold tracking-[-0.035em] text-white">
                  {precio}
                </p>
                {precioNota ? (
                  <p className="mt-3.5 font-mono text-[12.5px] text-white/70">{precioNota}</p>
                ) : null}

                {plazas.quedan ? (
                  <p className="mt-5 inline-flex w-fit items-center gap-2.5 rounded-full bg-amber-soft py-2 pr-5 pl-4 text-[14px] font-bold text-aviso-texto">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
                    Quedan {plazas.quedan} plazas
                  </p>
                ) : null}
              </>
            ) : (
              <p className="mt-5 max-w-[30ch] text-[19px] leading-snug font-bold text-white/60">
                Pendiente de decidir. Se pone en{' '}
                <code className="font-mono text-[16px]">src/config/conversion.ts</code>
              </p>
            )}

            <ul className="mt-8 list-none border-t border-white/15 pt-6">
              {incluye.map((l) => (
                <li
                  key={l}
                  className="relative border-b border-white/10 py-3 pl-6 text-[15px] text-white/85 last:border-b-0 before:absolute before:top-[1.2rem] before:left-0 before:h-1.5 before:w-1.5 before:rounded-[1px] before:bg-amber before:content-['']"
                >
                  {l}
                </li>
              ))}
            </ul>

            {/* Los sellos cierran la tarjeta y le dan el alto del formulario.
                Van sobre blanco porque el logo de FUNDAE es azul y es marca
                de un tercero: no se puede recolorear para el navy. */}
            <div className="mt-auto pt-9">
              <p className="font-mono text-[10.5px] tracking-[0.18em] text-white/55 uppercase">
                Acreditaciones
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-lg bg-card px-6 py-5">
                {SELLOS.map((s) => (
                  // El logo y su leyenda llevan al mismo sitio. Este no entra
                  // por teclado ni lo lee el lector: basta con el de abajo.
                  <a
                    key={s.marca}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image
                      src={s.logo}
                      alt={s.alt}
                      width={s.ancho}
                      height={s.alto}
                      className={TAMANO_SELLO[s.marca]}
                    />
                  </a>
                ))}
              </div>

              <ul className="mt-5 list-none">
                {SELLOS.map((s) => (
                  <li key={s.marca} className="mt-1.5 text-[14px] font-bold first:mt-0">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[2px] underline decoration-white/25 underline-offset-[5px] transition-colors hover:decoration-white/70"
                    >
                      <span className="text-[#FFB36B]">{s.etiqueta}</span>{' '}
                      <span className="text-white">{s.marca}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="solicitud" className="reveal scroll-mt-28">
          <Eyebrow>{FILTRO.eyebrow}</Eyebrow>
          <h3 className="mt-4 max-w-[24ch] text-[clamp(24px,3.2vw,32px)] font-extrabold tracking-[-0.025em]">
            {FILTRO.titulo}
          </h3>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-muted">
            {FILTRO.entradilla}
          </p>

          <Solicitud />
        </div>
      </div>
    </Seccion>
  )
}

/**
 * La línea de tiempo del embudo. Va después del formulario porque contesta
 * la pregunta que aparece justo al terminar de rellenarlo: y ahora qué.
 */
export function Pasos() {
  return (
    <Seccion>
      <Titulo eyebrow={PASOS.eyebrow}>{PASOS.titulo}</Titulo>

      {/* Mismo patrón que las tres columnas de la sección del docente: filete
          ámbar a la izquierda y nada más. Ocupa la mitad que en tarjetas. */}
      <ol className="mt-10 grid list-none gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {PASOS.lista.map((p, i) => (
          <li key={p.cuando} style={cascada(i, 80)} className="reveal border-l-2 border-amber pl-4">
            <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] text-amber uppercase">
              {p.cuando}
            </p>
            <b className="mt-2.5 block text-[15px] leading-snug font-bold text-ink">{p.titulo}</b>
            <span className="mt-1.5 block text-[13.5px] leading-[1.55] text-muted">{p.texto}</span>
          </li>
        ))}
      </ol>
    </Seccion>
  )
}

/**
 * Prueba social con el mismo patrón que los cuatro pasos: titular arriba y
 * una fila de columnas con filete ámbar. Sin fotos: el formato no las pide y
 * además harían falta permisos firmados.
 */
export function Testimonios() {
  return (
    <Seccion id="testimonios" alterna>
      <Titulo eyebrow={TESTIMONIOS.eyebrow}>{TESTIMONIOS.titulo}</Titulo>

      {TESTIMONIOS.verificables.texto ? (
        <p className="reveal mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-muted">
          <span className="text-[15px] tracking-[0.12em] text-amber" aria-hidden="true">
            ★★★★★
          </span>
          {TESTIMONIOS.verificables.url ? (
            <a
              href={TESTIMONIOS.verificables.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-[5px] transition-colors hover:decoration-amber"
            >
              {TESTIMONIOS.verificables.texto} →
            </a>
          ) : (
            TESTIMONIOS.verificables.texto
          )}
        </p>
      ) : null}

      <ul className="mt-12 grid list-none gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIOS.lista.map((t, i) => (
          <li key={i} style={cascada(i, 90)} className="reveal border-l-2 border-amber pl-4">
            <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] text-amber uppercase">
              {t.despacho}
            </p>
            <b className="mt-2.5 block text-[15px] leading-snug font-bold text-ink">{t.nombre}</b>
            <blockquote className="mt-3 text-[13.5px] leading-[1.55] text-muted">
              {t.cita}
            </blockquote>

            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-3.5">
              {t.metricas.map((m) => (
                <div key={m.etiqueta}>
                  <dd className="text-[14.5px] leading-tight font-extrabold text-navy">{m.valor}</dd>
                  <dt className="mt-0.5 text-[11px] leading-tight text-muted">{m.etiqueta}</dt>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </Seccion>
  )
}
