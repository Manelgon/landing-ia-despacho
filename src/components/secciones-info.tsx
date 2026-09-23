import Image from 'next/image'
import { DOCENTE, ESTUDIO, REQUISITOS, FAQ, CURSO, BONIFICACION } from '@/content/curso'
import { CONVERSION } from '@/config/conversion'
import { Cta } from './cta'
import { Solicitud } from './solicitud'
import { FILTRO } from '@/content/solicitud'
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
              Quién lo da
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

export function ComoSeEstudia() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-28">
      {/* La misma foto del hero, esta vez en claro: se intuye de fondo y el
          texto va en oscuro. Medido: 13:1 en los titulares, 7,5:1 en el texto. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-limpia.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper/90" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        <div className="reveal">
          <Eyebrow>El formato</Eyebrow>
          <h2 className="mt-5 max-w-[26ch] text-[clamp(28px,4.4vw,44px)] font-extrabold tracking-[-0.025em]">
            Cómo se estudia
          </h2>
          <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.9vw,18.5px)] leading-[1.65] text-muted">
            Cuatro cosas que conviene saber antes de entrar.
          </p>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {ESTUDIO.map((e, i) => (
            <div key={e.titulo} style={cascada(i)} className="reveal border-t border-line pt-6">
              <span
                aria-hidden="true"
                className="font-mono text-[13px] tracking-[0.1em] text-amber tabular-nums"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-[clamp(20px,2.4vw,24px)] font-extrabold tracking-[-0.02em] text-navy">
                {e.titulo}
              </h3>
              <p className="mt-2.5 font-mono text-[11px] font-semibold tracking-[0.12em] text-amber uppercase">
                {e.dato}
              </p>
              <p className="mt-4 max-w-[48ch] text-[15.5px] leading-[1.65]">{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Requisitos() {
  const [base, ...excepciones] = REQUISITOS.filas

  return (
    <Seccion alterna>
      <Titulo eyebrow="Antes de empezar" sub={REQUISITOS.intro}>
        Qué necesitas
      </Titulo>

      {/* Primero la respuesta —para casi todo el itinerario no hace falta
          nada— y después las excepciones, que son solo dos. */}
      <div className="reveal mt-14 border-l-2 border-amber pl-6 sm:pl-8">
        <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-amber uppercase">
          {base.bloque} · {base.detalle}
        </p>
        <p className="mt-4 max-w-[56ch] text-[clamp(17px,2vw,20px)] leading-[1.6] text-ink">
          {base.texto}
        </p>
      </div>

      <p className="reveal mt-14 font-mono text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
        Dos excepciones
      </p>

      <ul className="mt-6 grid list-none gap-x-14 gap-y-8 md:grid-cols-2">
        {excepciones.map((f, i) => (
          <li key={f.bloque} style={cascada(i)} className="reveal border-t border-line pt-5">
            <p className="text-[16px] font-bold text-navy">
              {f.bloque} <span className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">· {f.detalle}</span>
            </p>
            <p className="mt-2.5 max-w-[46ch] text-[15px] leading-[1.6]">{f.texto}</p>
          </li>
        ))}
      </ul>

      <p className="reveal mt-12 max-w-[70ch] border-l-2 border-aviso-borde bg-aviso-fondo px-6 py-5 text-[15px] leading-[1.65] text-aviso-texto">
        {REQUISITOS.aviso}
      </p>
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

export function Matricula() {
  const { precio, precioNota } = CONVERSION

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
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="reveal rounded-xl bg-navy p-8 text-white">
            <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#FFB36B] uppercase">
              Precio del itinerario
            </p>
            {precio ? (
              <>
                <p className="mt-5 text-[clamp(40px,6vw,56px)] leading-none font-extrabold tracking-[-0.035em] text-white">
                  {precio}
                </p>
                <p className="mt-3.5 font-mono text-[12.5px] text-white/70">{precioNota}</p>
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

      {/* Pie de la sección: cruza las dos columnas, así que el aviso de FUNDAE
          se lee entero en una línea en vez de partirse en la media columna. */}
      <div className="reveal mt-14 border-t border-line pt-7">
        <p className="text-[14.5px] leading-[1.6]">
          <b className="font-bold text-ink">{BONIFICACION.titulo}.</b>{' '}
          <span className="text-muted">{BONIFICACION.texto}</span>
        </p>
        <p className="mt-4 font-mono text-[12px] leading-relaxed tracking-[0.02em] text-muted">
          {CURSO.bajoBoton}
        </p>
      </div>
    </Seccion>
  )
}
