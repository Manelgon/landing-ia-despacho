import { Acreditaciones } from './acreditaciones'
import { Barra } from './barra'
import { Pie } from './pie'
import { RevealObserver } from './reveal'
import { Preguntas } from './secciones-info'
import { Seccion, Titulo } from './ui'
import {
  CURSOS,
  FIN_LANZAMIENTO,
  enlaceTienda,
  eur,
  lanzamientoVigente,
  type Curso,
} from '@/content/catalogo'
import type { ClaseGratis } from '@/content/gratis'

/**
 * Página de una clase gratuita (/gratis/<slug>). Misma estética que las de
 * curso: hero con foto… aquí con el vídeo de campaña a la derecha. No lleva
 * formulario: «Empezar gratis» va a su ficha de 0 € en la tienda, y la
 * matrícula la hace el flujo de compra de siempre.
 */

const ENLACES = [
  { href: '#aprendes', texto: 'Qué aprendes' },
  { href: '#para-quien', texto: 'Para quién es' },
  { href: '#curso-completo', texto: 'El curso completo' },
]

const boton =
  'inline-block rounded-lg text-center font-bold no-underline transition-all duration-200 active:scale-[0.98]'
const botonSolido = `${boton} bg-amber text-white hover:bg-amber-hover`
const cascada = (i: number, paso = 80) => ({ '--reveal-delay': `${i * paso}ms` }) as React.CSSProperties

export function PaginaGratis({ clase }: { clase: ClaseGratis }) {
  const libre: Curso = CURSOS[clase.codigo]
  const empezar = enlaceTienda(clase.codigo, 'pagina-gratis')

  return (
    <>
      <Barra enlaces={ENLACES} cta={{ href: empezar, texto: 'Empezar gratis' }} volver />

      <header className="relative overflow-hidden bg-paper text-ink">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/recursos-web/fondos/hero-malaga-puerto.webp')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-white/90 from-40% via-white/70 to-white/40 max-md:bg-white/80"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1060px] px-5 sm:px-8">
          {/* El vídeo tiene el alto fijo (16:9): las dos columnas se centran. */}
          <div className="grid items-center gap-12 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-aviso-texto uppercase">
                Clase gratuita · {libre.horas} hora · online
              </p>
              <h1 className="mt-6 max-w-[18ch] text-[clamp(32px,4.8vw,50px)] font-extrabold tracking-[-0.035em] text-ink">
                {clase.titular.antes}
                <span className="text-amber">{clase.titular.destacado}</span>
                {clase.titular.despues}
              </h1>
              <p className="mt-6 max-w-[44ch] text-[clamp(17px,2.2vw,20px)] leading-[1.5] font-bold text-ink">
                {clase.subtitulo}
              </p>
              <a href={empezar} className={`${botonSolido} mt-8 px-8 py-4 text-[16px]`}>
                Empezar gratis
              </a>
              <p className="mt-3 text-[13.5px] text-muted">
                Te apuntas en la tienda de AFCademIA, sin pagar nada.
              </p>
            </div>

            <video
              className="aspect-video w-full rounded-[10px] border border-navy/10 bg-navy-deep shadow-[0_20px_60px_-20px_rgba(2,33,56,0.45)]"
              controls
              playsInline
              preload="none"
              poster={clase.video.portada}
              aria-label={clase.video.titulo}
            >
              <source src={clase.video.src} type="video/mp4" />
            </video>
          </div>
        </div>
      </header>

      <Acreditaciones fundae="Posibilidad de gestión mediante Fundae" />

      <main id="contenido">
        {/* Corta a propósito (07/10/2026): un título, un párrafo, la lista y la hoja. */}
        <Seccion id="aprendes">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="reveal">
              <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
                Qué aprendes
              </p>
              <h2 className="mt-5 max-w-[16ch] text-[clamp(28px,4.2vw,42px)] leading-[1.08] font-extrabold tracking-[-0.025em] text-ink">
                {clase.aprendes}
              </h2>
              <p className="mt-6 max-w-[44ch] text-[16.5px] leading-[1.65] text-body">{clase.intro}</p>
            </div>
            <div>
              <ol className="grid list-none">
                {clase.claves.map((k, i) => (
                  <li
                    key={k}
                    style={cascada(i, 70)}
                    className="reveal flex items-baseline gap-5 border-t border-line py-5 first:border-t-0 first:pt-0"
                  >
                    <span aria-hidden="true" className="w-[2.5ch] shrink-0 font-mono text-[20px] leading-none font-bold text-amber tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="max-w-[52ch] text-[16px] leading-[1.55] text-ink">{k}</span>
                  </li>
                ))}
              </ol>
              <p className="reveal mt-6 border-l-2 border-amber pl-5 text-[15.5px] leading-[1.6] font-bold text-ink">
                {clase.hoja}
              </p>
            </div>
          </div>
        </Seccion>

        <Seccion id="para-quien" alterna>
          <Titulo eyebrow="Para quién es">
            Una hora, <span className="text-amber">gratis</span>, para el despacho
          </Titulo>
          <div className="mt-14 grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <ul className="grid list-none gap-6">
              {clase.perfiles.map((p, i) => (
                <li
                  key={p}
                  style={cascada(i, 90)}
                  className="reveal border-l-2 border-amber pl-5 text-[clamp(17px,2vw,19px)] leading-[1.5] font-bold text-ink"
                >
                  {p}
                </li>
              ))}
            </ul>
            <a href={empezar} className={`${botonSolido} reveal px-6 py-4 text-[16px] lg:justify-self-end`}>
              Empezar gratis
            </a>
          </div>
        </Seccion>

        <CursoCompleto cod={clase.siguiente} />
        <Preguntas lista={clase.preguntas} />
      </main>

      <Pie />
      <RevealObserver />
    </>
  )
}

