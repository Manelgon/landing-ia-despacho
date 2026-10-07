import { CURSOS, DESTACADO, MOSAICO, type Codigo } from './catalogo'
import { FILTRO, PREGUNTAS, type ConfigSolicitud, type Pregunta } from './solicitud'

/**
 * Formularios del catálogo y de las páginas de curso suelto.
 *
 * Es la misma solicitud que la de IA para el Despacho (mismo componente,
 * misma tabla `solicitudes_despacho`), con menos preguntas: las del despacho
 * hablan de automatizar tareas y no sirven para un curso de ley o de
 * ciberseguridad. La columna `curso` dice por qué curso pregunta cada uno.
 *
 * Antes de publicar: ejecutar supabase/curso.sql, que crea las columnas
 * `curso` y `personas`. Sin ellas Supabase rechaza estos formularios.
 */

/** Las tres preguntas del despacho que valen para cualquier curso. */
const COMUNES = Object.fromEntries(
  PREGUNTAS.filter((p) => ['comunidades', 'plazo', 'decide'].includes(p.id)).map((p) => [p.id, p]),
) as Record<'comunidades' | 'plazo' | 'decide', Pregunta>

const PERSONAS: Pregunta = {
  id: 'personas',
  numero: '',
  texto: '¿Para cuántas personas del despacho sería?',
  opciones: ['Solo para mí', '2 o 3 personas', 'Entre 4 y 10', 'Más de 10'],
}

const PLAZO: Pregunta = {
  ...COMUNES.plazo,
  texto: '¿Para cuándo querrías empezar?',
}

/** Numera las preguntas en el orden en que salen: 01, 02… */
const numera = (lista: Pregunta[]) =>
  lista.map((p, i) => ({ ...p, numero: String(i + 1).padStart(2, '0') }))

const TEXTOS = {
  ...FILTRO,
  boton: FILTRO.boton,
  recomienda: FILTRO.recomienda,
}

const FINALIDAD =
  'Valorar qué formación encaja con tu despacho y contactarte por correo o por teléfono para darte la información.'

/** El formulario de la página de un curso: el curso ya se sabe. */
export function solicitudCurso(cod: Codigo): ConfigSolicitud {
  const preguntas = numera([PERSONAS, COMUNES.comunidades, PLAZO, COMUNES.decide])
  return {
    preguntas,
    textos: {
      ...TEXTOS,
      titulo: 'Solicita el diagnóstico de tu despacho',
      entradilla: `${preguntas.length} preguntas, un minuto. Te llamamos y resolvemos tus dudas, también sobre FUNDAE.`,
      exito: {
        titulo: 'Solicitud recibida',
        texto: `Te llamamos para hablar de «${CURSOS[cod].nombre}» y resolver lo que necesites antes de matricularte.`,
      },
    },
    origen: 'automatiza-curso',
    fijos: { curso: cod },
    finalidad: FINALIDAD,
  }
}

/** El formulario de la portada: primero, qué curso le interesa. */
export function solicitudCatalogo(): ConfigSolicitud {
  const curso: Pregunta = {
    id: 'curso',
    numero: '',
    texto: '¿Qué formación te interesa?',
    desplegable: true,
    opciones: [
      ...[DESTACADO, ...MOSAICO].map((c) => ({ texto: CURSOS[c].nombre, valor: c })),
      { texto: 'Aún no lo sé', valor: 'sin-decidir' },
    ],
  }
  const preguntas = numera([curso, PERSONAS, COMUNES.comunidades, PLAZO, COMUNES.decide])
  return {
    preguntas,
    textos: {
      ...TEXTOS,
      titulo: 'Solicita el diagnóstico de tu despacho',
      entradilla: `${preguntas.length} preguntas, un minuto. Te llamamos y te decimos qué curso encaja con tu despacho.`,
      exito: {
        titulo: 'Solicitud recibida',
        texto: 'Te llamamos para ver qué formación encaja con tu despacho y resolver tus dudas, también sobre FUNDAE.',
      },
    },
    origen: 'automatiza-catalogo',
    finalidad: FINALIDAD,
  }
}
