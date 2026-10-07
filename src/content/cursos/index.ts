import type { CursoSuelto } from './tipo'
import { N1 } from './n1'
import { S8 } from './s8'
import { A7 } from './a7'

/**
 * Los cursos que tienen página propia en /curso/<slug>.
 * Para añadir uno: su archivo de textos en esta carpeta, una línea aquí y
 * `pagina: '/curso/<slug>'` en su ficha de src/content/catalogo.ts.
 *
 * IA para el Despacho no está aquí: su página es otra, hecha a mano, en
 * src/app/curso/ia-para-el-despacho.
 */
export const CURSOS_SUELTOS: Record<string, CursoSuelto> = {
  [N1.slug]: N1,
  [S8.slug]: S8,
  [A7.slug]: A7,
}

export type { CursoSuelto }
