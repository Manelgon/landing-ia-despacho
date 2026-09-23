/**
 * Las siete preguntas del filtro previo.
 *
 * No es un formulario de contacto: es lo que decide si un despacho encaja.
 * La pregunta 2 es la más útil para el despacho, porque dice por qué flujo
 * empieza cada alumno.
 */

export const FILTRO = {
  eyebrow: 'Último paso',
  titulo: 'Solicita el diagnóstico de tu despacho',
  entradilla:
    'Siete preguntas, dos minutos. Si encaja, te escribimos en 24 horas para cuadrar una llamada.',
  boton: 'Enviar la solicitud',
  enviando: 'Enviando…',
  exito: {
    titulo: 'Solicitud recibida',
    texto:
      'La leemos y te escribimos a ese correo en 24 horas. Si tu despacho encaja, cuadramos una llamada; si no, te lo decimos con la misma claridad.',
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

/**
 * Lo que pasa desde que alguien manda la solicitud. Los plazos y el modo de
 * dar el acceso los confirmó Manel el 23 de septiembre de 2026: respuesta en
 * 24 horas, llamada con un comercial y, al matricularse, enlace de matrícula
 * y credenciales por correo con acceso inmediato.
 *
 * No se dice cuánto dura la llamada porque nadie lo ha fijado. Cuando se
 * fije, entra en el paso 3.
 */
export const PASOS = {
  eyebrow: 'Qué pasa después',
  titulo: 'Lo que pasa cuando le das a enviar',
  lista: [
    {
      cuando: 'Ahora',
      titulo: 'Mandas las siete preguntas',
      texto: 'Dos minutos. No hay que preparar nada ni adjuntar nada.',
    },
    {
      cuando: 'En 24 h',
      titulo: 'Te escribimos',
      texto: 'Leemos lo que has contestado y te respondemos al correo que hayas dejado.',
    },
    {
      cuando: 'En la llamada',
      titulo: 'Vemos si encaja',
      texto:
        'Hablamos de tu despacho y de por dónde empezarías tú. Si no encaja, te lo decimos igual.',
    },
    {
      cuando: 'Al matricularte',
      titulo: 'Entras el mismo día',
      texto: 'Recibes por correo el enlace de matrícula y tus credenciales. El acceso es inmediato.',
    },
  ],
}

/**
 * El filtro, en la página y no solo en el formulario. Sale del modelo que
 * pasó Roberto, adaptado a lo que este itinerario es de verdad: no hay ocho
 * semanas ni sesiones en directo, y no se tocan plantillas de acta porque
 * los flujos son otros.
 *
 * El corte de 20 comunidades es el mismo que anuncia el hero.
 */
export const ENCAJE = {
  eyebrow: 'El filtro',
  titulo: 'Esto no es para todos los despachos',
  si: {
    titulo: 'Es para ti si…',
    lista: [
      'Gestionas más de 20 comunidades y la carga administrativa ya no cabe en tu semana.',
      'Tienes programa de fincas, pero el correo, las llamadas y el archivo siguen siendo manuales.',
      'Puedes sacar un par de horas a la semana para montarlo sobre tus propias cuentas.',
      'Decides tú, o lo decides con tu socio sin dar tres vueltas.',
    ],
  },
  no: {
    titulo: 'No es para ti si…',
    lista: [
      'Buscas teoría sobre inteligencia artificial: aquí se monta sobre tu correo y tus documentos.',
      'Gestionas menos de diez comunidades y quieres resolverlo con vídeos gratuitos.',
      'Esperas que alguien lo monte por ti sin tocar tu forma de trabajar.',
      'No quieres revisar lo que propone la IA antes de que salga del despacho.',
    ],
  },
}
