/**
 * Todo el texto de la landing, en un solo sitio.
 * Sale de 6-Comercial/pagina-de-venta.html y de FICHA-DEL-CURSO.md.
 * Para corregir una frase se corrige aquí, no en los componentes.
 */

export const CURSO = {
  nombre: 'IA para el Despacho',
  subtitulo: 'De la primera petición a los circuitos que trabajan solos',
  eyebrow: 'Itinerario online · a tu ritmo',
  claim:
    'De la primera petición a los circuitos que trabajan solos. Empiezas sin saber nada y terminas con cinco tareas del despacho que ya no toca nadie.',
  bajoBoton: 'Sin plazos · tutoría por correo con el docente · certificado al superarlo',
  respaldo: 'AFCademIA · startup certificada por ENISA',
}

/**
 * Los dos avales que van al pie de la tarjeta del precio, bajo los logos.
 * La bonificación por FUNDAE la confirmó Manel el 22 de septiembre de 2026.
 * Cada uno va partido en dos: la frase en naranja y la marca en blanco.
 */
export const SELLOS = [
  // Las webs son las oficiales, comprobadas el 23 de septiembre de 2026.
  {
    etiqueta: 'Startup certificada por',
    marca: 'ENISA',
    url: 'https://www.enisa.es',
    logo: '/sello-enisa.png',
    alt: 'AFCademIA, startup certificada por ENISA. Empresa emergente, Ley 28/2022',
    ancho: 320,
    alto: 320,
  },
  {
    etiqueta: 'Bonificable por',
    marca: 'FUNDAE',
    url: 'https://www.fundae.es',
    logo: '/logo-fundae.png',
    alt: 'Fundación Estatal para la Formación en el Empleo',
    ancho: 414,
    alto: 64,
  },
]

export const CIFRAS = [
  { valor: '5', etiqueta: 'tareas que dejan de pasar por ti' },
  { valor: '30', etiqueta: 'unidades, a tu ritmo' },
  { valor: '54 h', etiqueta: 'bonificables por FUNDAE' },
  { valor: '6 h 35', etiqueta: 'de montaje en vídeo' },
]

export const DOLORES = [
  {
    titulo: 'El correo',
    texto: 'Clasificar mensajes, buscar el contexto y redactar respuestas parecidas una y otra vez.',
  },
  {
    titulo: 'Las llamadas',
    texto: 'Escuchar el audio, resumir lo hablado y repartir las tareas que salen de cada conversación.',
  },
  {
    titulo: 'Los documentos',
    texto: 'Preparar certificados y facturas, exportarlos a PDF, enviarlos y guardarlos en su carpeta.',
  },
  {
    titulo: 'Las facturas de proveedor',
    texto: 'Descargar las que llegan por correo, ponerles un nombre útil y archivarlas donde toca.',
  },
  {
    titulo: 'El archivo',
    texto: 'Abrir archivos como 1776150000242.pdf para averiguar a qué comunidad y proveedor pertenecen.',
  },
]

export const CIRCUITOS = [
  {
    n: 'Circuito 1',
    titulo: 'El correo',
    texto:
      'Un asistente lee tu bandeja, clasifica cada mensaje en las categorías de tu despacho, lo archiva en su etiqueta y deja escrito el borrador de respuesta.',
    para: 'Se para en Borradores. No envía',
    imagen: '/circuitos/circuito-01-correo-fondo.webp',
  },
  {
    n: 'Circuito 2',
    titulo: 'Las llamadas',
    texto:
      'Dejas el audio de una llamada en una carpeta y salen el resumen escrito y las tareas repartidas por departamento.',
    para: 'Te avisa por correo al terminar',
    imagen: '/circuitos/circuito-02-llamadas-fondo.webp',
  },
  {
    n: 'Circuito 3',
    titulo: 'Los documentos',
    texto:
      'De una fila de una hoja salen el certificado y la factura, en PDF, enviados por correo y archivados en su carpeta.',
    para: 'Sin temporales que limpiar',
    imagen: '/circuitos/circuito-03-documentos-fondo.webp',
  },
  {
    n: 'Circuito 4',
    titulo: 'Las facturas que llegan',
    texto:
      'Las facturas de proveedor que entran por correo se descargan solas y se guardan con un nombre que dice de quién son.',
    para: 'Cada factura, con su nombre',
    imagen: '/circuitos/circuito-04-facturas-fondo.webp',
  },
  {
    n: 'Circuito 5',
    titulo: 'El archivo documental',
    texto:
      'Un flujo abre cada factura en PDF, lee el CIF impreso dentro, reconoce la comunidad y la archiva por comunidad y por proveedor.',
    para: 'Nada se borra. Todo se mueve',
    imagen: '/circuitos/circuito-05-archivo-fondo.webp',
  },
]

