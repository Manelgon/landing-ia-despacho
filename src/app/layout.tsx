import type { Metadata } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Las tipografías se sirven desde el propio dominio: next/font las descarga al
// compilar. Pedidas a fonts.googleapis.com, cada visita mandaba la IP a Google
// antes de ningún consentimiento, y eso obligaba a poner banner de cookies
// (revisión legal del 25 de septiembre de 2026).
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  // La landing vive en el subdominio. Con la raíz aquí, la imagen de vista previa
  // se pedía a afcademia.com (otro WordPress) y daba 404: WhatsApp no montaba la tarjeta.
  metadataBase: new URL('https://automatiza.afcademia.com'),
  title: 'IA para el Despacho · Itinerario · AFCademIA',
  description:
    'Itinerario online para administradores de fincas. Treinta unidades, cincuenta y cuatro horas y cinco flujos funcionando en tus propias cuentas.',
  openGraph: {
    title: 'IA para el Despacho · AFCademIA',
    description:
      'De la primera petición a los flujos que trabajan solos. Cinco tareas del despacho que ya no toca nadie.',
    images: ['/open-graph-1200x630.jpg'],
    url: 'https://automatiza.afcademia.com',
    siteName: 'AFCademIA',
    locale: 'es_ES',
    type: 'website',
  },
  // El icono anterior tenía la casa en blanco crema: sobre la pestaña del
  // navegador solo se veía el trazo naranja suelto.
  icons: { icon: '/simbolo-afcademia.png' },
}

export const viewport = {
  themeColor: '#003D6B',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${jetbrains.variable}`}>
      <head>
        {/* Sin JavaScript no hay IntersectionObserver: se enseña todo. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.reveal{opacity:1 !important;transform:none !important}',
            }}
          />
        </noscript>
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  )
}
