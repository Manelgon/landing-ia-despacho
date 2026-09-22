# DESIGN.md · AFCademIA

Identidad visual de AFCademIA. Cualquier agente que trabaje en este proyecto
sigue este archivo. No se inventan colores, tipografías ni tonos.

Origen de estos valores: el CSS de `6-Comercial/pagina-de-venta.html` y el brand
book citado en `6-Comercial/README.md` del itinerario P1.

## Colores

| Token | Valor | Uso |
|---|---|---|
| `navy` | `#003D6B` | Color principal. Titulares sobre claro, cabeceras de tabla, bloque de precio |
| `navy-deep` | `#002A4A` | Fondo del pie y veladura del hero |
| `amber` | `#FF7A00` | **Solo acento.** Botones, etiquetas, viñetas, una palabra destacada |
| `amber-hover` | `#E56D00` | Botón pulsado |
| `amber-soft` | `#FFF3E6` | Fondo de la píldora donde se para cada circuito |
| `paper` | `#FAF8F4` | Fondo general de la página |
| `card` | `#FFFFFF` | Tarjetas y secciones alternas |
| `ink` | `#1A2332` | Titulares y texto fuerte |
| `body` | `#3A4A5A` | Texto corrido |
| `muted` | `#5B6B7A` | Subtítulos y texto secundario |
| `line` | `#E2DDD2` | Bordes y separadores |
| `aviso-fondo` | `#FBEDD5` | Caja de advertencia |
| `aviso-borde` | `#9A5B00` | Borde izquierdo de la advertencia |
| `ok` | `#2E7D52` | Marca de sí en la tabla comparativa |

**Regla del brand book, innegociable: el ámbar nunca domina.** Resalta el dato,
el botón o una palabra. Si una pantalla se ve naranja, está mal.

## Tipografía

- **Manrope** para todo el texto. Pesos 400, 600, 700 y 800.
- **JetBrains Mono** para datos, cifras, etiquetas y numeración de bloques. Pesos 400 y 600.

Etiqueta de sección (eyebrow): JetBrains Mono, 12 px, `letter-spacing: .18em`,
mayúsculas, color ámbar.

Titulares: peso 800, `letter-spacing: -.02em`, `text-wrap: balance`.
El h1 no pasa de 17 caracteres de ancho.

## Layout

- Contenedor: máximo 1060 px, 20 px de aire a los lados (32 px a partir de tableta).
- Secciones: 96 px arriba y abajo, 112 px a partir de tableta. El aire entre
  secciones es lo que hace que esto se lea como un documento y no como un folleto.
  Se decide en `Seccion`, en `src/components/ui.tsx`, y en ningún otro sitio.
- Las alternas llevan fondo blanco y línea arriba y abajo.
- Radio de borde: 8 px en botones y avisos, 10 px en tarjetas, 12 px en el bloque de precio.
- Sin sombras pesadas. La profundidad se hace con borde de 1 px y cambio de fondo.
- Medida de lectura: los titulares se cortan a 26 caracteres, los subtítulos a 56
  y los párrafos a 62. La medida va **en el propio elemento**, nunca en el
  contenedor: `ch` se mide con el tamaño de letra de quien lleva la clase.

## Composición

- **Cabecera de sección:** etiqueta en mono, titular grande y subtítulo en gris.
  Siempre en ese orden, siempre con el componente `Titulo`.
- **Listas de ideas:** filas separadas por una línea fina, con el número en mono
  a la izquierda. No se meten en tarjetas.
- **Rejillas:** asimétricas. La pieza principal ocupa el doble que las demás.
  Nunca una fila de tarjetas idénticas. Si la rejilla deja huecos en la última
  fila, se cambia el número de columnas: un hueco con el fondo asomando es un fallo.
- **Acordeones:** sin caja contenedora. Solo una línea debajo de cada fila y
  un `+` / `−` en ámbar.
- **Tablas:** sin fondo de color en la cabecera. Los encabezados van en mono,
  pequeños, en mayúsculas y en gris; las filas se separan con línea fina.

## Movimiento

Entrada al hacer scroll: 12 px desde abajo y opacidad, 600 ms con
`cubic-bezier(.16, 1, .3, 1)`. En cascada dentro de una lista, 50–90 ms por
elemento. Se dispara con `IntersectionObserver` (`src/components/reveal.tsx`),
nunca escuchando el evento scroll, y solo anima `opacity` y `transform`.

El hero no lleva entrada: tiene que estar legible antes de que hidrate nada.

Se respeta `prefers-reduced-motion`, y sin JavaScript se ve todo.

## Tono

**Prueba antes que promesa.** Se dice lo que el alumno monta, no lo que
conseguirá. Nada de cifras de ahorro sin medir, nada de testimonios inventados,
nada de FUNDAE hasta que esté comprobado.

Cada circuito dice dónde se para. Esa frase es parte de la identidad, no un
detalle: la IA prepara, el despacho responde.

## Archivos de marca

Los tres que usa la página salen del itinerario P1, en
`6-Comercial/imagenes-logos-integrados/`. De los originales solo se ha quitado
el fondo; los colores no se tocan.

| En `public/` | De dónde sale | Para qué |
|---|---|---|
| `logo-afcademia-negativo.png` | `logo-afcademia-transparente.png`, con el azul pasado a blanco | Sobre navy: la barra de arriba |
| `sello-enisa.png` | `certificado-enisa-transparente.png` | La franja de acreditaciones |
| `logo-fundae.png` | `imagenes/logo-fundae-referencia.png`, sin el fondo blanco | La franja de acreditaciones |

**El logo de FUNDAE no se recolorea nunca:** es marca de un tercero. Por eso la
franja de acreditaciones va sobre blanco y no sobre el navy.

El `logo-afcademia.png` original lleva el fondo blanco incrustado en el PNG.
Sobre el navy se ve como un recorte pegado: no se usa ahí.

## Lo que no se hace

- Degradados de color como decoración. La veladura del hero sobre la foto no
  es decoración: es lo que hace legible el texto.
- Sombras difusas y grandes.
- Emoji en la interfaz.
- Tres tarjetas iguales en fila como recurso de relleno.
- Secciones apretadas. Si dudas, más aire.
- Repetir en una imagen un texto que ya está escrito en la página.
- Mezclar esta identidad con la de otro cliente.
