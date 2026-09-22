import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://afcademia.com'),
  title: 'IA para el Despacho · Itinerario · AFCademIA',
  description:
    'Itinerario online para administradores de fincas. Treinta unidades, cincuenta y cuatro horas y cinco circuitos funcionando en tus propias cuentas.',
  openGraph: {
    title: 'IA para el Despacho · AFCademIA',
    description:
      'De la primera petición a los circuitos que trabajan solos. Cinco tareas del despacho que ya no toca nadie.',
    images: ['/open-graph-1200x630.jpg'],
    locale: 'es_ES',
    type: 'website',
  },
  icons: { icon: '/icono-afcademia.webp' },
}

export const viewport = {
  themeColor: '#003D6B',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
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
