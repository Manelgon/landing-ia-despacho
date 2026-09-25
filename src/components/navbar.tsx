import Image from 'next/image'
import { Cta } from './cta'
import { NavMovil } from './nav-movil'

// Cada enlace se llama igual que el antetítulo de su sección.
const ENLACES = [
  { href: '#partida', texto: 'Tu despacho hoy' },
  { href: '#flujos', texto: 'Lo que montas' },
  { href: '#temario', texto: 'Temario' },
  { href: '#docente', texto: 'Quién enseña' },
  { href: '#encaje', texto: 'Para quién es' },
  { href: '#matricula', texto: 'Precio' },
]

/**
 * Barra fija. Va sobre el navy del hero, así que el logo es el negativo.
 * Por debajo de 1280 px los enlaces pasan al menú lateral (nav-movil.tsx).
 * En el móvil el botón tampoco va en la barra: está al pie de ese menú.
 */
export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-navy-deep/92 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1060px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a
          href="#contenido"
          className="flex shrink-0 items-center"
          aria-label="AFCademIA, ir al contenido"
        >
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
          <div className="hidden shrink-0 whitespace-nowrap sm:block">
            <Cta tamano="compacto" />
          </div>
          <NavMovil enlaces={ENLACES} cta={<Cta />} />
        </div>
      </div>
    </nav>
  )
}
