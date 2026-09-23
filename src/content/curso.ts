/**
 * Todo el texto de la landing, en un solo sitio.
 * Sale de 6-Comercial/pagina-de-venta.html y de FICHA-DEL-CURSO.md.
 * Para corregir una frase se corrige aquí, no en los componentes.
 */

export const CURSO = {
  nombre: 'IA para el Despacho',
  subtitulo: 'De la primera petición a los flujos que trabajan solos',
  eyebrow: 'Itinerario online · a tu ritmo',
  /**
   * El claim va en dos partes: primero a quién va dirigido, que es lo que
   * pidió Roberto para filtrar antes de que nadie rellene nada, y después
   * lo que se lleva. El rango de comunidades lo fijó Manel el 23 de
   * septiembre de 2026 y es el mismo que separa las opciones útiles de la
   * primera pregunta del formulario.
   */
  claim: {
    para: 'Programa de implementación para administradores que gestionan entre 20 y 120 comunidades, sin cambiar de programa de gestión.',
    // Las diez horas las decidió Manel el 23 de septiembre de 2026, sin
    // atribuirlas a ningún despacho: es una promesa de resultado al
    // comprador y hay que poder acreditarla si alguien la reclama. Avisado
    // dos veces; la decisión es suya.
    resultado:
      'Empiezas sin saber nada y terminas con cinco tareas del despacho que ya no toca nadie. Diez horas a la semana recuperadas de trabajo repetido.',
  },
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

/**
 * DOS DE LAS CUATRO ESTÁN PENDIENTES DE UN NÚMERO REAL.
 *
 * El 143 lo dijo Manel de memoria el 23 de septiembre de 2026, dudando él
 * mismo: hay que contarlo en la matrícula de la edición anterior.
 *
 * Las administraciones van en 00 hasta que alguien las cuente. Es un hueco a
 * la vista a propósito: esa cifra la comprueba cualquiera que llame al
 * despacho, y si no cuadra no se cae el número, se cae la página entera.
 *
 * Los cinco flujos sí son un hecho: trabajan cada día en la gestión de
 * Roberto, que es de donde salió el itinerario, y así lo cuenta su
 * biografía.
 */
export const CIFRAS = [
  { valor: '143', etiqueta: 'matriculados en la edición anterior' },
  { valor: '00', etiqueta: 'administraciones de fincas' },
  { valor: '5', etiqueta: 'flujos funcionando en un despacho real' },
  { valor: '54 h', etiqueta: 'bonificables por FUNDAE' },
]

/**
 * El punto de partida, en el tono que pidió Roberto: no la lista de tareas,
 * sino el lunes por la mañana de un despacho.
 *
 * Los tres casos son los que resuelven los flujos del itinerario. No se
 * habla de actas ni de morosidad, que están en el modelo que pasó Roberto
 * pero no en este curso.
 */
export const PARTIDA = {
  titulo: 'Sabes que no es normal vaciar la bandeja un domingo por la noche',
  casos: [
    'Correos casi idénticos que se contestan uno a uno: el mismo asunto, otro propietario, otra vez desde cero.',
    'Llamadas que hay que volver a escuchar para escribir el resumen y repartir lo que salió de ellas.',
    'Facturas que llegan con nombres como 1776150000242.pdf, y hay que abrirlas una a una para saber de qué comunidad son.',
  ],
  cierre: 'Y sabes que si algo se pierde por el camino, la responsabilidad es tuya.',
}

/**
 * Las tres salidas que ya ha probado cualquiera que lleve un despacho, y por
 * qué ninguna cierra el problema. Ninguna menciona marcas: ni el chat que se
 * probó ni el programa de gestión que se cambió.
 */
export const INTENTOS = {
  titulo: 'Y lo que ya has probado no lo arregla',
  lista: [
    {
      titulo: 'Un chat de inteligencia artificial',
      texto: 'Sirve para un párrafo suelto, no para vaciar la bandeja.',
    },
    { titulo: 'Otro programa', texto: 'El programa nuevo hereda el proceso viejo.' },
    { titulo: 'Otra persona', texto: 'Mueve el cuello de botella, no lo quita.' },
  ],
}

export const CIRCUITOS = [
  {
    n: 'Flujo 1',
    titulo: 'El correo',
    texto:
      'Un asistente lee tu bandeja, clasifica cada mensaje en las categorías de tu despacho, lo archiva en su etiqueta y deja escrito el borrador de respuesta.',
    para: 'Se para en Borradores. No envía',
    imagen: '/circuitos/circuito-01-correo-fondo.webp',
  },
  {
    n: 'Flujo 2',
    titulo: 'Las llamadas',
    texto:
      'Dejas el audio de una llamada en una carpeta y salen el resumen escrito y las tareas repartidas por departamento.',
    para: 'Te avisa por correo al terminar',
    imagen: '/circuitos/circuito-02-llamadas-fondo.webp',
  },
  {
    n: 'Flujo 3',
    titulo: 'Los documentos',
    texto:
      'De una fila de una hoja salen el certificado y la factura, en PDF, enviados por correo y archivados en su carpeta.',
    para: 'Sin temporales que limpiar',
    imagen: '/circuitos/circuito-03-documentos-fondo.webp',
  },
  {
    n: 'Flujo 4',
    titulo: 'Las facturas que llegan',
    texto:
      'Las facturas de proveedor que entran por correo se descargan solas y se guardan con un nombre que dice de quién son.',
    para: 'Cada factura, con su nombre',
    imagen: '/circuitos/circuito-04-facturas-fondo.webp',
  },
  {
    n: 'Flujo 5',
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
      'Cinco unidades cortas que preparan el terreno: la cuenta de pruebas, la de la plataforma de automatización y los permisos del correo y de la inteligencia artificial. Se hacen una sola vez y sirven para todos los flujos que vienen después.',
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
      'El primer flujo completo: un asistente que lee la bandeja, clasifica, archiva y deja el borrador escrito.',
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
    texto: 'Lo que decide si dentro de seis meses los flujos siguen encendidos.',
    unidades: [
      'Leer un flujo y sus errores',
      'De quién responde la IA',
      'Que no se caiga: pruebas, averías y rutina',
    ],
  },
  {
    rango: '25 - 30',
    titulo: 'El gestor documental',
    horas: '12 h',
    texto:
      'El quinto flujo, y el único que no vive en el navegador. Es el bloque con más montaje del itinerario: dos horas y diecisiete minutos de clase grabada, acción por acción.',
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
    texto: 'Explicación, clase grabada y ejercicios. No se pasa de pantalla sin abrir lo que hay en ella.',
  },
  {
    titulo: 'El ritmo',
    dato: 'Sin plazos',
    texto:
      'El progreso se guarda y se retoma donde lo dejaste. A una unidad por semana son unos siete meses.',
  },
  {
    titulo: 'La nota',
    dato: '70 sobre 100 por unidad',
    texto: 'Test al terminar cada una. Acertar a la segunda puntúa menos que acertar a la primera.',
  },
  {
    titulo: 'El cierre',
    dato: 'Un reto, no un examen',
    texto:
      'Entregar los cinco flujos funcionando en tus cuentas, con una ejecución real de cada uno.',
  },
]

/**
 * Lo que hace falta tener, en una línea. Sigue diciendo las dos cosas que
 * pueden acabar en devolución si se callan: que una unidad necesita
 * Microsoft 365 de pago y que el último flujo pide Windows.
 */
export const REQUISITOS = {
  texto:
    'Sin conocimientos previos. Basta un navegador y el correo del despacho: las demás cuentas se crean dentro. Una unidad necesita Microsoft 365 de pago, y el último flujo se monta en Windows con Excel.',
}

export const FAQ = [
  {
    p: '¿Esto sustituye a alguien del despacho?',
    r: 'No. Quita de en medio la parte mecánica de cinco tareas. Lo que decide, lo que firma y lo que se manda sigue pasando por una persona: los flujos están diseñados para pararse justo ahí.',
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
    p: '¿Qué pasa si un flujo se rompe dentro de seis meses?',
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
  titulo: 'Una regla para los cinco flujos',
  frase: 'La IA prepara; el despacho responde.',
  texto: 'Antes de activar cada flujo, defines qué puede hacer, qué datos trata y quién revisa sus resultados. El itinerario dedica una unidad a esa cadena de responsabilidad.',
}

/**
 * TESTIMONIOS: ESTO NO SE PUEDE PUBLICAR ASÍ.
 *
 * Los corchetes son marcadores para ver el diseño, no contenido. Un
 * testimonio inventado no es una licencia de redacción: desde la Directiva
 * Ómnibus, publicar opiniones que no son de clientes reales es una práctica
 * desleal engañosa (Ley 3/1991 y TRLGDCU), y ahí ya no hay matices.
 *
 * Para llenarlo hacen falta tres cosas de cada alumno: su testimonio por
 * escrito, las cifras que dé él, y permiso firmado para usar su nombre, su
 * foto y el de su despacho. Con dos que contesten, se dejan dos tarjetas.
 */
export const TESTIMONIOS = {
  eyebrow: 'Testimonios',
  titulo: 'Lo que dicen quienes ya lo usan',
  // PENDIENTE: el enlace a las reseñas. Si AFCademIA no tiene ficha de
  // Google con opiniones, esta línea se borra entera: prometer que son
  // verificables y que no haya dónde verificarlas es peor que no decirlo.
  verificables: {
    texto: 'Opiniones reales, verificables en Google',
    url: '',
  },
  lista: [
    {
      nombre: '[Nombre y apellido]',
      despacho: '[00] comunidades · [Ciudad]',
      cita: '[Su testimonio, en sus palabras: qué hacía antes, qué hace ahora y cuánto tardó en notarlo.]',
      metricas: [
        { valor: '[0 h → 00 min]', etiqueta: '[por tarea]' },
        { valor: '[0 semanas]', etiqueta: '[hasta notarlo]' },
      ],
    },
    {
      nombre: '[Nombre y apellido]',
      despacho: '[00] comunidades · [Ciudad]',
      cita: '[Su testimonio. Va bien que empiece por la duda que tenía antes de entrar.]',
      metricas: [
        { valor: '[0 h/semana]', etiqueta: '[recuperadas]' },
        { valor: '[0 semana]', etiqueta: '[hasta el primer flujo]' },
      ],
    },
    {
      nombre: '[Nombre y apellido]',
      despacho: '[00] comunidades · [Ciudad]',
      cita: '[Su testimonio. Si lo montó sin ayuda técnica, que lo diga: es lo que más tranquiliza.]',
      metricas: [
        { valor: '[00 min]', etiqueta: '[por tarea]' },
        { valor: '[0 semanas]', etiqueta: '[hasta notarlo]' },
      ],
    },
  ],
}
