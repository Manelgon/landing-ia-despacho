import type { CursoSuelto } from './tipo'

/**
 * S8 · Ciberseguridad en el despacho de administración de fincas.
 * (En la carpeta del curso su código interno es S1; en la tienda y en la
 * campaña, S8.)
 *
 * Fuente: Evolmind - Scroms/cursos/13 · Ciberseguridad en el despacho de administración de fincas/
 *   - 3-Programa-y-guia/Programa-Ciberseguridad-en-el-despacho.html (casi todo)
 *   - FICHA-DEL-CURSO.md («Al terminar, tendrás»)
 *
 * Del programa se ha dejado fuera, a propósito:
 *   - la nota de la unidad común con otro curso (decidido por Manel el 07/10/2026);
 *   - «Los materiales de INCIBE se enlazan»: no se nombran fuentes en los materiales.
 */
export const S8: CursoSuelto = {
  codigo: 'S8',
  slug: 'ciberseguridad-en-el-despacho-de-administracion-de-fincas',
  meta: {
    titulo: 'Ciberseguridad en el despacho de administración de fincas · Curso online · AFCademIA',
    descripcion:
      'El correo del proveedor que cambia de cuenta, la contraseña que comparte todo el equipo y el día que los ordenadores amanecen bloqueados. Cómo entra cada ataque y qué hacer para que no entre. 6 unidades, 12 horas, online.',
  },

  hero: {
    eyebrow: 'Ciberseguridad · Curso online',
    titular: { antes: 'Ciberseguridad ', destacado: 'en el despacho', despues: ' de administración de fincas' },
    subtitulo:
      'El correo del proveedor que cambia de cuenta, la contraseña que comparte todo el equipo y el día que los ordenadores amanecen bloqueados.',
    imagen: '/circuitos/circuito-01-correo-fondo.webp',
  },
  cifras: [
    { valor: '6', etiqueta: 'unidades' },
    { valor: '12 h', etiqueta: 'de formación online' },
    { valor: '24 min', etiqueta: 'de vídeo en 12 clases' },
    { valor: '24', etiqueta: 'recursos descargables' },
  ],

  partida: {
    titulo: { antes: 'Para un estafador, ', destacado: 'un objetivo muy rentable' },
    casos: [
      'El aviso falso del banco, con miedo, prisa y un botón.',
      'El correo del proveedor que cambia de cuenta justo antes de pagar.',
      'La contraseña que comparte todo el equipo.',
      'La empleada que se marcha con un pendrive.',
      'El día que los ordenadores amanecen bloqueados y piden un rescate.',
    ],
    cierre: 'Los ataques que más daño hacen no necesitan ningún conocimiento técnico.',
    regla: 'Si pide dinero o datos, se confirma por otro canal.',
  },

  llevas: {
    sub: 'El mapa de exposición de tu despacho, el protocolo de doble verificación para pagos y cambios de cuenta bancaria, la norma del puesto de trabajo en una página para que la firme el equipo, la lista de proveedores con lo que hay que exigirle a cada uno y el plan de la primera hora de un incidente, colgado junto al teléfono.',
    tarjetas: [
      {
        etiqueta: 'Unidad 1',
        titulo: 'El mapa de exposición de tu despacho',
        texto: 'El autodiagnóstico: por dónde te pueden atacar y por cuál empezar.',
        icono: 'fundamentos',
        imagen: '/circuitos/antes-02-cuentas-conectadas-fondo.webp',
      },
      {
        etiqueta: 'Unidad 2',
        titulo: 'El protocolo de doble verificación',
        texto: 'Para pagos y cambios de cuenta: quién comprueba, quién autoriza y quién paga.',
        icono: 'correo',
        imagen: '/circuitos/circuito-01-correo-fondo.webp',
      },
      {
        etiqueta: 'Unidad 3',
        titulo: 'La norma del puesto de trabajo',
        texto: 'En una página, para que la firme el equipo: claves, verificación en dos pasos, móvil, pendrive y wifi.',
        icono: 'documentos',
        imagen: '/circuitos/circuito-03-documentos-fondo.webp',
      },
      {
        etiqueta: 'Unidad 4',
        titulo: 'El mapa de dónde vive cada dato',
        texto: 'Quién entra en cada sitio, las copias que salvan y los certificados de las comunidades.',
        icono: 'archivo',
        imagen: '/circuitos/circuito-05-archivo-fondo.webp',
      },
      {
        etiqueta: 'Unidad 5',
        titulo: 'La lista de proveedores',
        texto: 'Lo que hay que exigirle por escrito a cada uno, sobre todo al que entra en remoto.',
        icono: 'conexiones',
        imagen: '/circuitos/circuito-04-facturas-fondo.webp',
      },
      {
        etiqueta: 'Unidad 5',
        titulo: 'El plan de la primera hora',
        texto: 'Colgado junto al teléfono: aislar, avisar, no pagar, conservar las pruebas y pedir ayuda.',
        icono: 'llamadas',
        imagen: '/circuitos/circuito-02-llamadas-fondo.webp',
      },
      {
        etiqueta: 'Con qué se practica',
        titulo: 'Administraciones Pinar del Sur',
        texto: 'Un despacho inventado de Huelva con 47 comunidades y un incidente por unidad. Ningún dato real.',
        icono: 'gestor-documental',
        imagen: '/circuitos/vivir-con-esto-fondo.webp',
      },
    ],
  },

  unidades: [
    {
      titulo: 'El despacho, visto por un estafador',
      horas: '2 h',
      llevas:
        'Mirar tu despacho como lo mira quien quiere engañarlo: el dinero, los datos, los proveedores y la firma de las comunidades. A reconocer las tres familias de amenazas. A entender las palabras del curso sin jerga. Y a hacer el autodiagnóstico de exposición de tu despacho.',
      claves: [
        'Un despacho de administración de fincas interesa por lo que pasa por su mesa: el dinero de muchas comunidades, los datos de cientos de propietarios, los pagos a decenas de proveedores y la firma de las comunidades',
        'El aviso falso juega con tres cosas: miedo, prisa y un botón. Cuando van juntas, para',
        'Al banco se entra tecleando tú la dirección o desde la aplicación de siempre. Y si algo te inquieta, llamas al número que ya tenías, nunca al que te dan',
        'Avisar a los pocos minutos es lo que deja actuar al banco. Aun así, que el dinero vuelva no está garantizado',
        'El despacho usa seis piezas conectadas: programa de gestión, correo, banca, web, nube y móvil. No se protege una sola',
        'Los ataques llegan por tres familias: comunicaciones, software y presencia en internet. Tu autodiagnóstico te dice por cuál empezar',
      ],
      videos: ['El aviso falso del banco, minuto a minuto', 'Por qué un despacho de fincas'],
    },
    {
      titulo: 'El correo que pide dinero',
      horas: '2 h',
      llevas:
        'Reconocer un correo, un SMS o una llamada fraudulentos con seis señales, entender el fraude del cambio de cuenta y el del falso jefe, usar la verificación del beneficiario de tu banco y montar en tu despacho un protocolo de doble verificación con un papel para cada persona.',
      claves: [
        'El engaño ataca a la persona, no al ordenador: alguien se hace pasar por otro, mete prisa y pide dinero o datos',
        'Seis señales antes de hacer nada: remitente real, prisa, dinero o datos, algo que cambia, enlace o adjunto inesperado y que te aparte del camino de siempre',
        'Una voz, una firma o un logotipo ya no prueban quién es. Se confirma por otro canal, con el número que ya tenías',
        'La verificación del beneficiario es gratis y te avisa si el nombre no coincide. No la desactives en las remesas',
        'Una transferencia que ordenas tú, aunque sea engañado, no tiene devolución garantizada. Por eso se comprueba antes',
        'Tres papeles por escrito: quien comprueba, quien autoriza y quien paga y anota',
      ],
      videos: ['Seis señales en un correo', 'La cuenta que cambió y la voz que llamó'],
    },
    {
      titulo: 'Tu puesto y tus claves',
      horas: '2 h',
      llevas:
        'Tener una contraseña distinta para cada cuenta sin volverte loco, activar la verificación en dos pasos donde más duele, mantener tu ordenador y tu móvil al día, decir que no al pendrive que llega de fuera y usar cada wifi para lo suyo. Y a dejarlo todo en una norma de una página que firma el equipo.',
      claves: [
        'Una contraseña distinta para cada cuenta. Larga, mejor una frase, y guardada en un gestor de contraseñas, nunca en un pósit',
        'La verificación en dos pasos, primero en el correo, luego en la banca y después en el programa de gestión',
        'Un aviso de inicio de sesión que no es tuyo se atiende en el momento, entrando tú por tu camino de siempre',
        'El ordenador y el móvil, al día y bloqueados. Cuando piden reiniciar, se reinicia',
        'El pendrive de fuera no se conecta, los grupos no dependen de un móvil personal y cada wifi es para lo suyo. Y todo eso, en una página firmada por el equipo',
      ],
      videos: ['Una contraseña para todo', 'El puesto en una página'],
    },
    {
      titulo: 'Dónde está la información, y quién la ve',
      horas: '2 h',
      llevas:
        'Decidir quién entra en cada sitio y cerrar la puerta el día que alguien se va, ordenar la nube, montar unas copias que de verdad salven, conservar lo que la ley pide y destruir el resto. Y a saber dónde están y quién usa los certificados de las comunidades.',
      claves: [
        'La información se escapa por cuatro sitios: el descuido, el robo, la persona que se va y los terceros. Casi nunca hay un pirata',
        'Cada uno entra en lo que necesita para su puesto. Los accesos se dan apuntando y se quitan el último día, con la misma lista',
        'Compartir con personas, no con enlaces abiertos. Y revisar cada trimestre quién entra en cada carpeta',
        'Tres copias, dos soportes, una fuera de la oficina y una desconectada. Y probar a restaurar, porque una copia sin probar es una esperanza',
        'Las actas se custodian siempre; las convocatorias y apoderamientos, cinco años; la contabilidad del despacho, seis. Pasado el plazo, se destruye bien',
      ],
      videos: ['Por dónde se escapa', 'La copia que salva'],
    },
    {
      titulo: 'Lo que contratas, y la primera hora',
      horas: '2 h',
      llevas:
        'Dejar por escrito lo que exiges a cada proveedor tecnológico, sobre todo al que entra en remoto. A revisar la web, las redes y el ciberseguro con ojos de quien firma. Y a tener colgado junto al teléfono el plan de la primera hora de un incidente: aislar, avisar, no pagar, conservar las pruebas, pedir ayuda, avisar a la aseguradora, denunciar y aprender.',
      claves: [
        'Ante un ataque que bloquea los archivos y pide un rescate, se aísla sin apagar ni borrar, y la copia fuera de línea no se conecta hasta que la red esté limpia',
        'No se paga ni se contesta a la nota. Esa decisión se toma hoy, en frío',
        'El 017 asesora gratis todos los días de 8:00 a 23:00, pero no recoge denuncias. Comunicarlo a INCIBE-CERT es voluntario para un despacho pequeño',
        'A quien entra en remoto se le exige por escrito verificación en dos pasos, una cuenta por técnico, la lista de quién entra y un registro de accesos',
        'El ciberseguro cubre lo que diga tu póliza y exige cosas antes y durante. Hay que leerla, y avisar a la aseguradora la primera hora',
        'Si hay datos personales afectados, la parte jurídica es la unidad 6',
      ],
      videos: ['La primera hora, paso a paso', 'Lo que se exige a quien entra'],
    },
    {
      titulo: 'Cuando algo se rompe',
      horas: '2 h',
      llevas:
        'Reconocer una brecha de seguridad —que muchas veces no es un ataque—, manejar el plazo de las setenta y dos horas, decidir si además hay que avisar al afectado y llevar el registro interno, que es obligatorio aunque no se notifique nada.',
      claves: [
        'Una brecha no necesita un atacante: la más común de un despacho es un correo con las direcciones a la vista',
        'El reloj empieza cuando lo sabes, no cuando ocurrió. Setenta y dos horas como máximo',
        'No se notifica si es improbable que haya riesgo. Pero eso hay que poder razonarlo por escrito',
        'Avisar a la Agencia y avisar al afectado son dos decisiones distintas, con criterios distintos',
        'Todas las brechas se registran, se notifiquen o no. Es la obligación que más se incumple',
      ],
      videos: ['Qué cuenta, y cuándo empieza el reloj', 'A quién se avisa, y cuándo'],
    },
  ],

  perfiles: [
    {
      titulo: 'Todo el equipo del despacho · unidades 1 a 3',
      texto: 'El correo, el teléfono, las contraseñas y el puesto de trabajo.',
    },
    {
      titulo: 'Quien decide, titular o gerente · unidades 4 a 6',
      texto:
        'La información, los proveedores, el ciberseguro, el plan de respuesta y lo que obliga la ley si hay datos personales.',
    },
  ],

  docente: {
    parrafos: [
      'Dirige un despacho dedicado a la gestión integral de fincas, con un enfoque profesional, transparente y personalizado. Este curso nace de ahí: de las tareas que se repiten cada semana en un despacho real y de buscarles una salida que no obligue a renunciar al criterio profesional.',
    ],
  },

  incluye: [
    '6 unidades y 12 horas',
    '12 clases en vídeo, 24 minutos',
    '24 recursos descargables',
    'Una herramienta hecha para tu despacho en cada unidad',
  ],

  preguntas: [
    {
      p: '¿Sustituye al informático o al asesor jurídico?',
      r: 'El curso explica qué hacer y qué exigir. No sustituye al proveedor informático del despacho ni al asesor jurídico, y no recomienda marcas ni productos.',
    },
    {
      p: '¿Están comprobados los datos?',
      r: 'Teléfonos, plazos, normas y servicios se comprobaron el 02/10/2026 en fuentes oficiales. Lo que no se pudo confirmar no se afirma.',
    },
    {
      p: '¿Todo lo que propone es obligatorio?',
      r: 'Un despacho pequeño no está obligado por la directiva europea de ciberseguridad. Lo que el curso propone son buenas prácticas, y lo que sí obliga la ley de protección de datos lo cuenta la unidad «Cuando algo se rompe», que el curso incluye.',
    },
    {
      p: '¿Qué necesito para hacerlo?',
      r: 'Nada que instalar ni que contratar. No hace falta ningún conocimiento técnico ni haber hecho otro curso del catálogo. Para las prácticas conviene conocer los programas y servicios que usa tu despacho: se trabaja sobre lo tuyo, sin datos reales.',
    },
  ],

  gratis: 'S0',
}
