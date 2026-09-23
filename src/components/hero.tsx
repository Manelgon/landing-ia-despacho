import Image from 'next/image'
import { CURSO, CIFRAS } from '@/content/curso'
import { Cta } from './cta'

/**
 * El hero no lleva animación de entrada a propósito: es lo primero que se
 * pinta y tiene que estar legible antes de que hidrate nada.
 *
 * La marca va sobre el navy con logo-afcademia-negativo.png: el PNG normal
 * lleva el fondo blanco incrustado y encima del azul se veía como un recorte
 * pegado. El negativo se genera desde el original respetando el naranja.
 */
export function Hero() {
  return (
    <header>
      <div className="relative overflow-hidden bg-paper text-ink">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/recursos-web/fondos/hero-malaga-puerto.webp')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-white/70 from-40% via-white/45 to-white/10 max-md:bg-white/70"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1060px] px-5 sm:px-8">
          <div className="pt-20 pb-16 sm:pt-24 sm:pb-20">
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-aviso-texto uppercase">
              {CURSO.eyebrow}
            </p>

            <h1 className="mt-6 max-w-[17ch] text-[clamp(34px,6.2vw,60px)] font-extrabold tracking-[-0.035em] text-ink">
              {CURSO.nombre}
            </h1>

            <p className="mt-6 max-w-[46ch] text-[clamp(17px,2.2vw,21px)] leading-[1.5] font-bold text-ink">
              {CURSO.claim.para}
            </p>

            <p className="mt-4 max-w-[50ch] text-[clamp(16px,2vw,19px)] leading-[1.6] text-body">
              {CURSO.claim.resultado}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Cta />
              <a
                href="#temario"
                className="inline-block rounded-lg border border-navy/35 px-7 py-3.5 text-[15px] font-bold text-navy no-underline transition-colors hover:bg-white/60 active:scale-[0.98]"
              >
                Ver el temario
              </a>
            </div>

            <p className="mt-5 text-[13.5px] text-muted">{CURSO.bajoBoton}</p>
          </div>

          {/* Las cifras cierran el hero como pie de página del bloque. */}
          <dl className="grid grid-cols-2 border-t border-navy/15 bg-white/75 sm:grid-cols-4">
            {CIFRAS.map((c, i) => (
              <div
                key={c.etiqueta}
                className={`px-4 py-8 text-center ${i % 2 === 1 ? 'border-l border-navy/15' : ''} sm:border-l sm:first:border-l-0 ${i >= 2 ? 'border-t border-navy/15 sm:border-t-0' : ''}`}
              >
                <dt className="sr-only">{c.etiqueta}</dt>
                <dd>
                  <b className="block font-mono text-[clamp(32px,4.4vw,44px)] leading-none font-bold tracking-[-0.02em] text-navy">
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
