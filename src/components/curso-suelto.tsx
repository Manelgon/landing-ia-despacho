import Image from 'next/image'
import { Acreditaciones } from './acreditaciones'
import { Barra } from './barra'
import { Pie } from './pie'
import { RevealObserver } from './reveal'
import { Solicitud } from './solicitud'
import { Preguntas } from './secciones-info'
import { Seccion, Titulo } from './ui'
import { DOCENTE } from '@/content/curso'
import {
  CIERRE,
  CURSOS,
  FIN_LANZAMIENTO,
  enlaceTienda,
  eur,
  lanzamientoVigente,
  type Curso,
} from '@/content/catalogo'
import type { CursoSuelto } from '@/content/cursos/tipo'
import { solicitudCurso } from '@/content/solicitud-cursos'
import { gratisDe } from '@/content/gratis'

/**
 * Página de un curso suelto (/curso/<slug>). La referencia es IA para el
 * Despacho: mismo orden, mismas piezas. El formulario va en el hero y guarda el código del curso
 * (src/content/solicitud-cursos.ts). Quien ya lo tiene claro se matricula en
 * la tienda desde el bloque de precio.
 *
 * Todo lo que dice sale de src/content/cursos/<curso>.ts. Precio, horas y
 * tienda, del catálogo.
 */

// Los mismos enlaces que la barra de IA para el Despacho.
const ENLACES = [
  { href: '#partida', texto: 'Tu despacho hoy' },
  { href: '#llevas', texto: 'Lo que te llevas' },
  { href: '#temario', texto: 'Temario' },
  { href: '#docente', texto: 'Quién enseña' },
  { href: '#para-quien', texto: 'Para quién es' },
  { href: '#matricula', texto: 'Precio' },
]

const boton =
  'inline-block rounded-lg text-center font-bold no-underline transition-all duration-200 active:scale-[0.98]'
const botonSolido = `${boton} bg-amber text-white hover:bg-amber-hover`
/**
 * Lo que pasa cuando se solicita el diagnóstico, como «Qué pasa después» del despacho.
 * Las 24 h valen para todos los cursos (confirmado por Manel el 09/10/2026).
 * «El mismo día» del despacho no se dice: no está confirmado para la tienda. Lo del correo de acceso es lo que hace el flujo de compra de
 * n8n (015. Flujo compra WooCommerce): matricula y manda la bienvenida.
 */
const PASOS_INFO = [
  { cuando: 'Ahora', titulo: 'Mandas las siete preguntas', texto: 'Dos minutos. No hay que preparar nada ni adjuntar nada.' },
  {
    cuando: 'En 24 h',
    titulo: 'Te llamamos',
    texto: 'Leemos lo que has contestado y te llamamos al teléfono que hayas dejado.',
  },
  {
    cuando: 'En la llamada',
    titulo: 'Resolvemos tus dudas',
    texto: 'Sobre el curso, sobre si encaja con tu despacho y sobre si podéis gestionarlo por FUNDAE.',
  },
  {
    cuando: 'Al matricularte',
    titulo: 'Te llega el acceso por correo',
    texto: 'Te matriculas en la tienda de AFCademIA y recibes por correo el acceso al campus.',
  },
]

/** La misma en todos los cursos sueltos: el matiz de las fichas de la tienda (07/10/2026). */
const PREGUNTA_FUNDAE = {
  p: '¿Se puede gestionar por FUNDAE?',
  r: 'Hay posibilidad de gestión mediante FUNDAE cuando se cumplan los requisitos aplicables. Si quieres, lo miramos contigo en la llamada del diagnóstico.',
}

/** En las rejillas de dos columnas, la última de una lista impar ocupa la fila entera: sin huecos (DESIGN.md). */
const impar = (lista: readonly unknown[], i: number) => lista.length % 2 === 1 && i === lista.length - 1
const cascada = (i: number, paso = 80) => ({ '--reveal-delay': `${i * paso}ms` }) as React.CSSProperties

export function PaginaCurso({ curso }: { curso: CursoSuelto }) {
  const c: Curso = CURSOS[curso.codigo]
  const rebaja = lanzamientoVigente() ? c.lanzamiento : undefined
  const tienda = enlaceTienda(curso.codigo, 'pagina-curso')

  return (
    <>
      <Barra enlaces={ENLACES} cta={{ href: '#solicitud', texto: 'Solicitar mi diagnóstico gratuito' }} volver />
      <Hero curso={curso} c={c} rebaja={rebaja} />
      <Acreditaciones fundae="Posibilidad de gestión mediante Fundae" />
      <main id="contenido">
        {/* El orden de IA para el Despacho, que es la referencia. */}
        <Partida curso={curso} />
        <Llevas curso={curso} />
        <Temario curso={curso} />
        <Docente curso={curso} />
        <ParaQuien curso={curso} />
        <Matricula curso={curso} c={c} rebaja={rebaja} tienda={tienda} />
        <Preguntas lista={[...curso.preguntas, PREGUNTA_FUNDAE]} />
      </main>
      <Pie />
      <RevealObserver />
    </>
  )
}

