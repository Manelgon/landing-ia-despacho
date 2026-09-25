import Image from 'next/image'

/**
 * Pie de AFCademIA, copiado del de afcademia.com tras la adecuación legal de
 * Prodat (24 de septiembre de 2026): mismas redes (más YouTube, que la web no enlaza y va al canal de Serincosol por decisión de Manel), dirección, teléfono,
 * páginas legales y sellos (sin el de Prodat). Si cambia allí, hay que cambiarlo aquí.
 *
 * El logo de Fundae lleva siempre debajo «Formación bonificable a través de
 * Fundae»: es marca de un tercero y la frase acota lo que significa. No se
 * quita.
 */

const REDES = [
  {
    nombre: 'LinkedIn',
    href: 'https://www.linkedin.com/company/afcademia/',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  },
  {
    nombre: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590734704808',
    path: 'M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.79.71-1.79 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z',
  },
  {
    nombre: 'Instagram',
    href: 'https://www.instagram.com/afcademia_cursos/',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z',
  },
  {
    nombre: 'YouTube',
    href: 'https://www.youtube.com/@serincosol',
    path: 'M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5a3 3 0 00-2.1 2.1C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1C4.4 20.4 12 20.4 12 20.4s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z',
  },
]

const FORMACION = [
  { texto: 'Beneficios', href: 'https://afcademia.com/#beneficios' },
  { texto: 'Quiénes somos', href: 'https://afcademia.com/#quienes-somos' },
  { texto: 'Valores AFC', href: 'https://afcademia.com/#valores' },
  { texto: 'Qué ofrecemos', href: 'https://afcademia.com/#ofrecemos' },
  { texto: 'Clase gratuita', href: 'https://afcademia.com/#gratuita' },
  { texto: 'Clases', href: 'https://afcademia.com/tienda/' },
  { texto: 'Preguntas frecuentes', href: 'https://afcademia.com/#faq' },
  { texto: 'Campus', href: 'https://campus.afcademia.com/acceso.php' },
]

const LEGAL = [
  { texto: 'Aviso legal y condiciones', href: 'https://afcademia.com/aviso-legal/' },
  { texto: 'Política de privacidad', href: 'https://afcademia.com/politica-de-privacidad/' },
  { texto: 'Política de cookies', href: 'https://afcademia.com/politica-de-cookies/' },
  { texto: 'Tablón informativo', href: 'https://afcademia.com/tablon-informativo/' },
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
            {/* Símbolo y logotipo juntos: el símbolo solo no dice el nombre,
                y el logotipo solo pierde la casa, que es lo que se reconoce. */}
            <div className="flex items-center gap-4">
              <Image
                src="/simbolo-afcademia-negativo.png"
                alt=""
                width={500}
                height={500}
                aria-hidden="true"
                className="h-[42px] w-[42px] shrink-0"
              />
              <Image
                src="/logo-afcademia-negativo.png"
                alt="AFCademIA"
                width={2092}
                height={410}
                className="h-auto w-[150px]"
              />
            </div>
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
              <li className="text-[14.5px] leading-[1.55] text-white/70">
                Calle Steve Jobs 2, Oficina 9
                <br />
                29590 Málaga
              </li>
              <li>
                <a href="mailto:cursos@afcademia.com" className={enlace}>
                  cursos@afcademia.com
                </a>
              </li>
              <li>
                <a href="tel:+34661239319" className={enlace}>
                  +34 661 239 319
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

        {/* Los sellos de ENISA y Fundae del pie de afcademia.com (el de Prodat no va). Van sobre blanco: el logo
            de Fundae es azul y no se puede recolorear. */}
        <ul className="mt-14 flex list-none flex-wrap items-start justify-center gap-x-10 gap-y-6 rounded-xl bg-card px-6 py-6">
          <li className="flex flex-col items-center">
            <span className="flex h-[76px] items-center">
              <Image
                src="/sello-enisa.png"
                alt="AFCademIA, startup certificada por ENISA como empresa emergente conforme a la Ley 28/2022"
                width={320}
                height={320}
                className="h-[70px] w-[70px]"
              />
            </span>
          </li>
          <li className="flex flex-col items-center">
            <span className="flex h-[76px] items-center">
              <Image
                src="/logo-fundae.png"
                alt="Fundación Estatal para la Formación en el Empleo (Fundae)"
                width={414}
                height={64}
                className="h-auto w-[150px]"
              />
            </span>
            <span className="mt-2 text-[12px] text-muted">Formación bonificable a través de Fundae</span>
          </li>
        </ul>

        <p className="mt-8 border-t border-white/12 pt-7 text-center font-mono text-[11.5px] tracking-[0.06em] text-white/50 uppercase">
          © 2026 AFCademIA · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
