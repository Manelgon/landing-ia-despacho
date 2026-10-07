/**
 * Catálogo de la portada (automatiza.afcademia.com).
 *
 * Los cursos, precios y textos son los de la campaña de otoño 2026, en
 * 014. Catalogo y campaña WhatsApp/_genera-campana.py. Si cambia un precio o
 * una fecha allí, se cambia también aquí: las dos cosas se enseñan a la vez.
 *
 * Cada curso tiene dos destinos:
 *   - pagina → su página de venta en esta misma web, si la tiene.
 *   - slug   → su ficha en la tienda (afcademia.com/producto/<slug>/).
 *
 * Los cursos gratuitos (N0, S0) son el gancho de las campañas, no producto del
 * catálogo: solo salen en el aviso discreto del final (LIBRES).
 */

export const TIENDA = 'https://afcademia.com/producto/'
export const CAMPANA = 'lanzamiento-otono-2026'

/**
 * Último día del precio de lanzamiento (incluido). Pasado ese día la página
 * deja de enseñarlo sola: un precio rebajado caducado es publicidad engañosa.
 */
export const FIN_LANZAMIENTO = { fecha: '2026-11-08', texto: '8 de noviembre' }

export type Curso = {
  nombre: string
  /** Etiqueta del área, en mono sobre la tarjeta. */
  area: string
  horas: number
  /** Precio de tienda en euros. 0 = gratis. */
  precio: number
  /** Precio de lanzamiento, solo hasta FIN_LANZAMIENTO. */
  lanzamiento?: number
  slug: string
  /** Ruta de su página de venta en esta web, si la tiene. */
  pagina?: string
  /** Pictograma de public/recursos-web/iconos/. */
  icono?: string
  /** Fondo de la tarjeta. Las mismas fotos de ambiente que la página del despacho. */
  imagen?: string
  texto: string
}

export const CURSOS = {
  N0: {
    nombre: 'Lo que ha cambiado en la Ley de Propiedad Horizontal',
    area: 'Propiedad horizontal',
    horas: 1,
    precio: 0,
    slug: 'lo-que-ha-cambiado-en-la-ley-de-propiedad-horizontal',
    pagina: '/gratis/lo-que-ha-cambiado-en-la-ley-de-propiedad-horizontal',
    texto:
      'Los diez cambios de la LPH entre 2019 y 2026 que más se preguntan en un despacho, con su artículo.',
  },
  N1: {
    nombre: 'Propiedad horizontal al día, con IA',
    area: 'Propiedad horizontal',
    horas: 14,
    precio: 420,
    lanzamiento: 295,
    slug: 'propiedad-horizontal-al-dia-con-ia',
    pagina: '/curso/propiedad-horizontal-al-dia-con-ia',
    icono: 'archivo',
    imagen: '/circuitos/antes-01-asistente-ia-fondo.webp',
    texto:
      'Las 40 dudas más repetidas del despacho resueltas con la ley de 2026, y tu propio asistente de IA con el texto consolidado de la LPH para comprobarlas en segundos.',
  },
  S0: {
    nombre: '¿Este correo es un fraude?',
    area: 'Ciberseguridad',
    horas: 1,
    precio: 0,
    slug: 'este-correo-es-un-fraude',
    pagina: '/gratis/este-correo-es-un-fraude',
    texto:
      'Seis señales para reconocer un correo, un mensaje o una llamada que pide dinero o datos.',
  },
  S8: {
    nombre: 'Ciberseguridad en el despacho de administración de fincas',
    area: 'Ciberseguridad',
    horas: 12,
    precio: 360,
    lanzamiento: 250,
    slug: 'ciberseguridad-en-el-despacho-de-administracion-de-fincas',
    pagina: '/curso/ciberseguridad-en-el-despacho-de-administracion-de-fincas',
    icono: 'correo',
    imagen: '/circuitos/circuito-01-correo-fondo.webp',
    texto:
      'Cómo entra cada ataque y qué hacer para que no entre: doble verificación de pagos, norma del puesto, proveedores y el plan de la primera hora si algo se rompe.',
  },
  A7: {
    nombre: 'Documentos del despacho con IA',
    area: 'IA en el despacho',
    horas: 14,
    precio: 420,
    slug: 'documentos-del-despacho-con-ia',
    pagina: '/curso/documentos-del-despacho-con-ia',
    icono: 'documentos',
    imagen: '/circuitos/circuito-03-documentos-fondo.webp',
    texto:
      'Actas, convocatorias, avisos, respuestas, derramas y liquidaciones redactadas con IA sin que invente nada y sin perder el control de lo que se firma. Te llevas tu biblioteca de encargos montada.',
  },
  P1: {
    nombre: 'IA para el Despacho',
    area: 'Itinerario completo',
    horas: 54,
    precio: 1795,
    slug: 'ia-para-el-despacho',
    pagina: '/curso/ia-para-el-despacho',
    icono: 'conexiones',
    imagen: '/recursos-web/fondos/matricula-despacho-azul.webp',
    texto:
      'El itinerario completo: el uso de ChatGPT en el despacho y cuatro casos montados de principio a fin: el correo, las llamadas, los documentos y las facturas.',
  },
  '01B04C01': {
    nombre: 'Inteligencia Artificial en la Pyme',
    area: 'El despacho como empresa',
    horas: 115,
    precio: 977.5,
    slug: 'inteligencia-artificial-en-la-pyme',
    icono: 'fundamentos',
    imagen: '/circuitos/antes-02-cuentas-conectadas-fondo.webp',
    texto: 'Para incorporar la inteligencia artificial a los procesos y a las decisiones de la empresa.',
  },
  '01B03C01': {
    nombre: 'Transformación Digital para Pymes',
    area: 'El despacho como empresa',
    horas: 115,
    precio: 977.5,
    slug: 'transformacion-digital-para-pymes',
    icono: 'gestor-documental',
    imagen: '/circuitos/circuito-05-archivo-fondo.webp',
    texto: 'Una transformación digital integral, realista y orientada al negocio.',
  },
} satisfies Record<string, Curso>

