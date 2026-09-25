import { AvisoPendiente } from '@/components/cta'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Acreditaciones } from '@/components/acreditaciones'
import { RevealObserver } from '@/components/reveal'
import { Problema, Flujos, Temario } from '@/components/secciones-venta'
import { Docente, Preguntas, Matricula, Testimonios, Encaje } from '@/components/secciones-info'
import { Pie } from '@/components/pie'

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