/** El paso siguiente, en navy como el bloque de precio: el curso de pago. */
function CursoCompleto({ cod }: { cod: ClaseGratis['siguiente'] }) {
  const c: Curso = CURSOS[cod]
  const rebaja = lanzamientoVigente() ? c.lanzamiento : undefined
  return (
    <section id="curso-completo" className="fondo-matricula scroll-mt-20 py-24 text-white sm:py-28">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-[#FFB36B] uppercase">
              Y cuando quieras ir más lejos · {c.horas} h · online
            </p>
            <h2 className="mt-5 max-w-[24ch] text-[clamp(28px,4.2vw,42px)] font-extrabold tracking-[-0.025em] text-white">
              {c.nombre}
            </h2>
            <p className="mt-5 max-w-[54ch] text-[clamp(16px,1.9vw,18.5px)] leading-[1.65] text-white/80">{c.texto}</p>
          </div>
          <div className="lg:text-right">
            <p className="flex items-baseline gap-3 lg:justify-end">
              {rebaja ? <s className="text-[18px] text-white/60">{eur(c.precio)}</s> : null}
              <b className="text-[clamp(38px,5vw,50px)] leading-none font-extrabold tracking-[-0.035em] text-white">
                {eur(rebaja ?? c.precio)}
              </b>
            </p>
            {rebaja ? (
              <p className="mt-3 font-mono text-[11px] tracking-[0.06em] text-[#FFB36B] uppercase">
                Precio de lanzamiento hasta el {FIN_LANZAMIENTO.texto}
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              {c.pagina ? (
                <a href={c.pagina} className={`${botonSolido} px-6 py-3.5 text-[15px]`}>
                  Ver el curso
                </a>
              ) : null}
              <a
                href={enlaceTienda(cod, 'pagina-gratis')}
                className={`${boton} border border-white/35 px-6 py-3.5 text-[15px] text-white hover:bg-white/10`}
              >
                Ir a la tienda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
