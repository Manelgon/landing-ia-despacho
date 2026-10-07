import type { CursoSuelto } from './tipo'

/**
 * A7 · Documentos del despacho con IA.
 *
 * Fuente: Evolmind - Scroms/cursos/11 · Documentos del despacho con IA/
 *   - 3-Programa-y-guia/Programa-documentos-del-despacho-con-ia.html (casi todo)
 *   - FICHA-DEL-CURSO.md («Al terminar, tendrás»)
 *
 * Del programa se ha dejado fuera, a propósito, la nota de la unidad común con
 * otro curso y «Seis unidades propias y una común» (decidido por Manel el
 * 07/10/2026). No tiene clase gratuita ni precio de lanzamiento.
 */
export const A7: CursoSuelto = {
  codigo: 'A7',
  slug: 'documentos-del-despacho-con-ia',
  meta: {
    titulo: 'Documentos del despacho con IA · Curso online · AFCademIA',
    descripcion:
      'Actas, convocatorias, avisos, derramas y respuestas: encargados con criterio y revisados antes de firmar. 7 unidades, 14 horas, online.',
  },

  hero: {
    eyebrow: 'IA en el despacho · Curso online',
    titular: { antes: 'Documentos del despacho ', destacado: 'con IA', despues: '' },
    subtitulo:
      'Actas, convocatorias, avisos, derramas y respuestas: encargados con criterio y revisados antes de firmar.',
    entradilla:
      'Para quien ya usa una IA para escribir y no acaba de fiarse, o la ha dejado porque «se inventa cosas».',
    imagen: '/circuitos/circuito-03-documentos-fondo.webp',
  },
  cifras: [
    { valor: '7', etiqueta: 'unidades' },
    { valor: '14 h', etiqueta: 'de formación online' },
    { valor: '29 min', etiqueta: 'de vídeo en 13 clases' },
    { valor: '36', etiqueta: 'recursos descargables' },
  ],

  partida: {
    titulo: { antes: 'Ninguno es difícil. ', destacado: 'Todos cuestan tiempo' },
    casos: [
      'El acta de la junta, que cuesta una tarde.',
      'La convocatoria con su orden del día.',
      'El aviso del portal y la carta de la derrama.',
      'La respuesta al propietario que reclama.',
    ],
    cierre: 'Y con una IA, el miedo de siempre: que se invente cosas. Tiene arreglo, y está en el encargo.',
    regla: 'La herramienta redacta. Los datos, la decisión y la firma siguen siendo tuyos.',
  },

  llevas: {
    sub: 'Diez encargos probados, tu propia biblioteca del despacho montada, y tres documentos reales tuyos hechos con ella y revisados con la lista de control.',
    tarjetas: [
      {
        etiqueta: 'Unidades 1 a 5',
        titulo: 'Diez encargos probados',
        texto: 'Listos para copiar: el aviso del portal, el acta, la convocatoria, la respuesta, la derrama y más. Sirven igual en ChatGPT, Claude o Gemini.',
        icono: 'documentos',
        imagen: '/circuitos/circuito-03-documentos-fondo.webp',
      },
      {
        etiqueta: 'Unidad 2',
        titulo: 'El acta, de las notas al libro',
        texto: 'Cada punto con deliberación, acuerdo y votación, y las mayorías marcadas para comprobarlas.',
        icono: 'archivo',
        imagen: '/circuitos/circuito-02-llamadas-fondo.webp',
      },
      {
        etiqueta: 'Unidad 5',
        titulo: 'La lista de antes de firmar',
        texto: 'Cuatro comprobaciones para cualquier documento: números, elementos, marcas y artículo.',
        icono: 'fundamentos',
        imagen: '/circuitos/vivir-con-esto-fondo.webp',
      },
      {
        etiqueta: 'Unidad 6',
        titulo: 'Tu biblioteca del despacho',
        texto: 'Cada encargo guardado con su ficha, su nombre y su versión, en la carpeta compartida.',
        icono: 'gestor-documental',
        imagen: '/circuitos/circuito-05-archivo-fondo.webp',
      },
      {
        etiqueta: 'Unidad 6',
        titulo: 'Seudonimizar en tres minutos',
        texto: 'Nombres por elemento, y cuentas, DNI y teléfonos fuera, antes de adjuntar un documento real.',
        icono: 'conexiones',
        imagen: '/circuitos/antes-02-cuentas-conectadas-fondo.webp',
      },
      {
        etiqueta: 'Con qué se practica',
        titulo: 'C.P. Los Almendros',
        texto: 'Una comunidad inventada con sus coeficientes, su hoja de asistencia y las notas de una junta. Los números cuadran a propósito. Ningún dato real.',
        icono: 'facturas',
        imagen: '/hero-limpia.jpg',
      },
    ],
  },

  unidades: [
    {
      titulo: 'El encargo por dentro',
      horas: '2 h',
      llevas:
        'Escribir un encargo con los seis bloques que lo sostienen, cerrarle el hueco por donde entra la invención con la regla de la única fuente, y montar tu primer documento completo: el aviso del portal.',
      claves: [
        'La herramienta no miente: completa. El invento es un hueco que le dejaste',
        'Un encargo son seis bloques: papel, encargo, materiales, forma, líneas rojas y control',
        '«Estos archivos son la única fuente de hechos» es una instrucción; «no te inventes nada» es un deseo',
        '[PENDIENTE] para lo que falta, [VERIFICAR] para lo que hay que comprobar. Un documento con marcas sin resolver no sale del despacho',
        'Nombres, cuentas, salud y dos comunidades juntas: nunca, tampoco cuando da pereza cambiarlo',
        'Reunir los datos ciertos es el trabajo. Redactar es lo que se delega',
      ],
      videos: ['El encargo, bloque a bloque', 'Lo que rellena sola'],
    },
    {
      titulo: 'El acta de la junta',
      horas: '2 h',
      llevas:
        'Tomar notas que sirvan para encargar el acta, montar cada punto con sus tres partes, escribir acuerdos que se puedan ejecutar y dejar marcado —no inventado— todo lo que depende de una mayoría o de un plazo.',
      claves: [
        'El acta no se resume: se estructura. Un apartado por punto, con deliberación, acuerdo y votación',
        'Un acuerdo dice quién, qué, cuánto y cuándo. Si falta uno de los cuatro, alguien tendrá que preguntar',
        'Las notas son la única fuente de hechos: por elemento, con la votación tomada en el momento y las cifras tal cual',
        'Las mayorías se marcan con [VERIFICAR] y se comprueban en el BOE, leyendo el apartado entero',
        'No entran la edad, la salud, los reproches ni la opinión del despacho',
        'El acta que va al libro lleva nombres; el encargo, no. Los pones tú al final, desde tu programa',
      ],
      videos: ['De las notas al acta', 'Un acuerdo que se pueda ejecutar'],
    },
    {
      titulo: 'Convocatorias, avisos y respuestas',
      horas: '2 h',
      llevas:
        'Redactar puntos del orden del día que digan qué se va a votar, montar la serie de avisos de una obra y contestar por escrito a un propietario sin admitir nada que no quieras admitir.',
      claves: [
        'Lo que no está en el orden del día no se puede votar. Un punto tiene que permitir decidir si merece la pena ir',
        'La convocatoria lleva los dos horarios, la relación de deudores por elemento e importe y la advertencia del artículo 15.2',
        'Una obra son tres avisos, y el que cierra es el que corta las llamadas',
        'El tablón se lee como si estuviera en la calle: ahí no va ningún propietario identificado',
        'Informar no es admitir. La diferencia está en el verbo y en quién es el sujeto',
        'Lo que compromete a la comunidad sube de mesa: al presidente, al letrado o a la junta',
      ],
      videos: ['El orden del día decide lo que se puede votar', 'Contestar sin admitir'],
    },
    {
      titulo: 'El dinero, explicado',
      horas: '2 h',
      llevas:
        'Repartir una derrama sin dejar que cuadre el redondeo, convertir un cierre de ejercicio en una hoja que se entienda, y preparar un requerimiento de pago con los importes cerrados y sin un euro de más.',
      claves: [
        'Los números los haces tú. Se delega ordenarlos, explicarlos y escribir la carta',
        'La regla del céntimo: el descuadre del redondeo se señala, no se cuadra',
        '«Enséñame la operación de uno» convierte un resultado en algo comprobable en diez segundos',
        'El reparto va con arreglo a la cuota de participación, salvo lo especialmente establecido: los estatutos se miran antes',
        'En una liquidación, ni previsiones, ni comparaciones sin datos, ni causas que no hayas dado tú',
        'En un requerimiento, importes cerrados: ni intereses, ni costas, ni valoraciones. Y lo ve antes quien lleve el asunto',
      ],
      videos: ['La regla del céntimo', 'Enséñame la operación'],
    },
    {
      titulo: 'Antes de firmar',
      horas: '2 h',
      llevas:
        'Pasar las cuatro comprobaciones a cualquier documento salido de una IA, comprobar un artículo en el texto consolidado del BOE en treinta segundos, y encargar los tres documentos que no pueden recomendar nada: el comparativo, el parte y la nota para el presidente.',
      claves: [
        'Ningún documento sale sin las cuatro comprobaciones: números, elementos, marcas y artículo. En ese orden',
        'La lista se pasa siempre, y sobre todo al documento que sale perfecto',
        'Un artículo se comprueba en el texto consolidado del BOE: el apartado entero y la fecha de actualización',
        'No todo está en el BOE: estatutos, actas, pólizas y presupuestos son la fuente de lo suyo',
        'El comparativo compara, el parte describe y la nota ordena opciones. Ninguno recomienda',
        'Formación, no asesoramiento: cuando la pregunta es «qué hacemos», el asunto sube de mesa. Y quien firma eres tú',
      ],
      videos: ['Las cuatro comprobaciones', 'Comprobar un artículo en el BOE'],
    },
    {
      titulo: 'Tu biblioteca del despacho',
      horas: '2 h',
      llevas:
        'Guardar un encargo con su ficha, su nombre y su versión; seudonimizar un documento real en tres minutos para poder trabajar con él; y saber cuándo un encargo merece dejar de ser un archivo de texto, que es menos veces de las que parece.',
      claves: [
        'Un encargo que vive en el historial de un chat está perdido. Se guarda en un archivo, en la carpeta compartida',
        'La ficha son siete líneas, y la que más vale es «qué falló y qué se cambió»',
        'Seudonimizar son tres minutos: nombres por elemento, y cuentas, DNI y teléfonos fuera',
        'Primero se limpia, después se encarga. Pedirle que ignore un dato no lo devuelve',
        'La tabla de equivalencias no sale del despacho: es, ella sola, un fichero de datos personales',
        'Un archivo de texto gana a una herramienta salvo que se cumplan las tres condiciones. Y una biblioteca sin dueño dura seis meses',
      ],
      videos: ['De un encargo suelto a una biblioteca', 'Seudonimizar en tres minutos'],
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
      titulo: 'Administradores y administradoras de fincas',
      texto: 'Colegiados o no.',
    },
    {
      titulo: 'Personal de despacho',
      texto: 'Quien redacte actas, convocatorias, avisos o respuestas.',
    },
  ],

  docente: {
    parrafos: [
      'Dirige un despacho dedicado a la gestión integral de fincas, con un enfoque profesional, transparente y personalizado. Este curso nace de ahí: de las tareas que se repiten cada semana en un despacho real y de buscarles una salida que no obligue a renunciar al criterio profesional.',
    ],
  },

  incluye: [
    '7 unidades y 14 horas',
    '13 clases en vídeo, 29 minutos',
    '36 recursos descargables',
    'Diez encargos probados, listos para copiar',
  ],
  preguntas: [
    {
      p: '¿Sustituye al letrado de la comunidad?',
      r: 'El curso enseña a redactar y a revisar documentos, y a comprobar en el BOE lo que dice la norma. No sustituye la consulta al letrado de la comunidad, y hay una unidad entera dedicada a reconocer cuándo un asunto deja de ser del despacho.',
    },
    {
      p: '¿La IA cita la ley?',
      r: 'Los encargos del curso le prohíben afirmar mayorías, plazos o artículos: escribe una marca y el alumno lo comprueba en el texto consolidado. Los artículos que citan los materiales se verificaron el 16/09/2026 contra el texto actualizado a 21/03/2026, y llevan esa fecha escrita para que se vuelva a comprobar.',
    },
    {
      p: '¿Y los números?',
      r: 'Los repartos, las sumas y los importes se hacen en el programa del despacho. La herramienta los ordena y los explica, y tiene prohibido cuadrar un descuadre de redondeo por su cuenta.',
    },
    {
      p: '¿Y los datos de los propietarios?',
      r: 'Se trabaja por elemento —«el propietario del 3.º B»—, y los documentos reales se limpian antes de adjuntarlos. La unidad 6 enseña a hacerlo en tres minutos.',
    },
    {
      p: '¿Qué necesito para hacerlo?',
      r: 'Una cuenta gratuita de cualquier asistente de IA con conversación: ChatGPT, Claude o Gemini. No se instala nada y no se programa nada. No hace falta ningún conocimiento técnico ni haber hecho otro curso. Todo el curso se practica con una comunidad de ejemplo que se entrega con los materiales.',
    },
  ],
}
