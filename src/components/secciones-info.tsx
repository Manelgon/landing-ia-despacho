import Image from 'next/image'
import { DOCENTE, FAQ, SELLOS, TESTIMONIOS } from '@/content/curso'
import { CONVERSION } from '@/config/conversion'
import { Cta } from './cta'
import { PASOS, ENCAJE } from '@/content/solicitud'
import { Seccion, Titulo, Eyebrow, Filete, Destaca } from './ui'

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
              Quién enseña
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
    <section id="encaje" className="relative scroll-mt-20 overflow-hidden bg-paper py-24 sm:py-28">
      {/* La foto del hero en claro, la que llevaba "Cómo se estudia" antes de
          juntarla con el temario. Medido con ella: 13:1 en los titulares y
          7,5:1 en el texto. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-limpia.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper/90" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        <Titulo eyebrow={ENCAJE.eyebrow}>
          <Destaca texto={ENCAJE.titulo} parte="no es para todos" />
        </Titulo>

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
      </div>
    </section>
  )
}

export function Preguntas() {
  return (
    <Seccion alterna>
      <Titulo eyebrow="Preguntas">Preguntas que nos hacen</Titulo>

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
  const { precio, precioNota, plazas, garantia } = CONVERSION

  const incluye = [
    '30 unidades y 54 horas',
    'Los cinco flujos montados',
    'Tutoría por correo con el docente',
    'Certificado al superarlo',
  ]

  return (
    <Seccion id="matricula" alterna>
      <Titulo eyebrow="Precio">
        Lo que cuesta y <span className="text-amber">cómo entrar</span>
      </Titulo>

      {/* Precio a la izquierda, con el botón dentro; a la derecha, lo que pasa
          después de enviar la solicitud y las acreditaciones. El formulario
          vive solo en el hero. */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <div className="reveal flex h-full flex-col overflow-hidden rounded-xl bg-navy p-8 text-white">
            <p className="text-center font-mono text-[11px] font-semibold tracking-[0.18em] text-[#FFB36B] uppercase">
              Precio del itinerario
            </p>
            {precio ? (
              <>
                <p className="mt-5 text-center text-[clamp(40px,6vw,56px)] leading-none font-extrabold tracking-[-0.035em] text-white">
                  {precio}
                </p>
                {precioNota ? (
                  <p className="mt-3.5 text-center font-mono text-[12.5px] text-white/70">
                    {precioNota}
                  </p>
                ) : null}

                {/* Banda blanca dentro de la tarjeta, no de lado a lado: a
                    sangre partía el azul en dos. Sobre blanco porque el
                    naranja no daba contraste con ningún color de texto; en
                    tinta son 15,8:1. */}
                {plazas.quedan ? (
                  <p className="mt-6 rounded-lg bg-card px-5 py-3 text-center text-[15px] font-extrabold tracking-[0.01em] text-ink">
                    Quedan <span className="text-aviso-texto">{plazas.quedan} plazas</span>
                  </p>
                ) : null}

                {garantia ? (
                  <p className="mx-auto mt-5 max-w-[32ch] text-center text-[12px] leading-[1.5] text-white/70">
                    {garantia}
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
            <div className="mt-auto pt-8">
              {/* El único formulario está en el hero: el botón sube hasta él. */}
              <div className="text-center">
                <Cta />
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <Eyebrow>{PASOS.eyebrow}</Eyebrow>
          <h3 className="mt-4 max-w-[24ch] text-[clamp(24px,3.2vw,32px)] font-extrabold tracking-[-0.025em]">
            {PASOS.titulo}
          </h3>
          <ol className="mt-9 list-none">
            {PASOS.lista.map((p) => (
              <li key={p.cuando} className="border-l-2 border-amber pb-8 pl-5 last:pb-0">
                <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] text-amber uppercase">
                  {p.cuando}
                </p>
                <b className="mt-2 block text-[17px] leading-snug font-bold text-ink">{p.titulo}</b>
                <span className="mt-1.5 block max-w-[52ch] text-[15px] leading-[1.6] text-muted">{p.texto}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {/* Las acreditaciones, a lo ancho y centradas: mismo patrón que la
          franja de debajo del hero. */}
      <ul className="mt-14 flex list-none flex-wrap items-start justify-center gap-x-16 gap-y-8 border-t border-line pt-10 sm:gap-x-24">
        {SELLOS.map((s) => (
          <li key={s.marca}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-[2px] no-underline"
            >
              <span className="flex h-[64px] items-center">
                <Image
                  src={s.logo}
                  alt={s.alt}
                  width={s.ancho}
                  height={s.alto}
                  className={TAMANO_SELLO[s.marca]}
                />
              </span>
              <span className="mt-3 text-center font-mono text-[10.5px] font-semibold tracking-[0.12em] text-muted uppercase">
                {s.leyenda}
              </span>
            </a>
          </li>
        ))}
      </ul>
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
      <Titulo eyebrow={TESTIMONIOS.eyebrow}>
        <Destaca texto={TESTIMONIOS.titulo} parte="quienes ya lo usan" />
      </Titulo>

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
