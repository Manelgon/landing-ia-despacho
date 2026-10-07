import type { CursoSuelto } from './tipo'

/**
 * N1 · Propiedad horizontal al día, con IA.
 *
 * Fuente: Evolmind - Scroms/cursos/12 · Propiedad horizontal al día/
 *   - 3-Programa-y-guia/Programa-Propiedad-horizontal-al-dia.html (casi todo)
 *   - FICHA-DEL-CURSO.md («Al terminar, tendrás»)
 * La ley del curso se comprobó contra el BOE el 02/10/2026.
 */
export const N1: CursoSuelto = {
  codigo: 'N1',
  slug: 'propiedad-horizontal-al-dia-con-ia',
  meta: {
    titulo: 'Propiedad horizontal al día, con IA · Curso online · AFCademIA',
    descripcion:
      'Las dudas que se repiten en el despacho, resueltas con la ley de 2026, y un asistente de IA para comprobarlas. 7 unidades, 14 horas, online.',
  },

  hero: {
    eyebrow: 'Propiedad horizontal · Curso online',
    titular: { antes: 'Propiedad horizontal ', destacado: 'al día', despues: ', con IA' },
    subtitulo:
      'Las dudas que se repiten en el despacho, resueltas con la ley de 2026, y un asistente para comprobarlas.',
    entradilla:
      'Para quien empieza en un despacho y para quien lleva años y quiere ponerse al día. Sin conocimientos técnicos.',
    imagen: '/circuitos/antes-01-asistente-ia-fondo.webp',
  },
  cifras: [
    { valor: '7', etiqueta: 'unidades' },
    { valor: '14 h', etiqueta: 'de formación online' },
    { valor: '32 min', etiqueta: 'de vídeo en 14 clases' },
    { valor: '28', etiqueta: 'recursos descargables' },
  ],

  partida: {
    titulo: { antes: 'Las mismas preguntas, ', destacado: 'cada semana' },
    casos: [
      'Si el moroso puede votar en la junta.',
      'Si una obra se vota o es obligatoria, y con qué mayoría se aprueba.',
      'A quién se le reclama la deuda del piso que se acaba de vender.',
      'Qué hay que pedirle a la empresa que viene a arreglar la fachada.',
    ],
    cierre: 'Y entre 2019 y 2026 la ley ha cambiado justo en lo que más se pregunta.',
    regla: 'La ley se comprueba en el BOE. El asistente ayuda a encontrarla, no la sustituye.',
  },

  llevas: {
    sub: 'Las 40 dudas más repetidas del despacho resueltas con la ley de hoy, el recuadro de todo lo que ha cambiado entre 2019 y 2026, y tu propio asistente de propiedad horizontal montado y probado sobre una comunidad de práctica.',
    tarjetas: [
      {
        etiqueta: 'Unidad 1',
        titulo: 'Tu asistente de propiedad horizontal',
        texto: 'Un proyecto de IA cargado con la ley del BOE, que usarás en todas las unidades. Cita, marca [VERIFICAR] y dice cuando no lo sabe.',
        icono: 'conexiones',
        imagen: '/circuitos/antes-01-asistente-ia-fondo.webp',
      },
      {
        etiqueta: 'Unidad 2',
        titulo: 'Una votación, contada entera',
        texto: 'Quién vota, quién no y cómo se cuenta, en propietarios y en cuotas, con la junta de Los Almendros.',
        icono: 'fundamentos',
        imagen: '/circuitos/circuito-02-llamadas-fondo.webp',
      },
      {
        etiqueta: 'Unidad 3',
        titulo: '¿Se vota o no se vota?',
        texto: 'Qué obra es obligatoria, qué apartado del artículo 17 toca y con qué mayoría.',
        icono: 'documentos',
        imagen: '/circuitos/circuito-03-documentos-fondo.webp',
      },
      {
        etiqueta: 'Unidad 4',
        titulo: 'La reclamación, revisada antes de enviarla',
        texto: 'A quién se reclama cada recibo y qué exige el monitorio de la comunidad.',
        icono: 'facturas',
        imagen: '/circuitos/circuito-04-facturas-fondo.webp',
      },
      {
        etiqueta: 'Unidad 5',
        titulo: 'El calendario de mantenimiento',
        texto: 'Qué se revisa en el edificio y cada cuánto, a partir de sus instalaciones.',
        icono: 'vivir-con-esto',
        imagen: '/circuitos/vivir-con-esto-fondo.webp',
      },
      {
        etiqueta: 'Unidad 6',
        titulo: 'El primer análisis de un conflicto',
        texto: 'Qué norma aplica, qué vía hay, qué plazo corre y qué prueba guardar.',
        icono: 'archivo',
        imagen: '/circuitos/circuito-05-archivo-fondo.webp',
      },
      {
        etiqueta: 'Con qué se practica',
        titulo: 'C.P. Los Almendros',
        texto: 'Una comunidad inventada de doce viviendas y dos locales: un ascensor que no llega a cota cero, un piso que quiere ser turístico, un moroso que ha fallecido y un bar que hace ruido. Ningún dato real.',
        icono: 'gestor-documental',
        imagen: '/hero-limpia.jpg',
      },
    ],
  },

  unidades: [
    {
      titulo: 'La comunidad por dentro',
      horas: '2 h',
      llevas:
        'Distinguir título, estatutos y normas de régimen interior, saber para qué sirve la cuota, qué es común y qué es de cada uno, cuánto debe tener el fondo de reserva y quién manda. Y a montar tu propio asistente con la ley del BOE, que usarás en todas las unidades.',
      claves: [
        'El título describe y reparte cuotas; los estatutos fijan reglas de uso, gastos y gobierno; las normas de régimen interior ordenan la convivencia',
        'Título y estatutos se cambian, por regla general, por unanimidad. Las normas de régimen interior, por acuerdo ordinario',
        'La fachada es común entera, ventanas y balcones por fuera incluidos. Su reparación la pagan todos por su cuota',
        'El fondo de reserva es, como mínimo, el 10 % del último presupuesto ordinario, digan lo que digan unos estatutos viejos',
        'El cargo de presidente es obligatorio. La LPH no exige que el administrador esté colegiado',
        'El asistente cita, marca [VERIFICAR] y dice cuando no lo sabe. Tú lo compruebas en el BOE',
      ],
      videos: ['Los papeles de la comunidad', 'Lo común, el fondo y quién manda', 'Monta tu asistente'],
    },
    {
      titulo: 'La junta: quién vota y cómo se cuenta',
      horas: '2 h',
      llevas:
        'Saber quién vota y quién no, qué representaciones se admiten, qué hacer con las abstenciones y con los ausentes, y calcular una votación entera en propietarios y en cuotas. Lo comprobarás con la junta de Los Almendros y con tu asistente.',
      claves: [
        'El que debe al empezar la junta, sin haber impugnado ni consignado, habla pero no vota. Y su cuota sale de la cuenta',
        'Quien pagó la víspera, vota: la lista de la convocatoria es una foto, no la sentencia',
        'Representar sólo pide un escrito firmado. El correo y la representación general se admiten con cautela: si deciden, se confirman',
        'Toda mayoría se cuenta dos veces, en propietarios y en cuotas, y sobre la base buena',
        'La abstención no suma a favor y no es una ausencia. El ausente bien citado que calla treinta días, sí suma; el ausente moroso, no',
        'La ley no regula las juntas por vídeo. Si alguien quiere conectarse, que delegue por escrito',
      ],
      videos: ['Quién vota', 'Cómo se cuenta'],
    },
    {
      titulo: 'Qué se vota y con qué mayoría',
      horas: '2 h',
      llevas:
        'Distinguir las obras que la junta no vota de las que sí, encontrar el apartado del artículo 17 que toca y su mayoría, saber si cuentan los ausentes y si paga quien no la quiso. Y a pedírselo a tu asistente con la marca [VERIFICAR] en cada artículo.',
      claves: [
        'Antes de buscar una mayoría, pregunta si la obra es obligatoria. La de conservación y la de accesibilidad pedida dentro de doce mensualidades no se votan: se vota cómo se pagan',
        'El ascensor a cota cero de Los Almendros cuesta a cada elemento menos de sus doce mensualidades: si el 4.º B lo pide, es obligatorio',
        'Cuanto más baja es la mayoría, menos se puede cobrar a quien no la votó: el tercio del 17.1 sólo obliga a quien vota a favor; la mayoría simple de la eficiencia obliga a todos',
        'La mejora por tres quintos tiene una salida para el que vota en contra: más de tres mensualidades',
        'La vivienda turística necesita el sí previo de tres quintos desde el 03/04/2025. Si cuentan los ausentes y qué es «acogido» no se afirma',
        'El asistente contesta con el árbol y marca [VERIFICAR] en cada artículo. El BOE lo abres tú',
      ],
      videos: ['Lo que no se vota', 'La vivienda turística desde 2025'],
    },
    {
      titulo: 'El que no paga',
      horas: '2 h',
      llevas:
        'Saber a quién se reclama cada recibo cuando el piso cambia de manos o su dueño fallece, cuánto tiempo hay para reclamar, qué exige el monitorio de la comunidad y qué ha cambiado desde 2022. Y a pedirle al asistente que revise una reclamación antes de enviarla, comprobando tú cada artículo en el BOE.',
      claves: [
        'El piso vendido responde de las deudas de comunidad hasta la parte vencida del año de la compra y los tres años naturales anteriores. Con el piso, no con el resto del patrimonio del comprador',
        'Lo anterior a la venta lo debe el vendedor; lo posterior, el comprador. Y el vendedor que no comunicó la venta responde con él',
        'Si el moroso fallece, la deuda sigue: herencia yacente e ignorados herederos, y el titular registral. Si hace falta un administrador de la herencia está discutido',
        'Las cuotas prescriben a los cinco años desde que vencen. Una reclamación que puedas probar pone el reloj a cero',
        'El monitorio pide acuerdo, certificado con desglose, firmas y notificación. Si el deudor se opone, la comunidad puede pedir el embargo preventivo, sin caución',
        'Antes del monitorio, deja constancia de un intento de acuerdo. Y al notario no se va: estas deudas están excluidas',
      ],
      videos: ['El piso responde', 'Del recibo al juzgado'],
    },
    {
      titulo: 'La comunidad como empresa',
      horas: '2 h',
      llevas:
        'Qué pedir y qué entregar a cada contrata, cuándo una obra necesita coordinador de seguridad, qué se revisa en el edificio y cada cuánto, qué no es obligatorio aunque te lo ofrezcan, y qué hacer cuando una empresa no cumple. Y a montar con el asistente el calendario de mantenimiento de un edificio.',
      claves: [
        'Que la comunidad sin empleados sea titular del centro de trabajo está discutido. Lo prudente es actuar como si lo fuera: informar e instruir a cada contrata antes de que empiece',
        'Obra con más de una empresa, o empresa y autónomos, o varios autónomos: la comunidad, como promotor, designa coordinador antes de empezar',
        'Ascensor: mantenimiento mensual y, en Los Almendros, inspección por organismo de control cada cuatro años',
        'Extintores: tres meses, un año y cinco años. La inspección de incendios cada diez años no se exige en residencial vivienda',
        'La baja tensión de Los Almendros es dudosa: no se afirma. Y la legionela no aplica a edificios de uso exclusivo de vivienda',
        'Contrata que incumple: leer el contrato, requerir por escrito, y decidir entre exigir el cumplimiento o resolver',
        'El asistente no tiene los reglamentos técnicos. Propone con [VERIFICAR]; el BOE decide',
      ],
      videos: ['Quién trabaja en tu edificio', 'Lo que se revisa y cada cuánto'],
    },
    {
      titulo: 'Cuando hay conflicto',
      horas: '2 h',
      llevas:
        'Ordenar un conflicto antes de que llegue al juzgado: qué norma aplica, qué vía hay, qué plazo corre, qué prueba guardar y qué paso previo exige la ley desde 2025. Y a saber dónde los tribunales no se ponen de acuerdo.',
      claves: [
        'Contra la actividad molesta, cuatro pasos y en orden: requerir, autorizar en junta, intentar la negociación y demandar la cesación',
        'Que al menos un requerimiento deje prueba. La demanda tiene que acreditarlo',
        'La obra que nadie autorizó hace años está discutida: el valor del silencio y el plazo para reclamar. No se afirma que haya prescrito',
        'Ventanas sobre la finca colindante: dos metros las rectas y sesenta centímetros las oblicuas, salvo vía pública en medio. Está en el Código Civil',
        'Impugnar: tres meses, o un año si el acuerdo infringe la ley o los estatutos. Caducidad. Y hay que estar al corriente o consignar',
        'Antes de casi cualquier demanda, desde 2025, el intento de negociación. Pedirlo suspende la caducidad',
      ],
      videos: ['El local que molesta', 'Impugnar: cuándo y quién'],
    },
    {
      titulo: 'De quién responde la IA',
      horas: '2 h',
      llevas:
        'Seguir la cadena entera —la comunidad, tú y el proveedor de IA—, saber qué cambia cuando el circuito trabaja solo, qué tiene que decir el contrato y qué contestarle a una comunidad que pregunta si usas inteligencia artificial con sus datos.',
      claves: [
        'La cadena tiene tres eslabones: la comunidad responsable, tú encargado y el proveedor subencargado',
        'Contratar a un tercero no traslada la responsabilidad. Solo alarga la cadena, y hace falta permiso escrito para alargarla',
        'En un circuito automático el criterio no se aplica cada vez: se pone una vez en el diseño, y se aplica siempre',
        'Casi todos los proveedores procesan fuera de Europa: es una transferencia internacional y hay que anotarla',
        'Elegir bien al proveedor es tuyo, y ningún contrato lo traslada',
      ],
      videos: ['La cadena, de principio a fin'],
    },
  ],

  perfiles: [
    {
      titulo: 'Quien empieza',
      texto: 'Personal nuevo de despacho y administradores recién llegados a la profesión.',
    },
    {
      titulo: 'Quien lleva años y quiere ponerse al día',
      texto: 'Cada unidad abre con un autodiagnóstico y cierra con lo que ha cambiado desde 2019.',
    },
  ],

  docente: {
    parrafos: [
      'Dirige un despacho dedicado a la gestión integral de fincas, con un enfoque profesional, transparente y personalizado. Este curso nace de ahí: de las tareas que se repiten cada semana en un despacho real y de buscarles una salida que no obligue a renunciar al criterio profesional.',
    ],
  },

  incluye: [
    '7 unidades y 14 horas',
    '14 clases en vídeo, 32 minutos',
    '28 recursos descargables',
    'Tu asistente de propiedad horizontal montado',
  ],

  preguntas: [
    {
      p: '¿Sustituye al letrado de la comunidad?',
      r: 'El curso explica la norma vigente y enseña a comprobarla. No sustituye la consulta al letrado de la comunidad, y cada práctica señala cuándo un asunto lo pide.',
    },
    {
      p: '¿Está al día la ley que se enseña?',
      r: 'Cada artículo, mayoría, plazo y porcentaje se comprobó el 02/10/2026 contra el texto consolidado de la Ley de Propiedad Horizontal en el BOE, actualizado a 21/03/2026, y lleva esa fecha escrita para que se vuelva a comprobar.',
    },
    {
      p: '¿Qué pasa donde los tribunales no coinciden?',
      r: 'Donde los tribunales no coinciden, el curso presenta las dos posturas y no elige por el alumno. Lo que no se ha podido confirmar no se afirma.',
    },
    {
      p: '¿Vale si el despacho está en Cataluña?',
      r: 'El curso sigue la Ley de Propiedad Horizontal estatal. Cataluña y las normas autonómicas se señalan cuando cambian la respuesta, pero no se desarrollan.',
    },
    {
      p: '¿Qué necesito para hacerlo?',
      r: 'Una cuenta de ChatGPT que permita crear proyectos. No se instala nada y no se programa nada. Todo el curso se practica con una comunidad de ejemplo que se entrega con los materiales.',
    },
  ],

  gratis: 'N0',
}
