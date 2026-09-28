import type { Metadata } from 'next'
import Image from 'next/image'
import { FAQ_FUNDADORES, FUNDADORES } from '@/content/fundadores'
import { RegistroFundador } from '@/components/registro-fundador'
import { RevealObserver } from '@/components/reveal'
import { Seccion, Titulo } from '@/components/ui'
import { Flujos, Temario } from '@/components/secciones-venta'
import { Docente, Preguntas } from '@/components/secciones-info'
import { Pie } from '@/components/pie'

/**
 * /fundadores · el mismo itinerario que la landing principal, gratis y con
 * matrícula directa. Ver src/content/fundadores.ts
 *
 * Las secciones del curso (Flujos, Temario, Docente, Preguntas) son las de la
 * landing: si cambia el temario allí, cambia aquí solo. No lleva precio,
 * testimonios ni el filtro de «para quién es», que son de la venta.
 *
 * Página oculta: no la enlaza nadie y no se indexa. Solo se llega con el enlace.
 */
export const metadata: Metadata = {
  title: 'Acceso fundadores · IA para el Despacho · AFCademIA',
  description: 'Registro de fundadores de AFCademIA.',
  robots: { index: false, follow: false },
  alternates: { canonical: null },
  openGraph: null,
}

const ENLACES = [
  { href: '#flujos', texto: 'Lo que montas' },
  { href: '#temario', texto: 'Temario' },
  { href: '#docente', texto: 'Quién enseña' },
  { href: '#registro', texto: 'Registro' },
]

const boton =
  'inline-block rounded-lg bg-amber font-bold text-white no-underline transition-all duration-200 hover:bg-amber-hover active:scale-[0.98]'

export default function Fundadores() {
  const { pasos, incluye, titular, cierre } = FUNDADORES

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-navy-deep/92 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1060px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <a href="#" className="flex shrink-0 items-center" aria-label="AFCademIA, volver arriba">
            <Image
              src="/logo-afcademia-negativo.png"
              alt="AFCademIA · Formación para administradores de fincas"
              width={2092}
              height={410}
              priority
              className="h-auto w-[122px] sm:w-[144px]"
            />
          </a>
          <div className="flex items-center gap-7">
            <ul className="hidden list-none items-center gap-6 lg:flex">
              {ENLACES.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    className="font-mono text-[11.5px] tracking-[0.12em] whitespace-nowrap text-white/75 uppercase no-underline transition-colors hover:text-white"
                  >
                    {e.texto}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#registro" className={`${boton} px-5 py-2.5 text-[13.5px] whitespace-nowrap`}>
              {FUNDADORES.cta}
            </a>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-paper">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/recursos-web/fondos/hero-malaga-puerto.webp')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-white/75 from-40% via-white/50 to-white/15 max-md:bg-white/75"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1060px] px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
          <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-aviso-texto uppercase">
            {FUNDADORES.eyebrow}
          </p>
          <h1 className="mt-6 max-w-[17ch] text-[clamp(34px,6.2vw,62px)] font-extrabold tracking-[-0.035em] text-ink">
            {titular.antes}
            <span className="text-amber">{titular.destacado}</span>
            {titular.despues}
          </h1>
          <p className="mt-6 max-w-[48ch] text-[clamp(16px,2vw,19px)] leading-[1.6] text-body">
            {FUNDADORES.entradilla}
          </p>

          {incluye.length > 0 ? (
            <ul className="mt-8 max-w-[52ch] list-none border-t border-navy/15">
              {incluye.map((x, i) => (
                <li key={x} className="flex gap-4 border-b border-navy/15 py-3.5 text-[15.5px] text-ink">
                  <span className="font-mono text-[12px] text-amber tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  {x}
                </li>
              ))}
            </ul>
          ) : null}

          <a href="#registro" className={`${boton} mt-9 px-8 py-4 text-[16px]`}>
            {FUNDADORES.cta}
          </a>
          <p className="mt-5 text-[13.5px] text-muted">{FUNDADORES.bajoTitular}</p>
        </div>
      </header>

      <main id="contenido">
        <Flujos />
        <Temario />
        <Docente />

        {/* El formulario va al final: primero se lee qué es, después se reserva. */}
        <Seccion id="registro">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_480px]">
            <div>
              <Titulo eyebrow={cierre.eyebrow} sub={cierre.texto}>
                {cierre.titulo}
              </Titulo>

              {/* Los cuatro pasos, junto al formulario: se lee qué pasa al enviarlo */}
              <ol className="mt-10 list-none border-t border-line">
                {pasos.lista.map((p, i) => (
                  <li
                    key={p.titulo}
                    className="reveal grid grid-cols-[28px_minmax(0,1fr)] gap-4 border-b border-line py-5"
                    style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}
                  >
                    <span className="pt-1 font-mono text-[12px] text-amber tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">{p.cuando}</p>
                      <h3 className="mt-1 text-[17px] font-extrabold tracking-[-0.01em]">{p.titulo}</h3>
                      <p className="mt-1 max-w-[46ch] text-[15px] leading-[1.6]">{p.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-line bg-card p-6 sm:p-7">
              <h3 className="text-[22px] leading-[1.2] font-extrabold tracking-[-0.02em] text-navy">
                {FUNDADORES.formulario.titulo}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-muted">{FUNDADORES.formulario.entradilla}</p>
              <RegistroFundador />
            </div>
          </div>
        </Seccion>

        <Preguntas lista={FAQ_FUNDADORES} />
      </main>

      <Pie />
      <RevealObserver />
    </>
  )
}
