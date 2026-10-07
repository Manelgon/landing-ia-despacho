import { Acreditaciones } from '@/components/acreditaciones'
import { Barra } from '@/components/barra'
import { Pie } from '@/components/pie'
import { RevealObserver } from '@/components/reveal'
import { Solicitud } from '@/components/solicitud'
import { Seccion, Titulo } from '@/components/ui'
import { solicitudCatalogo } from '@/content/solicitud-cursos'
import {
  CIERRE,
  CURSOS,
  DESTACADO,
  FIN_LANZAMIENTO,
  LIBRES,
  MOSAICO,
  PORTADA,
  SECCION_CURSOS,
  SECCION_LIBRES,
  cifras,
  enlaceTienda,
  eur,
  lanzamientoVigente,
  type Codigo,
  type Curso,
} from '@/content/catalogo'

/**
 * Portada · el catálogo de cursos. Textos y precios en src/content/catalogo.ts.
 *
 * Misma estética que la página del despacho: hero con fotografía y cifras al
 * pie, franja de acreditaciones, mosaico de tarjetas con foto de ambiente
 * (como el de los flujos) y cierre en navy.
 *
 * Cada curso lleva a su página de venta en esta web (si la tiene) y a su ficha
 * en la tienda de afcademia.com, que es donde se compra.
 *
 * Se vuelve a generar cada hora para que el precio de lanzamiento desaparezca
 * solo al acabar el plazo, sin tener que publicar nada.
 */
export const revalidate = 3600

const ENLACES = [
  { href: '#cursos', texto: 'Cursos' },
  { href: '#gratis', texto: 'Clases gratuitas' },
  { href: '#dudas', texto: 'Dudas' },
]

const boton =
  'inline-block rounded-lg text-center font-bold no-underline transition-all duration-200 active:scale-[0.98]'
const botonSolido = `${boton} bg-amber text-white hover:bg-amber-hover`
const cascada = (i: number, paso = 80) => ({ '--reveal-delay': `${i * paso}ms` }) as React.CSSProperties

export default function Catalogo() {
  const vigente = lanzamientoVigente()

  return (
    <>
      <Barra enlaces={ENLACES} cta={{ href: '#solicitud', texto: 'Solicitar mi diagnóstico gratuito' }} />
      <Hero />
      <Acreditaciones fundae="Posibilidad de gestión mediante Fundae" />

      <main id="contenido">
        <Seccion id="cursos" alterna>
          <Titulo eyebrow={SECCION_CURSOS.eyebrow} sub={SECCION_CURSOS.sub}>
            {SECCION_CURSOS.titular.antes}
            <span className="text-amber">{SECCION_CURSOS.titular.destacado}</span>
          </Titulo>

          <Destacado cod={DESTACADO} />

          {/* Filas de 2 y 3, como el mosaico de flujos: las dos primeras, más anchas.
              Si cambia el número de cursos, hay que revisar los col-span para no
              dejar huecos (DESIGN.md, rejillas). */}
          <ul className="mt-px grid list-none grid-cols-1 gap-px overflow-hidden rounded-b-[10px] bg-line-soft sm:grid-cols-2 lg:grid-cols-6">
            {MOSAICO.map((c, i) => (
              <Tarjeta
                key={c}
                cod={c}
                ancha={i < 2}
                // En tableta (2 columnas) la última, si queda sola, ocupa la fila entera.
                sola={MOSAICO.length % 2 === 1 && i === MOSAICO.length - 1}
                pos={i}
                vigente={vigente}
              />
            ))}
          </ul>
        </Seccion>

        <Libres />
        <Cierre />
      </main>

      <Pie />
      <RevealObserver />
    </>
  )
}

