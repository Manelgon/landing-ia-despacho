import Image from 'next/image'
import { CURSO, CIFRAS } from '@/content/curso'
import { Solicitud } from './solicitud'
import { FILTRO } from '@/content/solicitud'
import { CONVERSION } from '@/config/conversion'

/**
 * El hero no lleva animación de entrada a propósito: es lo primero que se
 * pinta y tiene que estar legible antes de que hidrate nada.
 *
 * La marca va sobre el navy con logo-afcademia-negativo.png: el PNG normal
 * lleva el fondo blanco incrustado y encima del azul se veía como un recorte
 * pegado. El negativo se genera desde el original respetando el naranja.
 */
/** Contorno de sello de oferta: 24 picos alrededor de un círculo. */
const SELLO = `polygon(${Array.from({ length: 48 }, (_, i) => {
  const a = (i / 48) * 2 * Math.PI - Math.PI / 2
  const r = i % 2 === 0 ? 50 : 45
  return `${(50 + r * Math.cos(a)).toFixed(2)}% ${(50 + r * Math.sin(a)).toFixed(2)}%`
}).join(', ')})`

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
          {/* La solicitud va en el propio hero y es la única de la página: a la
              derecha en escritorio, debajo del titular en móvil. Todos los
              botones naranjas llevan aquí (#solicitud). */}
          <div className="grid items-start gap-12 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_460px]">
          <div>
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-aviso-texto uppercase">
              {CURSO.eyebrow}
            </p>

            <h1 className="mt-6 max-w-[17ch] text-[clamp(34px,6.2vw,60px)] font-extrabold tracking-[-0.035em] text-ink">
              {CURSO.titular.antes}
              <span className="text-amber">{CURSO.titular.destacado}</span>
              {CURSO.titular.despues}
            </h1>

            <p className="mt-6 max-w-[46ch] text-[clamp(17px,2.2vw,21px)] leading-[1.5] font-bold text-ink">
              {CURSO.claim.para}
            </p>

            <p className="mt-4 max-w-[50ch] text-[clamp(16px,2vw,19px)] leading-[1.6] text-body">
              {CURSO.claim.resultado}
            </p>

            <p className="mt-5 text-[13.5px] text-muted">{CURSO.bajoBoton}</p>
          </div>

          <div id="solicitud" className="relative scroll-mt-28 rounded-2xl border border-navy/10 bg-white/90 p-6 shadow-[0_20px_60px_-20px_rgba(2,33,56,0.35)] backdrop-blur-md">
            {/* El precio como sello de oferta, con las plazas en una cinta. Todo sale de
                config/conversion.ts: en null, cada pieza desaparece sola. */}
            {CONVERSION.precio ? (
              <div className="absolute -top-[68px] -right-14 hidden rotate-[12deg] lg:block" aria-label={`Precio: ${CONVERSION.precio}`}>
                <div
                  className="flex h-[136px] w-[136px] items-center justify-center bg-amber drop-shadow-[0_10px_18px_rgba(255,122,0,0.45)]"
                  style={{ clipPath: SELLO }}
                >
                  <div className="flex h-[104px] w-[104px] flex-col items-center justify-center rounded-full border-2 border-dashed border-white/80 text-white">
                    <span className="font-mono text-[9px] font-semibold tracking-[0.16em] uppercase">Itinerario</span>
                    <span className="mt-1 text-[24px] leading-none font-extrabold tracking-[-0.03em]">
                      {CONVERSION.precio}
                    </span>
                    <span className="mt-1 font-mono text-[8.5px] font-semibold tracking-[0.14em] uppercase opacity-90">
                      Completo
                    </span>
                  </div>
                </div>
                {CONVERSION.plazas.quedan !== null ? (
                  <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-md bg-navy px-3 py-1.5 font-mono text-[10.5px] font-bold tracking-[0.1em] whitespace-nowrap text-white uppercase shadow-lg">
                    {CONVERSION.plazas.quedan === 1 ? 'Queda 1 plaza' : `Quedan ${CONVERSION.plazas.quedan} plazas`}
                  </p>
                ) : null}
              </div>
            ) : null}
            <h2 className="max-w-[300px] pr-2 text-[22px] leading-[1.2] font-extrabold tracking-[-0.02em] text-navy">
              {FILTRO.titulo}
            </h2>
            <p className="mt-2 text-[14px] leading-[1.5] text-muted">{FILTRO.entradilla}</p>
            <Solicitud compacto />
          </div>
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
