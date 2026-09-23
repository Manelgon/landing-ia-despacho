/**
 * Las siete preguntas del filtro previo.
 *
 * No es un formulario de contacto: es lo que decide si un despacho encaja.
 * La pregunta 2 es la más útil para el despacho, porque dice por qué circuito
 * empieza cada alumno.
 */

export const FILTRO = {
  eyebrow: 'Último paso',
  titulo: 'Solicita tu diagnóstico de despacho',
  entradilla:
    'Siete preguntas, dos minutos. Si encaja, te escribimos con los siguientes pasos. Si no encaja, te lo decimos igual y no te hacemos perder el tiempo.',
  boton: 'Enviar la solicitud',
  enviando: 'Enviando…',
  exito: {
    titulo: 'Solicitud recibida',
    texto:
      'La leemos y te escribimos a ese correo. Si tu despacho encaja, te llegan los siguientes pasos; si no, te lo decimos con la misma claridad.',
  },
}

export const PREGUNTAS = [
  {
    id: 'comunidades',
    numero: '01',
    texto: '¿Cuántas comunidades gestionas?',
    opciones: ['Menos de 10', 'Entre 10 y 20', 'Entre 20 y 60', 'Entre 60 y 120', 'Más de 120'],
  },
  {
    id: 'mayor_reto',
    numero: '02',
    texto: '¿Cuál de estas tareas te come más tiempo?',
    ayuda: 'Es por dónde empezarías.',
    opciones: [
      'El correo',
      'Las llamadas',
      'Certificados y facturas',
      'Las facturas de proveedor',
      'El archivo de documentos',
    ],
  },
  {
    id: 'horas_tareas',
    numero: '03',
    texto: '¿Cuánto tiempo al día le dedicas a eso?',
    opciones: ['Menos de 1 hora', 'Entre 1 y 2 horas', 'Entre 2 y 4 horas', 'Más de 4 horas', 'No lo he medido'],
  },
  {
    id: 'software',
    numero: '04',
    texto: '¿Qué software usáis en el despacho?',
    opciones: ['Gesfincas', 'Netfincas', 'TAAF', 'Otro de fincas', 'Contable genérico', 'Hojas de cálculo'],
  },
  {
    id: 'intentos',
    numero: '05',
    texto: '¿Has intentado automatizarlo? ¿Qué pasó?',
    ayuda: 'Cuéntalo como quieras, en dos líneas.',
    libre: true,
    marcador: 'Ej.: probé ChatGPT para redactar respuestas, pero había que revisarlo todo y lo dejé.',
  },
  {
    id: 'plazo',
    numero: '06',
    texto: '¿Para cuándo lo quieres resuelto?',
    opciones: ['Cuanto antes', 'En los próximos tres meses', 'Este año, sin prisa', 'Solo estoy mirando'],
  },
  {
    id: 'decide',
    numero: '07',
    texto: '¿Decides tú la formación del despacho?',
    opciones: ['Decido yo', 'Lo decido con mi socio o socia', 'Lo decide otra persona'],
  },
] as const