export const BLOQUES = [
  {
    rango: '1 - 5',
    titulo: 'Fundamentos',
    horas: '10 h',
    texto:
      'Qué se le puede pedir a la inteligencia artificial en un despacho y qué no. Sales con una biblioteca de prompts, un proyecto montado y un asistente propio, y sin haber automatizado nada todavía.',
    unidades: [
      'IA práctica para la administración de fincas',
      'El asistente de IA en el despacho',
      'Pedir bien: el prompt',
      'Un espacio de trabajo por tarea',
      'Tu propio asistente a medida',
    ],
  },
  {
    rango: '6 - 10',
    titulo: 'Las cuentas y las conexiones',
    horas: '5 h',
    texto:
      'Cinco unidades cortas que preparan el terreno: la cuenta de pruebas, la de la plataforma de automatización y los permisos del correo y de la inteligencia artificial. Se hacen una sola vez y sirven para todos los circuitos que vienen después.',
    unidades: [
      'Crear la cuenta de correo',
      'Crear la cuenta de la plataforma de automatización',
      'Conectar el correo del despacho',
      'Conectar el calendario y los documentos',
      'Dejar la inteligencia artificial conectada',
    ],
  },
  {
    rango: '11 - 14',
    titulo: 'El correo',
    horas: '8 h',
    texto:
      'El primer circuito completo: un asistente que lee la bandeja, clasifica, archiva y deja el borrador escrito.',
    unidades: [
      'Así funciona el asistente de correo',
      'Que la IA clasifique cada correo',
      'Que cada correo vaya a su etiqueta',
      'Que la IA deje el borrador escrito',
    ],
  },
  {
    rango: '15 - 17',
    titulo: 'Las llamadas',
    horas: '6 h',
    texto: 'Del audio al resumen, y del resumen a las tareas repartidas por departamento.',
    unidades: ['El gestor de llamadas por dentro', 'De la llamada al resumen', 'Del resumen a las tareas'],
  },
  {
    rango: '18 - 21',
    titulo: 'Los documentos y las facturas',
    horas: '8 h',
    texto:
      'Lo que sale del despacho y lo que entra. La última unidad monta la misma tarea con la otra herramienta del mercado, para poder comparar con criterio.',
    unidades: [
      'El generador de documentos por dentro',
      'Las plantillas, los PDF y el correo',
      'Facturas que llegan solas a su carpeta',
      'La misma tarea, con la otra herramienta',
    ],
  },
  {
    rango: '22 - 24',
    titulo: 'Vivir con esto',
    horas: '5 h',
    texto: 'Lo que decide si dentro de seis meses los circuitos siguen encendidos.',
    unidades: [
      'Leer un circuito y sus errores',
      'De quién responde la IA',
      'Que no se caiga: pruebas, averías y rutina',
    ],
  },
  {
    rango: '25 - 30',
    titulo: 'El gestor documental',
    horas: '12 h',
    texto:
      'El quinto circuito, y el único que no vive en el navegador. Es el bloque con más montaje del itinerario: dos horas y diecisiete minutos de clase grabada, acción por acción.',
    unidades: [
      'Qué vas a montar',
      'Los datos y la interfaz',
      'Leer lo que ya tienes',
      'El bucle grande',
      'El segundo nivel y la primera prueba',
      'Vivir con él',
    ],
  },
]


/**
 * Ficha del docente, con el mismo formato que las landings de Santander y
 * Zaragoza: nombre, rol, bio y tres claves. Texto facilitado por Manel el
 * 22 de septiembre de 2026.
 */
export const DOCENTE = {
  nombre: 'Roberto Díaz',
  rol: 'Administrador de fincas en ejercicio y formador en AFCademIA',
  foto: '/roberto-docente.jpg',
  bio: 'Automatizó su propio despacho y hoy enseña a otros profesionales a hacer lo mismo. Los flujos que construyó trabajan cada día en su gestión con Make, Power Automate y Microsoft 365, y son la base de lo que enseña: automatizaciones reales, con un antes y un después medible en horas y en errores.',
  claves: [
    {
      titulo: 'Práctica, no teoría',
      texto: 'Enseña los flujos que él mismo usa cada día en su despacho, no diapositivas.',
    },
    {
      titulo: 'Del sector, para el sector',
      texto: 'Habla tu idioma: remesas, incidencias, juntas, comunicaciones a propietarios.',
    },
    {
      titulo: 'Tiempo recuperado',
      texto: 'Crecer gestionando más fincas sin multiplicar el equipo ni el estrés.',
    },
  ],
}