function Precio({ c, rebaja, claro = false }: { c: Curso; rebaja?: number; claro?: boolean }) {
  const fuerte = claro ? 'text-white' : 'text-navy'
  const tachado = claro ? 'text-white/60' : 'text-muted'
  return (
    <p className="flex items-baseline gap-3">
      {rebaja ? <s className={`text-[clamp(17px,2vw,20px)] ${tachado}`}>{eur(c.precio)}</s> : null}
      <b className={`text-[clamp(40px,6vw,56px)] leading-none font-extrabold tracking-[-0.035em] ${fuerte}`}>
        {eur(rebaja ?? c.precio)}
      </b>
    </p>
  )
}

/** Como el hero del despacho: foto, veladura, formulario a la derecha y cifras al pie. */
function Hero({ curso, c, rebaja }: { curso: CursoSuelto; c: Curso; rebaja?: number }) {
  const { hero } = curso
  const formulario = solicitudCurso(curso.codigo)
  const { antes, destacado, despues } = hero.titular
  const largo = (antes + destacado + despues).length > 40
  return (
    <header>
      <div className="relative overflow-hidden bg-paper text-ink">
        <div
          className="absolute inset-0 bg-cover bg-right"
          style={{ backgroundImage: `url('${hero.imagen}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-white/85 from-40% via-white/55 to-white/10 max-md:bg-white/75"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1060px] px-5 sm:px-8">
          <div className="grid items-stretch gap-12 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_460px]">
            <div>
              <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-aviso-texto uppercase">
                {hero.eyebrow}
              </p>
              {/* Un nombre largo, como el de ciberseguridad, en grande ocupaba
                  cinco líneas y descuadraba el hero frente al formulario. */}
              <h1
                className={`mt-6 font-extrabold tracking-[-0.035em] text-ink ${
                  largo ? 'max-w-[20ch] text-[clamp(30px,4.4vw,46px)]' : 'max-w-[17ch] text-[clamp(34px,6.2vw,60px)]'
                }`}
              >
                {hero.titular.antes}
                <span className="text-amber">{hero.titular.destacado}</span>
                {hero.titular.despues}
              </h1>
              <p className="mt-6 max-w-[46ch] text-[clamp(17px,2.2vw,21px)] leading-[1.5] font-bold text-ink">
                {hero.subtitulo}
              </p>
              {hero.entradilla ? (
                <p className="mt-4 max-w-[50ch] text-[clamp(16px,2vw,19px)] leading-[1.6] text-body">
                  {hero.entradilla}
                </p>
              ) : null}
              <p className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {rebaja ? <s className="text-[16px] text-muted">{eur(c.precio)}</s> : null}
                <b className="font-mono text-[26px] font-bold tracking-[-0.02em] text-navy">{eur(rebaja ?? c.precio)}</b>
                <span className="font-mono text-[11.5px] tracking-[0.08em] text-muted uppercase">
                  {c.horas} h · online
                  {rebaja ? ` · lanzamiento hasta el ${FIN_LANZAMIENTO.texto}` : ''}
                </span>
              </p>
              <a
                href="#matricula"
                className="mt-4 inline-block text-[14.5px] font-semibold text-navy underline decoration-amber decoration-2 underline-offset-4"
              >
                Matricularme directamente
              </a>
            </div>

            {/* Como en el despacho: la solicitud en el hero, a la derecha en
                escritorio y debajo del titular en el móvil. */}
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
            {curso.cifras.map((x, i) => (
              <div
                key={x.etiqueta}
                className={`px-4 py-8 text-center ${i % 2 === 1 ? 'border-l border-navy/15' : ''} sm:border-l sm:first:border-l-0 ${i >= 2 ? 'border-t border-navy/15 sm:border-t-0' : ''}`}
              >
                <dt className="sr-only">{x.etiqueta}</dt>
                <dd>
                  <b className="block font-mono text-[clamp(28px,4vw,40px)] leading-none font-bold tracking-[-0.02em] text-navy">
                    {x.valor}
                  </b>
                  <span className="mt-3.5 block text-[13px] leading-snug text-body">{x.etiqueta}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  )
}

/** Como «Tu despacho hoy»: titular fijo a la izquierda, situaciones numeradas a la derecha. */
function Partida({ curso }: { curso: CursoSuelto }) {
  const { partida } = curso
  return (
    <section id="partida" className="scroll-mt-20 bg-paper py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
              Tu despacho hoy
            </p>
            <h2 className="mt-5 max-w-[18ch] text-[clamp(28px,4.2vw,42px)] leading-[1.08] font-extrabold tracking-[-0.025em] text-ink">
              {partida.titulo.antes}
              <span className="text-amber">{partida.titulo.destacado}</span>
            </h2>
            <p className="mt-8 max-w-[28ch] border-t border-line pt-7 text-[clamp(18px,2.2vw,22px)] leading-[1.3] font-extrabold tracking-[-0.02em] text-navy">
              {partida.cierre}
            </p>
          </div>

          <ol className="grid list-none">
            {partida.casos.map((c, i) => (
              <li
                key={c}
                style={cascada(i, 90)}
                className="reveal flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="w-[2.5ch] shrink-0 font-mono text-[clamp(20px,2.6vw,28px)] leading-none font-bold text-amber tabular-nums"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="max-w-[52ch] flex-1 text-[clamp(16px,1.9vw,19px)] leading-[1.5] text-body">{c}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="reveal mt-16 border-l-2 border-amber pl-5 sm:pl-7">
          <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-amber uppercase">
            La regla del curso
          </p>
          <p className="mt-3 max-w-[40ch] text-[clamp(21px,2.8vw,28px)] leading-[1.2] font-extrabold tracking-[-0.02em] text-ink">
            {partida.regla}
          </p>
        </aside>
      </div>
    </section>
  )
}

/**
 * Como «Lo que montas» del despacho: mosaico de tarjetas con foto e icono.
 * Las dos primeras, más anchas; luego filas de tres. Si la última fila se
 * queda corta, sus tarjetas se reparten el ancho: sin huecos (DESIGN.md).
 */
function Llevas({ curso }: { curso: CursoSuelto }) {
  // Sin párrafo bajo el título: lo dicen las tarjetas.
  const { tarjetas } = curso.llevas
  const resto = tarjetas.length - 2
  const sueltas = resto % 3
  const ancho = (pos: number) => {
    if (pos < 2) return 'lg:col-span-3'
    if (sueltas && pos >= tarjetas.length - sueltas) return sueltas === 1 ? 'lg:col-span-6' : 'lg:col-span-3'
    return 'lg:col-span-2'
  }
  return (
    <section id="llevas" className="scroll-mt-20 border-y border-line-soft bg-card py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        <Titulo eyebrow="Lo que te llevas">
          Al terminar, <span className="text-amber">funcionando en tu despacho</span>
        </Titulo>
        <ul className="mt-16 grid list-none grid-cols-1 gap-px overflow-hidden rounded-[10px] bg-line-soft sm:grid-cols-2 lg:grid-cols-6">
          {tarjetas.map((t, pos) => {
            const ancha = pos < 2
            const sola = tarjetas.length % 2 === 1 && pos === tarjetas.length - 1
            return (
              <li
                key={t.titulo}
                style={cascada(pos)}
                className={`reveal relative flex min-h-[300px] flex-col justify-center overflow-hidden bg-paper ${ancho(pos)} ${sola ? 'sm:col-span-2' : ''}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-right"
                  style={{ backgroundImage: `url('${t.imagen}')` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-linear-to-r from-paper from-30% via-paper/92 to-paper/25 max-sm:bg-paper/90"
                  aria-hidden="true"
                />
                <div className="relative p-6 sm:p-7">
                  <p className="font-mono text-[10.5px] font-semibold tracking-[0.08em] whitespace-nowrap text-amber uppercase">
                    {t.etiqueta}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={`/recursos-web/iconos/${t.icono}.svg`}
                      alt=""
                      width="28"
                      height="28"
                      aria-hidden="true"
                      className="shrink-0"
                    />
                    <h3
                      className={`leading-[1.2] font-extrabold tracking-[-0.02em] text-navy ${ancha ? 'text-[clamp(22px,2.6vw,26px)]' : 'text-[21px]'}`}
                    >
                      {t.titulo}
                    </h3>
                  </div>
                  <p className={`mt-3 text-[15px] leading-[1.6] ${ancha ? 'max-w-[42ch]' : 'max-w-[34ch]'}`}>{t.texto}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/** Acordeón sin caja, como el temario del despacho. */
function Temario({ curso }: { curso: CursoSuelto }) {
  const n = curso.unidades.length
  return (
    <Seccion id="temario">
      <Titulo eyebrow="Temario" sub={`${n} unidades. Cada una con su clase en vídeo, su práctica y su test.`}>
        Lo que aprendes, <span className="text-amber">unidad a unidad</span>
      </Titulo>

      <div className="mt-16 border-t border-line-soft">
        {curso.unidades.map((u, i) => (
          <details key={u.titulo} style={cascada(i, 50)} className="reveal group border-b border-line-soft">
            <summary className="flex cursor-pointer flex-wrap items-baseline gap-x-4 gap-y-2 py-6 transition-colors hover:text-navy sm:gap-x-6">
              <span className="w-[60px] shrink-0 font-mono text-[11.5px] tracking-[0.1em] whitespace-nowrap text-amber tabular-nums sm:w-[68px]">
                Unidad {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="min-w-0 flex-1 text-[clamp(18px,2.2vw,22px)] font-bold tracking-[-0.015em] text-navy">
                {u.titulo}
              </h3>
              <span className="shrink-0 font-mono text-[12.5px] text-muted">{u.horas}</span>
              <span aria-hidden="true" className="shrink-0 font-mono text-[18px] text-amber">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">&minus;</span>
              </span>
            </summary>
            {/* Cerrado solo se ve el título: con el resumen de cada unidad a la
                vista, el temario era un muro de texto (07/10/2026). */}
            <div className="pb-8 sm:pl-[92px]">
              <p className="mb-4 max-w-[66ch] text-[15.5px] leading-[1.6] font-bold text-ink">{u.llevas}</p>
              <ul className="max-w-[66ch] list-none">
                {u.claves.map((k) => (
                  <li
                    key={k}
                    className="relative border-b border-line-soft py-3 pl-6 text-[15px] leading-[1.55] last:border-b-0 before:absolute before:top-[1.15rem] before:left-0 before:h-1.5 before:w-1.5 before:rounded-[1px] before:bg-amber before:content-['']"
                  >
                    {k}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-[11px] leading-snug tracking-[0.06em] text-muted uppercase">
                {u.videos.length === 1 ? 'Clase en vídeo' : 'Clases en vídeo'}: {u.videos.join(' · ')}
              </p>
            </div>
          </details>
        ))}
      </div>

    </Seccion>
  )
}

function ParaQuien({ curso }: { curso: CursoSuelto }) {
  return (
    <Seccion id="para-quien">
      <Titulo eyebrow="Para quién es">
        A quién va <span className="text-amber">dirigido</span>
      </Titulo>
      <ul className="mt-14 grid list-none gap-x-12 gap-y-8 md:grid-cols-2">
        {curso.perfiles.map((p, i) => (
          <li
            key={p.titulo}
            style={cascada(i, 90)}
            className={`reveal border-l-2 border-amber pl-5 ${impar(curso.perfiles, i) ? 'md:col-span-2' : ''}`}
          >
            <b className="block text-[clamp(19px,2.2vw,22px)] font-extrabold tracking-[-0.015em] text-ink">
              {p.titulo}
            </b>
            <span className="mt-2 block max-w-[52ch] text-[16px] leading-[1.6] text-body">{p.texto}</span>
          </li>
        ))}
      </ul>
    </Seccion>
  )
}

/** Navy con la foto, como el docente del despacho. La bio es la del programa del curso. */
function Docente({ curso }: { curso: CursoSuelto }) {
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
            <p className="mt-3 font-mono text-[12px] tracking-[0.1em] text-[#FFB36B] uppercase">{DOCENTE.rol}</p>
            {curso.docente.parrafos.map((p, i) => (
              <p key={i} className="mt-6 max-w-[58ch] text-[16.5px] leading-[1.65] text-white/80">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Bloque de precio en navy, como el de matrícula del despacho. El botón va a la tienda. */
function Matricula({ curso, c, rebaja, tienda }: { curso: CursoSuelto; c: Curso; rebaja?: number; tienda: string }) {
  const libre: Curso | undefined = curso.gratis ? CURSOS[curso.gratis] : undefined
  const video = curso.gratis ? gratisDe(curso.gratis)?.video : undefined
  return (
    <Seccion id="matricula" alterna>
      <Titulo eyebrow="Precio">
        Lo que cuesta y <span className="text-amber">cómo entrar</span>
      </Titulo>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="reveal flex flex-col overflow-hidden rounded-xl bg-navy p-8 text-white">
          <p className="text-center font-mono text-[11px] font-semibold tracking-[0.18em] text-[#FFB36B] uppercase">
            Precio del curso
          </p>
          <div className="mt-5 flex justify-center">
            <Precio c={c} rebaja={rebaja} claro />
          </div>
          {rebaja ? (
            <p className="mt-6 rounded-lg bg-card px-5 py-3 text-center text-[14.5px] font-extrabold text-ink">
              Precio de lanzamiento hasta el <span className="text-aviso-texto">{FIN_LANZAMIENTO.texto}</span>
            </p>
          ) : null}
          <ul className="mt-8 list-none border-t border-white/15 pt-6">
            {curso.incluye.map((l) => (
              <li
                key={l}
                className="relative border-b border-white/10 py-3 pl-6 text-[15px] text-white/85 last:border-b-0 before:absolute before:top-[1.2rem] before:left-0 before:h-1.5 before:w-1.5 before:rounded-[1px] before:bg-amber before:content-['']"
              >
                {l}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            {/* Como en el despacho: el botón principal de la tarjeta sube al
                formulario. Quien ya lo tiene claro se matricula debajo. */}
            <a href="#solicitud" className={`${botonSolido} block w-full px-7 py-4 text-[16px]`}>
              Solicitar mi diagnóstico gratuito
            </a>
            <div className="mt-6 border-t border-white/15 pt-6 text-center">
              <p className="text-[14.5px] text-white/80">¿Lo tienes claro?</p>
              <a
                href={tienda}
                className={`${boton} mt-3 block w-full border border-white/40 px-7 py-3.5 text-[15px] text-white hover:bg-white/10`}
              >
                Matricularme
              </a>
              <p className="mt-3 text-[12.5px] text-white/60">La matrícula y el pago se hacen en la tienda de AFCademIA.</p>
            </div>
          </div>
        </div>

        {/* Como en el despacho: al lado del precio, qué pasa cuando se solicita el diagnóstico. */}
        <div className="reveal">
          <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
            Qué pasa después
          </p>
          <h3 className="mt-4 max-w-[24ch] text-[clamp(24px,3.2vw,32px)] font-extrabold tracking-[-0.025em] text-ink">
            Lo que pasa cuando <span className="text-amber">solicitas tu diagnóstico</span>
          </h3>
          <ol className="mt-9 list-none">
            {PASOS_INFO.map((p) => (
              <li key={p.cuando} className="border-l-2 border-amber pb-8 pl-5 last:pb-0">
                <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] text-amber uppercase">
                  {p.cuando}
                </p>
                <b className="mt-2 block text-[17px] leading-snug font-bold text-ink">{p.titulo}</b>
                <span className="mt-1.5 block max-w-[52ch] text-[15px] leading-[1.6] text-muted">{p.texto}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[14.5px] text-muted">
            ¿Prefieres escribir o llamar?{' '}
            <a href={`mailto:${CIERRE.email}`} className="font-bold text-navy underline decoration-amber decoration-2 underline-offset-4">
              {CIERRE.email}
            </a>{' '}
            ·{' '}
            <a href={`tel:${CIERRE.telefono.tel}`} className="font-bold text-navy underline decoration-amber decoration-2 underline-offset-4">
              {CIERRE.telefono.ver}
            </a>
          </p>
        </div>
      </div>

      {/* Debajo, a lo ancho: la clase gratuita y las notas. */}
      {libre && curso.gratis ? (
        <div className="reveal mt-14 grid items-center gap-8 rounded-[10px] border border-line bg-paper p-6 sm:p-8 md:grid-cols-[0.9fr_1.1fr]">
          {video ? (
            <video
              className="aspect-video w-full rounded-lg bg-navy-deep"
              controls
              playsInline
              preload="none"
              poster={video.portada}
              aria-label={video.titulo}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ) : null}
          <div>
            <p className="font-mono text-[10.5px] font-semibold tracking-[0.1em] text-muted uppercase">
              Antes de decidir · {libre.horas} h · gratis
            </p>
            <p className="mt-2 text-[19px] leading-[1.3] font-extrabold tracking-[-0.015em] text-navy">{libre.nombre}</p>
            <p className="mt-2 max-w-[48ch] text-[15px] leading-[1.55] text-body">{libre.texto}</p>
            <a
              href={libre.pagina ?? enlaceTienda(curso.gratis, 'pagina-curso')}
              className="mt-4 inline-block font-bold text-navy underline decoration-amber decoration-2 underline-offset-4"
            >
              Ver la clase gratuita
            </a>
          </div>
        </div>
      ) : null}
    </Seccion>
  )
}