/** Igual que el hero del despacho: foto, veladura blanca, formulario y cifras al pie. Sin animación de entrada. */
function Hero() {
  const formulario = solicitudCatalogo()
  return (
    <header>
      <div className="relative overflow-hidden bg-paper text-ink">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-limpia.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-white/85 from-35% via-white/60 to-white/5 max-md:bg-white/75"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1060px] px-5 sm:px-8">
          {/* Como el hero del despacho: el formulario a la derecha en
              escritorio y debajo del titular en el móvil. Aquí es el general:
              la primera pregunta es qué formación le interesa. */}
          <div className="grid items-start gap-12 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_460px]">
          <div>
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-aviso-texto uppercase">
              {PORTADA.eyebrow}
            </p>
            <h1 className="mt-6 max-w-[17ch] text-[clamp(34px,6.2vw,60px)] font-extrabold tracking-[-0.035em] text-ink">
              {PORTADA.titular.antes}
              <span className="text-amber">{PORTADA.titular.destacado}</span>
              {PORTADA.titular.despues}
            </h1>
            <p className="mt-6 max-w-[46ch] text-[clamp(17px,2.2vw,21px)] leading-[1.5] font-bold text-ink">
              {PORTADA.para}
            </p>
            <p className="mt-4 max-w-[50ch] text-[clamp(16px,2vw,19px)] leading-[1.6] text-body">
              {PORTADA.resultado}
            </p>
            <a
              href="#cursos"
              className="mt-7 inline-block text-[15px] font-semibold text-navy underline decoration-amber decoration-2 underline-offset-4"
            >
              {PORTADA.boton}
            </a>
          </div>

          <div
            id="solicitud"
            className="relative scroll-mt-28 rounded-2xl border border-navy/10 bg-white/90 p-6 shadow-[0_20px_60px_-20px_rgba(2,33,56,0.35)] backdrop-blur-md"
          >
            <h2 className="max-w-[300px] pr-2 text-[22px] leading-[1.2] font-extrabold tracking-[-0.02em] text-navy">
              {formulario.textos.titulo}
            </h2>
            <p className="mt-2 text-[14px] leading-[1.5] text-muted">{formulario.textos.entradilla}</p>
            <Solicitud compacto config={formulario} />
          </div>
          </div>

          <dl className="grid grid-cols-2 border-t border-navy/15 bg-white/75 sm:grid-cols-4">
            {cifras().map((c, i) => (
              <div
                key={c.etiqueta}
                className={`px-4 py-8 text-center ${i % 2 === 1 ? 'border-l border-navy/15' : ''} sm:border-l sm:first:border-l-0 ${i >= 2 ? 'border-t border-navy/15 sm:border-t-0' : ''}`}
              >
                <dt className="sr-only">{c.etiqueta}</dt>
                <dd>
                  <b className="block font-mono text-[clamp(28px,4vw,40px)] leading-none font-bold tracking-[-0.02em] text-navy">
                    {c.valor}
                  </b>
                  <span className="mt-3.5 block text-[13px] leading-snug text-body">{c.etiqueta}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  )
}

/** El itinerario completo, a todo el ancho y en navy, como el bloque de precio del despacho. */
function Destacado({ cod }: { cod: Codigo }) {
  const c: Curso = CURSOS[cod]
  const pagina = c.pagina

  return (
    <article className="reveal relative mt-16 overflow-hidden rounded-t-[10px] bg-navy-deep text-white">
      {c.imagen ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${c.imagen}')` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-navy-deep from-35% via-navy-deep/90 to-navy-deep/40"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-14">
        <div>
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#FFB36B] uppercase">
            {c.area} · {c.horas} h · online
          </p>
          <h3 className="mt-4 text-[clamp(28px,4vw,40px)] leading-[1.08] font-extrabold tracking-[-0.03em] text-white">
            {c.nombre}
          </h3>
          <p className="mt-5 max-w-[52ch] text-[clamp(16px,1.9vw,18px)] leading-[1.6] text-white/80">{c.texto}</p>
        </div>

        <div className="lg:text-right">
          <p className="text-[clamp(36px,5vw,48px)] leading-none font-extrabold tracking-[-0.035em] text-white">
            {eur(c.precio)}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
            {pagina ? (
              <a href={pagina} className={`${botonSolido} px-6 py-3.5 text-[15px]`}>
                Ver el curso
              </a>
            ) : null}
            <a
              href={enlaceTienda(cod)}
              className={`${boton} border border-white/35 px-6 py-3.5 text-[15px] text-white hover:bg-white/10`}
            >
              Ir a la tienda
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

/** Tarjeta del mosaico. Foto de ambiente a la derecha y veladura de papel, como las de los flujos. */
function Tarjeta({
  cod,
  ancha,
  sola,
  pos,
  vigente,
}: {
  cod: Codigo
  ancha: boolean
  sola: boolean
  pos: number
  vigente: boolean
}) {
  const c: Curso = CURSOS[cod]
  const rebaja = vigente ? c.lanzamiento : undefined
  const pagina = c.pagina

  return (
    <li
      style={cascada(pos)}
      className={`reveal relative flex min-h-[380px] flex-col overflow-hidden bg-paper ${
        ancha ? 'lg:col-span-3' : 'lg:col-span-2'
      } ${sola ? 'sm:col-span-2' : ''}`}
    >
      {c.imagen ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-right"
            style={{ backgroundImage: `url('${c.imagen}')` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-paper from-30% via-paper/92 to-paper/40 max-sm:bg-paper/90"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-[10.5px] font-semibold tracking-[0.08em] text-amber uppercase">
          {c.area} · {c.horas} h
        </p>

        <div className="mt-3 flex items-start gap-3">
          {c.icono ? (
            <img
              src={`/recursos-web/iconos/${c.icono}.svg`}
              alt=""
              width="28"
              height="28"
              aria-hidden="true"
              className="mt-0.5 shrink-0"
            />
          ) : null}
          <h3
            className={`leading-[1.2] font-extrabold tracking-[-0.02em] text-navy ${ancha ? 'text-[clamp(22px,2.6vw,26px)]' : 'text-[21px]'}`}
          >
            {c.nombre}
          </h3>
        </div>

        <p className={`mt-3 text-[15px] leading-[1.6] ${ancha ? 'max-w-[42ch]' : 'max-w-[34ch]'}`}>{c.texto}</p>

        <div className="mt-auto pt-7">
          <p className="flex items-baseline gap-2.5">
            {rebaja ? (
              <>
                <s className="text-[15px] text-muted">{eur(c.precio)}</s>
                <b className="font-mono text-[26px] font-bold tracking-[-0.02em] text-navy">{eur(rebaja)}</b>
              </>
            ) : (
              <b className="font-mono text-[26px] font-bold tracking-[-0.02em] text-navy">{eur(c.precio)}</b>
            )}
          </p>
          {rebaja ? (
            <p className="mt-1.5 font-mono text-[10.5px] tracking-[0.06em] text-aviso-texto uppercase">
              Precio de lanzamiento hasta el {FIN_LANZAMIENTO.texto}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2.5">
            {pagina ? (
              <a
                href={pagina}
                className={`${boton} border border-navy/25 px-5 py-3 text-[14.5px] text-navy hover:border-navy hover:bg-navy/5`}
              >
                Ver el curso
              </a>
            ) : null}
            <a href={enlaceTienda(cod)} className={`${botonSolido} px-5 py-3 text-[14.5px]`}>
              Ir a la tienda
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

/** Las clases gratuitas, en segundo plano: filas finas, sin foto ni precio. */
function Libres() {
  return (
    <Seccion id="gratis">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal">
          <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
            {SECCION_LIBRES.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[18ch] text-[clamp(24px,3.2vw,32px)] leading-[1.12] font-extrabold tracking-[-0.025em]">
            {SECCION_LIBRES.titulo}
          </h2>
          <p className="mt-4 max-w-[40ch] text-[16px] leading-[1.6] text-muted">{SECCION_LIBRES.texto}</p>
        </div>
        <ul className="grid list-none">
          {LIBRES.map((cod, i) => {
            const c: Curso = CURSOS[cod]
            return (
              <li
                key={cod}
                style={cascada(i, 90)}
                className="reveal flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-line py-6 first:border-t-0 first:pt-0"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10.5px] font-semibold tracking-[0.08em] text-muted uppercase">
                    {c.area} · {c.horas} h · gratis
                  </p>
                  <h3 className="mt-2 text-[18px] leading-[1.25] font-extrabold tracking-[-0.015em] text-navy">
                    {c.nombre}
                  </h3>
                  <p className="mt-1.5 max-w-[52ch] text-[14.5px] leading-[1.55] text-body">{c.texto}</p>
                </div>
                <a
                  href={c.pagina ?? enlaceTienda(cod)}
                  className="shrink-0 font-bold text-navy underline decoration-amber decoration-2 underline-offset-4 hover:text-amber"
                >
                  Ver la clase
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Seccion>
  )
}

/**
 * Cierre en claro. Iba en navy con foto y, pegado al pie (también navy), la
 * página acababa en un bloque azul enorme (07/10/2026).
 */
function Cierre() {
  return (
    <section id="dudas" className="scroll-mt-20 border-t border-line-soft bg-card py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        <div className="reveal grid gap-10 rounded-xl border border-line bg-paper p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
              {CIERRE.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[22ch] text-[clamp(26px,3.8vw,38px)] font-extrabold tracking-[-0.025em] text-ink">
              {CIERRE.titulo}
            </h2>
            <p className="mt-4 max-w-[52ch] text-[clamp(16px,1.9vw,18px)] leading-[1.65] text-body">{CIERRE.texto}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a href="#solicitud" className={`${botonSolido} px-7 py-3.5 text-[15px]`}>
              Solicitar mi diagnóstico gratuito
            </a>
            <p className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] font-bold lg:justify-end">
              <a href={`mailto:${CIERRE.email}`} className="text-navy underline decoration-amber decoration-2 underline-offset-4">
                {CIERRE.email}
              </a>
              <a href={`tel:${CIERRE.telefono.tel}`} className="text-navy underline decoration-amber decoration-2 underline-offset-4">
                {CIERRE.telefono.ver}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
