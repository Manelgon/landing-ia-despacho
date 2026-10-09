import type { Codigo } from './catalogo'
import { FILTRO, PREGUNTAS, type ConfigSolicitud, type Pregunta } from './solicitud'

/**
 * Formularios de la portada y de las páginas de curso suelto.
 *
 * Desde el 09/10/2026 son el mismo diagnóstico que el de IA para el Despacho:
 * las mismas siete preguntas y los mismos textos, para que todo el embudo
 * empuje hacia una sola cosa (decisión de Manel). Lo único que cambia es lo
 * que se guarda para saber desde dónde lo pidió:
 *   - `curso`:  el curso de la página (N1, S8, A7) o «sin-decidir» en la portada.
 *   - `origen`: automatiza-curso o automatiza-catalogo.
 * Misma tabla, `solicitudes_despacho`, y mismo aviso a n8n.
 */

const PREGUNTAS_DIAGNOSTICO = PREGUNTAS as unknown as Pregunta[]

/** El formulario de la página de un curso: el curso ya se sabe por la página. */
export function solicitudCurso(cod: Codigo): ConfigSolicitud {
  return {
    preguntas: PREGUNTAS_DIAGNOSTICO,
    textos: FILTRO,
    origen: 'automatiza-curso',
    fijos: { curso: cod },
  }
}

/** El formulario de la portada: no viene de ningún curso en concreto. */
export function solicitudCatalogo(): ConfigSolicitud {
  return {
    preguntas: PREGUNTAS_DIAGNOSTICO,
    textos: FILTRO,
    origen: 'automatiza-catalogo',
    fijos: { curso: 'sin-decidir' },
  }
}
