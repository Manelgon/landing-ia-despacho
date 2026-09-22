import Image from 'next/image'

/**
 * Pie común de AFCademIA, con la misma estructura y los mismos enlaces que
 * las landings de Santander y Graduados Sociales. Los datos —correo, redes,
 * páginas legales— salen de ahí; aquí solo cambia la piel para que use los
 * tokens de esta landing.
 */

const REDES = [
  {
    nombre: 'LinkedIn',
    href: 'https://www.linkedin.com/company/afcademia',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  },
  {
    nombre: 'Facebook',
    href: 'https://www.facebook.com/afcademia',
    path: 'M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.79.71-1.79 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z',
  },
  {
    nombre: 'YouTube',
    href: 'https://www.youtube.com/@afcademia',
    path: 'M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5a3 3 0 00-2.1 2.1C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1C4.4 20.4 12 20.4 12 20.4s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z',
  },
]

const FORMACION = [
  { texto: 'Beneficios', href: 'https://afcademia.com/#beneficios' },
  { texto: 'Quiénes somos', href: 'https://afcademia.com/#quienes-somos' },
  { texto: 'Valores AFC', href: 'https://afcademia.com/#valores' },
  { texto: 'Qué ofrecemos', href: 'https://afcademia.com/#que-ofrecemos' },
  { texto: 'Clase gratuita', href: 'https://afcademia.com/#clase-gratuita' },
  { texto: 'Preguntas frecuentes', href: 'https://afcademia.com/#faq' },
]

const LEGAL = [
  { texto: 'Aviso legal', href: 'https://afcademia.com/aviso-legal/' },
  { texto: 'Política de privacidad', href: 'https://afcademia.com/politica-de-privacidad/' },
  { texto: 'Política de cookies', href: 'https://afcademia.com/politica-de-cookies/' },
  {
    texto: 'Declaración de accesibilidad',
    href: 'https://afcademia.com/accesibilidad#declaracion-accesibilidad-title',
  },
]

function Columna({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] font-semibold tracking-[0.16em] text-amber uppercase">
        {titulo}
      </h2>
      {children}
    </div>
  )
}

const enlace =
  'text-[14.5px] text-white/70 no-underline transition-colors hover:text-white'

export function Pie() {
  return (
    <footer id="contacto" className="bg-navy-deep text-white">
      <div className="mx-auto w-full max-w-[1060px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.1fr] md:gap-10">
          {/* Marca */}
          <div>
            <Image
              src="/logo-afcademia-negativo.png"
              alt="AFCademIA"
              width={2092}
              height={410}
              className="h-auto w-[168px]"
            />
            <p className="mt-6 max-w-[38ch] text-[14.5px] leading-[1.65] text-white/70">
              La academia tecnológica para administradores de fincas. Aprende a automatizar procesos
              reales, optimizar tu tiempo y liderar la era digital en la gestión de comunidades.
            </p>
            <ul className="mt-7 flex list-none gap-3">
              {REDES.map((r) => (
                <li key={r.nombre}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={r.nombre}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/70 transition-colors hover:border-amber hover:text-amber"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={r.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Columna titulo="Contacto">
            <ul className="mt-5 list-none space-y-3">
              <li className="text-[14.5px] text-white/70">Málaga, España</li>
              <li>
                <a href="mailto:cursos@afcademia.com" className={enlace}>
                  cursos@afcademia.com
                </a>
              </li>
              <li>
                <a href="https://afcademia.com" target="_blank" rel="noopener noreferrer" className={enlace}>
                  afcademia.com
                </a>
              </li>
            </ul>
          </Columna>

          <Columna titulo="Formación">
            <ul className="mt-5 list-none space-y-3">
              {FORMACION.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={enlace}>
                    {l.texto}
                  </a>
                </li>
              ))}
            </ul>
          </Columna>

          <Columna titulo="Legal">
            <ul className="mt-5 list-none space-y-3">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={enlace}>
                    {l.texto}
                  </a>
                </li>
              ))}
            </ul>
          </Columna>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-7">
          <p className="font-mono text-[11.5px] tracking-[0.06em] text-white/50 uppercase">
            © 2026 AFCademIA · Todos los derechos reservados
          </p>
          <p className="font-mono text-[11.5px] tracking-[0.06em] text-white/50 uppercase">
            Startup certificada por ENISA
          </p>
        </div>
      </div>
    </footer>
  )
}
