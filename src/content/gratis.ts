import type { Codigo } from './catalogo'

/**
 * Las clases gratuitas, cada una con su página en /gratis/<slug>.
 *
 * Son el gancho de la campaña: vídeo de campaña arriba, botón «Empezar gratis»
 * que lleva a su ficha de 0 € en la tienda (el flujo de compra de n8n la
 * matricula en Evolcampus) y, al final, el paso al curso de pago.
 *
 * Textos: el programa de cada una, en Evolmind - Scroms/cursos/12-0 y 13-0.
 * Vídeo: el de la campaña de WhatsApp (014. Catalogo y campaña WhatsApp/videos),
 * comprimido para la web y servido desde aquí: sin Vimeo ni YouTube, que ponen
 * cookies (revisión legal del 25/09/2026).
 */
export type ClaseGratis = {
  codigo: Codigo
  slug: string
  meta: { titulo: string; descripcion: string }
  titular: { antes: string; destacado: string; despues: string }
  subtitulo: string
  video: { src: string; portada: string; titulo: string }
  /** Título de «Qué aprendes»: corto. */
  aprendes: string
  /** Un solo párrafo de contexto. */
  intro: string
  claves: string[]
  perfiles: string[]
  /** Preguntas del final, como en el despacho. */
  preguntas: { p: string; r: string }[]
  /** Hoja que se entrega, dicha como en el programa. */
  hoja: string
  /** El curso de pago al que lleva. */
  siguiente: Codigo
}

export const GRATIS: Record<string, ClaseGratis> = {
  'lo-que-ha-cambiado-en-la-ley-de-propiedad-horizontal': {
    codigo: 'N0',
    slug: 'lo-que-ha-cambiado-en-la-ley-de-propiedad-horizontal',
    meta: {
      titulo: 'Lo que ha cambiado en la Ley de Propiedad Horizontal · Clase gratuita · AFCademIA',
      descripcion:
        'Los diez cambios de 2019 a 2026 que más se preguntan en un despacho de administración de fincas. Una hora, online y gratis.',
    },
    titular: { antes: 'Lo que ha cambiado en la ', destacado: 'Ley de Propiedad Horizontal', despues: '' },
    subtitulo: 'Los diez cambios de 2019 a 2026 que más se preguntan en un despacho de administración de fincas.',
    video: {
      src: '/videos/gratis/lph.mp4',
      portada: '/videos/gratis/lph-portada.webp',
      titulo: 'Lo que ha cambiado en la Ley de Propiedad Horizontal, en 90 segundos',
    },
    aprendes: 'Los cambios que más se preguntan',
    intro:
      'En los últimos seis años, entre 2019 y 2026, la Ley de Propiedad Horizontal ha cambiado justo en lo que más se pregunta en un despacho de administración de fincas.',
    claves: [
      'El fondo de reserva es, como mínimo, el 10 % del último presupuesto ordinario',
      'La vivienda turística necesita desde 2025 el sí previo de la junta por tres quintos',
      'La eficiencia energética se aprueba por mayoría simple, y paga también quien vota en contra',
      'Antes de casi cualquier demanda hay que intentar un acuerdo',
      'Las juntas por videoconferencia siguen sin estar reguladas en la ley',
      'Lo que vale es el texto consolidado del BOE, con su fecha',
    ],
    perfiles: [
      'Administradores y administradoras de fincas que quieren ponerse al día.',
      'Personal de despacho, presidentes y propietarios interesados en su comunidad.',
    ],
    preguntas: [
      { p: '¿Sustituye al letrado de la comunidad?', r: 'Resume los cambios y dice dónde comprobarlos. No sustituye la consulta al letrado de la comunidad.' },
      { p: '¿Está al día la ley que explica?', r: 'Cada cambio se comprobó el 02/10/2026 contra el texto consolidado de la Ley de Propiedad Horizontal en el BOE, actualizado a 21/03/2026.' },
      { p: '¿Qué necesito?', r: 'Nada especial. No hace falta ningún conocimiento previo y no se instala nada.' },
      { p: '¿Cuánto cuesta?', r: 'Nada. Te apuntas en la tienda de AFCademIA sin pagar y empiezas cuando quieras.' },
    ],
    hoja: 'Te llevas una hoja con los diez cambios para tener a mano en el despacho.',
    siguiente: 'N1',
  },

  'este-correo-es-un-fraude': {
    codigo: 'S0',
    slug: 'este-correo-es-un-fraude',
    meta: {
      titulo: '¿Este correo es un fraude? · Clase gratuita · AFCademIA',
      descripcion:
        'Seis señales para reconocerlo y una regla para no caer, aunque el correo sea perfecto. Una hora, online y gratis.',
    },
    titular: { antes: '¿Este correo ', destacado: 'es un fraude', despues: '?' },
    subtitulo: 'Seis señales para reconocerlo y una regla para no caer, aunque el correo sea perfecto.',
    video: {
      src: '/videos/gratis/fraude.mp4',
      portada: '/videos/gratis/fraude-portada.webp',
      titulo: 'Las señales de un correo que pide dinero o datos, en 90 segundos',
    },
    aprendes: 'Seis señales y una regla',
    intro:
      'A un despacho de administración de fincas le llegan cada día facturas, avisos del banco y mensajes de propietarios y presidentes. Entre ellos, de vez en cuando, uno falso hecho para que pagues o para que des tus claves.',
    claves: [
      'Quién lo manda, la prisa, lo que pide, lo que cambia, el enlace o el adjunto, y que te aparte del camino de siempre: seis señales',
      'Basta una señal para parar y confirmar',
      'Si pide dinero o datos, se confirma por un canal que ya tenías',
      'Nunca se confirma por el teléfono o el enlace que trae el mensaje',
      'Una voz conocida ya no prueba nada: se cuelga y se devuelve la llamada',
      'Si sale «No coincidente» al transferir, se para',
    ],
    perfiles: [
      'Cualquier persona de un despacho de administración de fincas: titulares, oficiales y administrativos.',
    ],
    preguntas: [
      { p: '¿Sustituye al informático del despacho o al banco?', r: 'Enseña a reconocer un engaño y a confirmarlo. No sustituye al proveedor informático del despacho ni al banco.' },
      { p: '¿Con qué se practica?', r: 'El correo que recibió el despacho Administraciones Pinar del Sur: el proveedor del jardín que, de repente, ha cambiado de banco. Todos los datos son inventados.' },
      { p: '¿Qué necesito?', r: 'Nada especial. No hace falta ningún conocimiento técnico y no se instala nada.' },
      { p: '¿Cuánto cuesta?', r: 'Nada. Te apuntas en la tienda de AFCademIA sin pagar y empiezas cuando quieras.' },
    ],
    hoja: 'Te llevas una hoja con las seis señales para tener junto a la pantalla.',
    siguiente: 'S8',
  },
}

/** La clase gratuita de un código (N0, S0), si tiene página. */
export const gratisDe = (cod: Codigo) => Object.values(GRATIS).find((g) => g.codigo === cod)