export type Codigo = keyof typeof CURSOS

/** El itinerario completo: la pieza grande del mosaico, en navy. */
export const DESTACADO: Codigo = 'P1'

/**
 * El resto del mosaico, en este orden. Filas de 2 y 3 en escritorio, como
 * el mosaico de flujos de la página del despacho.
 */
export const MOSAICO: Codigo[] = ['A7', 'N1', 'S8', '01B04C01', '01B03C01']

/** Las clases gratuitas: solo en el aviso del final. */
export const LIBRES: Codigo[] = ['N0', 'S0']

export const PORTADA = {
  eyebrow: 'Catálogo de cursos · AFCademIA',
  titular: { antes: 'Formación para el ', destacado: 'despacho de fincas', despues: '' },
  para: 'Cursos online para administradores de fincas y su equipo.',
  resultado:
    'Propiedad horizontal, ciberseguridad, inteligencia artificial y gestión de la empresa. A tu ritmo y pensados para el trabajo de cada día en el despacho.',
  boton: 'Ver los cursos',
}

export const SECCION_CURSOS = {
  eyebrow: 'Los cursos',
  titular: { antes: 'Elige por dónde ', destacado: 'empezar' },
  sub: 'Del curso concreto que resuelve un tema al itinerario que lleva la IA a todo el despacho.',
}

export const SECCION_LIBRES = {
  eyebrow: 'Antes de decidir',
  titulo: 'Dos clases gratuitas de una hora',
  texto: 'Si quieres ver cómo enseñamos antes de matricularte.',
}

export const CIERRE = {
  eyebrow: 'Dudas',
  titulo: '¿No sabes qué curso encaja con tu despacho?',
  texto:
    'Escríbenos o llámanos y te decimos cuál, y si tu despacho puede gestionarlo por FUNDAE.',
  email: 'cursos@afcademia.com',
  telefono: { ver: '661 239 319', tel: '+34661239319' },
}

/**
 * Enlace a la ficha de la tienda, marcado para saber de dónde viene:
 * 'catalogo' desde la portada, 'pagina-curso' desde la página del curso,
 * 'pagina-gratis' desde la de una clase gratuita.
 */
export function enlaceTienda(
  cod: Codigo,
  medio: 'catalogo' | 'pagina-curso' | 'pagina-gratis' = 'catalogo',
): string {
  const params = new URLSearchParams({
    utm_source: 'automatiza',
    utm_medium: medio,
    utm_campaign: CAMPANA,
    utm_content: cod.toLowerCase(),
  })
  return `${TIENDA}${CURSOS[cod].slug}/?${params}`
}

/** 1795 → «1.795 €», 977.5 → «977,50 €». Igual que en _genera-campana.py. */
export function eur(v: number): string {
  const [entero, dec] = v.toFixed(2).split('.')
  const miles = entero.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return (dec === '00' ? miles : `${miles},${dec}`) + ' €'
}

/** true mientras dure el precio de lanzamiento (hora de Madrid). */
export function lanzamientoVigente(ahora = new Date()): boolean {
  const hoy = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Madrid' }).format(ahora)
  return hoy <= FIN_LANZAMIENTO.fecha
}

/** Las cifras del pie del hero. Salen de los propios cursos, no se escriben a mano. */
export function cifras() {
  const cursos = [DESTACADO, ...MOSAICO].map((c) => CURSOS[c])
  const areas = new Set(cursos.map((c) => c.area).filter((a) => a !== 'Itinerario completo'))
  const horas = cursos.map((c) => c.horas)
  return [
    { valor: String(cursos.length), etiqueta: 'cursos en el catálogo' },
    { valor: String(areas.size), etiqueta: 'áreas del despacho' },
    { valor: `${Math.min(...horas)}–${Math.max(...horas)} h`, etiqueta: 'de duración, según el curso' },
    { valor: 'Online', etiqueta: 'y a tu ritmo' },
  ]
}
