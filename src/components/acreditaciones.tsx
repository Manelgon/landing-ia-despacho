import Image from 'next/image'

/**
 * Franja de acreditaciones, justo debajo del hero.
 *
 * Va sobre blanco a propósito: el logo de FUNDAE es azul sobre claro y no se
 * puede recolorear para ponerlo sobre el navy, porque es marca de un tercero.
 * De los dos archivos solo se ha quitado el fondo; los colores están intactos.
 */
/**
 * `fundae`: la frase bajo el logo. En toda la web, también en IA para el
 * Despacho, la de las fichas de la tienda: posibilidad de gestión cuando se
 * cumplan los requisitos (decidido por Manel el 07/10/2026).
 */
export function Acreditaciones({
  fundae = 'Posibilidad de gestión mediante Fundae',
}: {
  fundae?: string
}) {
  return (
    <section aria-label="Acreditaciones" className="border-b border-line bg-card">
      <div className="mx-auto flex w-full max-w-[1060px] flex-wrap items-center justify-center gap-x-10 gap-y-5 px-5 py-8 sm:gap-x-14 sm:px-8">

        <ul className="flex list-none flex-wrap items-start justify-center gap-x-16 gap-y-8 sm:gap-x-24">
          <li className="flex flex-col items-center">
            <div className="flex h-[72px] items-center">
            <Image
              src="/sello-enisa.png"
              alt="AFCademIA, startup certificada por ENISA. Empresa emergente, Ley 28/2022"
              width={320}
              height={320}
              className="h-[70px] w-[70px]"
            />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">Empresa certificada por ENISA</p>
          </li>
          <li className="flex flex-col items-center">
            <div className="flex h-[72px] items-center">
            <Image
              src="/logo-fundae.png"
              alt="Fundación Estatal para la Formación en el Empleo"
              width={414}
              height={64}
              className="h-auto w-[172px]"
            />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">{fundae}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
