import type { Codigo } from '@/content/catalogo'

/**
 * Lo que necesita la página de un curso suelto (/curso/<slug>).
 *
 * La referencia es la página de IA para el Despacho (07/10/2026): mismo orden
 * y mismas piezas. Hero → Tu despacho hoy → Lo que te llevas (mosaico) →
 * Temario → Quién enseña → Para quién es → Precio → Preguntas.
 *
 * Los textos salen del programa y de la ficha de cada curso, en
 * Evolmind - Scroms/cursos/<curso>/3-Programa-y-guia y FICHA-DEL-CURSO.md.
 * No se escriben de nuevo: si el curso cambia, se cambia allí y se trae aquí.
 *
 * Precio, horas y enlace a la tienda no van aquí: se leen del catálogo
 * (src/content/catalogo.ts) con el código, para que no puedan no coincidir.
 */
export type CursoSuelto = {
  codigo: Codigo
  slug: string
  meta: { titulo: string; descripcion: string }

  hero: {
    eyebrow: string
    titular: { antes: string; destacado: string; despues: string }
    subtitulo: string
    entradilla?: string
    /** Foto de fondo, de public/. */
    imagen: string
  }
  /** Las cuatro cifras al pie del hero. */
  cifras: { valor: string; etiqueta: string }[]

  /** «Tu despacho hoy»: situaciones numeradas, como en IA para el Despacho. */
  partida: {
    titulo: { antes: string; destacado: string }
    casos: string[]
    /** Frase en navy bajo el titular. */
    cierre: string
    /** La regla del curso, en una línea. */
    regla: string
  }

  /** «Lo que te llevas»: el mosaico, como «Lo que montas» del despacho. */
  llevas: {
    sub: string
    tarjetas: { etiqueta: string; titulo: string; texto: string; icono: string; imagen: string }[]
  }

  unidades: {
    titulo: string
    horas: string
    llevas: string
    claves: string[]
    videos: string[]
  }[]

  perfiles: { titulo: string; texto: string }[]

  docente: { parrafos: string[] }

  /** Lista del bloque de precio. */
  incluye: string[]

  /** Preguntas del final, como en el despacho. */
  preguntas: { p: string; r: string }[]

  /** Clase gratuita que lleva a este curso, si la hay. */
  gratis?: Codigo
}