export const ESTUDIO = [
  {
    titulo: 'La unidad',
    dato: '35 pantallas, no un vídeo largo',
    texto:
      'Explicación, clase grabada y ejercicios que hay que resolver para avanzar. No se pasa de pantalla sin abrir lo que hay en ella, y los vídeos se ven enteros: no se puede recorrer pulsando Siguiente.',
  },
  {
    titulo: 'El ritmo',
    dato: 'Sin plazos',
    texto:
      'Cada unidad se abre y se cierra sola, el progreso se guarda y se retoma donde lo dejaste. A una unidad por semana, el itinerario ocupa unos siete meses y te deja probar en el despacho entre unidad y unidad.',
  },
  {
    titulo: 'La nota',
    dato: '70 sobre 100 por unidad',
    texto:
      'Prueba de nivel sin nota al empezar y test al terminar. Acertar a la segunda puntúa menos, para que la nota refleje lo que sabías y no lo que fuiste probando.',
  },
  {
    titulo: 'El cierre',
    dato: 'Un reto, no un examen',
    texto:
      'Test de 20 preguntas y un reto final: entregar los circuitos funcionando en tus cuentas, con una ejecución real de cada uno y los puntos donde una persona revisa.',
  },
]

export const REQUISITOS = {
  intro: 'No hace falta ningún conocimiento técnico, y no se programa nada.',
  filas: [
    {
      bloque: 'Bloques 1 a 6',
      detalle: 'unidades 1-24',
      texto:
        'Un navegador y una cuenta de correo del despacho. Las demás no hay que traerlas hechas: el curso enseña a crear paso a paso la de pruebas, la de la plataforma de automatización y la de la inteligencia artificial, y sus planes gratuitos bastan.',
    },
    {
      bloque: 'Unidad 21',
      detalle: 'la otra herramienta',
      texto:
        'Microsoft 365 de pago. Sin él la unidad se sigue viendo: lo que te llevas es el criterio para elegir entre una herramienta y otra, no el montaje.',
    },
    {
      bloque: 'Bloque 7',
      detalle: 'unidades 25-30',
      texto:
        'Windows con Excel instalado, y un programa de Microsoft que se instala en el ordenador. No sirve un Mac para este bloque.',
    },
  ],
}

export const FAQ = [
  {
    p: '¿Esto sustituye a alguien del despacho?',
    r: 'No. Quita de en medio la parte mecánica de cinco tareas. Lo que decide, lo que firma y lo que se manda sigue pasando por una persona: los circuitos están diseñados para pararse justo ahí.',
  },
  {
    p: '¿Y los datos de los propietarios?',
    r: 'Es una parte del temario, no una nota al pie. Hay un semáforo escrito, qué se puede pegar, qué solo anonimizado y qué nunca, y una unidad entera sobre la cadena de responsabilidad: quién responde de qué, qué tiene que decir el contrato con el proveedor y qué contestar en una junta.',
  },
  {
    p: '¿Hace falta pagar herramientas?',
    r: 'Para los bloques 1 a 6, no: los planes gratuitos bastan para recorrerlos enteros. Las dos excepciones están en el cuadro de arriba.',
  },
  {
    p: '¿Qué pasa si un circuito se rompe dentro de seis meses?',
    r: 'Para eso está el bloque 6. Aprendes a leer un escenario, a distinguir un error pasajero de uno permanente y a mantener lo montado con cinco minutos a la semana.',
  },
  {
    p: '¿Puedo hacerlo a ratos?',
    r: 'Sí. No hay plazos ni sesiones en directo. El progreso se guarda por unidad y se retoma donde lo dejaste.',
  },
  {
    p: '¿Y si somos varios del mismo despacho?',
    r: 'Escríbenos y lo vemos. Cada persona necesita su propia matrícula porque el progreso y la nota son individuales.',
  },
  {
    p: '¿Me tramitáis vosotros la bonificación de FUNDAE?',
    r: 'Sí, del papeleo nos encargamos nosotros. Escríbenos antes de matricularte: la formación bonificada hay que comunicarla antes de empezarla, no después, y necesitamos los datos de la empresa para presentarla.',
  },
]

export const REGLA = {
  titulo: 'Una regla para los cinco circuitos',
  frase: 'La IA prepara; el despacho responde.',
  texto: 'Antes de activar cada circuito, defines qué puede hacer, qué datos trata y quién revisa sus resultados. El itinerario dedica una unidad a esa cadena de responsabilidad.',
}
