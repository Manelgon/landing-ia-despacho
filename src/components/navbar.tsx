import Image from 'next/image'
import { Cta } from './cta'

// "Precio" no está: el botón lleva a la misma sección, donde el importe
// queda a la izquierda del formulario.
const ENLACES = [
  { href: '#flujos', texto: 'Flujos' },
  { href: '#temario', texto: 'Temario' },
  { href: '#docente', texto: 'El docente' },
  { href: '#testimonios', texto: 'Opiniones' },
]

/**
 * Barra fija. Va sobre el navy del hero, así que el logo es el negativo.
 * Los enlaces se esconden en móvil: son anclas de la propia página y el
 * botón es lo único que hace falta ahí.
 */
export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-navy-deep/92 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1060px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a href="#contenido" className="shrink-0" aria-label="AFCademIA, ir al contenido">
          <Image
            src="/logo-afcademia-negativo.png"
            alt="AFCademIA · Formación para administradores de fincas"
            width={2092}
            height={410}
            priority
            className="h-auto w-[134px] sm:w-[158px]"
          />
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden list-none items-center gap-6 lg:flex xl:gap-7">
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
          <Cta tamano="compacto" />
        </div>
      </div>
    </nav>
  )
}
