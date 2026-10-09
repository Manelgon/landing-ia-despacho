import Image from 'next/image'
import { NavMovil } from './nav-movil'

/**
 * Barra fija del catálogo y de las páginas de curso suelto. La misma que la
 * de IA para el Despacho (navbar.tsx), pero con los enlaces y el botón que le
 * pase cada página. El logo lleva a la portada, que es el catálogo.
 */
export function Barra({
  enlaces,
  cta,
  volver = false,
}: {
  enlaces: { href: string; texto: string }[]
  cta: { href: string; texto: string }
  /**
   * En las páginas de curso: «Todos los cursos» encabeza el menú del móvil.
   * La franja «Ver todos los cursos» de encima de la barra se quitó el
   * 08/10/2026: sacaba a la gente del embudo de cada curso. El logo sigue
   * llevando al catálogo.
   */
  volver?: boolean
}) {
  const boton =
    'inline-block rounded-lg bg-amber text-center font-bold text-white no-underline transition-all duration-200 hover:bg-amber-hover active:scale-[0.98]'

  return (
    <>
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-navy-deep/92 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1060px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a href="/" className="flex shrink-0 items-center" aria-label="AFCademIA, ir al catálogo de cursos">
          <Image
            src="/logo-afcademia-negativo.png"
            alt="AFCademIA · Formación para administradores de fincas"
            width={2092}
            height={410}
            priority
            className="h-auto w-[122px] sm:w-[144px]"
          />
        </a>
        <div className="flex items-center gap-3 xl:gap-7">
          <ul className="hidden list-none items-center gap-6 xl:flex">
            {enlaces.map((e) => (
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
          <a href={cta.href} className={`${boton} hidden px-5 py-2.5 text-[13.5px] whitespace-nowrap sm:block`}>
            {cta.texto}
          </a>
          <NavMovil
            enlaces={volver ? [{ href: '/', texto: 'Todos los cursos' }, ...enlaces] : enlaces}
            cta={
              <a href={cta.href} className={`${boton} px-7 py-3.5 text-[15px]`}>
                {cta.texto}
              </a>
            }
          />
        </div>
      </div>
    </nav>
    </>
  )
}
