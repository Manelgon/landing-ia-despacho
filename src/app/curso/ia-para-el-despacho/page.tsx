import type { Metadata } from 'next'
import { AvisoPendiente } from '@/components/cta'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Acreditaciones } from '@/components/acreditaciones'
import { RevealObserver } from '@/components/reveal'
import { Problema, Flujos, Temario } from '@/components/secciones-venta'
import { Docente, Preguntas, Matricula, Testimonios, Encaje } from '@/components/secciones-info'
import { Pie } from '@/components/pie'

/**
 * /curso/ia-para-el-despacho · la página de venta del itinerario.
 *
 * Hasta el 7 de octubre de 2026 estaba en la portada. La portada es ahora el
 * catálogo de cursos (src/app/page.tsx). Los enlaces de partner que se
 * compartieron a la portada (?ref=...) llegan aquí por la redirección de
 * next.config.ts.
 */
export const metadata: Metadata = {
  title: 'IA para el Despacho · Itinerario · AFCademIA',
  description:
    'Itinerario online para administradores de fincas. Treinta unidades, cincuenta y cuatro horas y cinco flujos funcionando en tus propias cuentas.',
  openGraph: {
    title: 'IA para el Despacho · AFCademIA',
    description:
      'De la primera petición a los flujos que trabajan solos. Cinco tareas del despacho que ya no toca nadie.',
    images: ['/open-graph-1200x630.jpg'],
    url: 'https://automatiza.afcademia.com/curso/ia-para-el-despacho',
    siteName: 'AFCademIA',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <AvisoPendiente />
      <Navbar />
      <Hero />
      <Acreditaciones />
      <main id="contenido">
        <Problema />
        <Flujos />
        <Temario />
        <Docente />
        <Testimonios />
        <Encaje />
        <Matricula />
        <Preguntas />
      </main>
      <Pie />
      <RevealObserver />
    </>
  )
}
