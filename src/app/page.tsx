import { AvisoPendiente } from '@/components/cta'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Acreditaciones } from '@/components/acreditaciones'
import { RevealObserver } from '@/components/reveal'
import { Problema, Circuitos, Temario } from '@/components/secciones-venta'
import { Docente, ComoSeEstudia, Preguntas, Matricula, Pasos, Testimonios, Encaje } from '@/components/secciones-info'
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
        <Circuitos />
        <Temario />
        <Docente />
        <ComoSeEstudia />
        <Testimonios />
        <Encaje />
        <Matricula />
        <Pasos />
        <Preguntas />
      </main>
      <Pie />
      <RevealObserver />
    </>
  )
}
