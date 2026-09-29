# Landing · IA para el Despacho

Página de venta del itinerario **IA para el Despacho** de AFCademIA.

## Estado

**No publicable todavía.** Faltan dos decisiones, y la propia página lo avisa en
pantalla mientras falten:

- [ ] El precio.
- [ ] Qué hace el botón: pago con Stripe, formulario de contacto o enlace externo.

Las dos se resuelven en un único archivo: `src/config/conversion.ts`.
Mientras no se resuelvan, los botones no enlazan a ninguna parte y la página
lleva `robots: noindex` para que no se indexe por error.

### Cobro

El botón lleva al producto en la tienda de AFCademIA, que es quien gestiona el
carrito, los datos de facturación y el cobro con Stripe. La landing no toca
ninguna pasarela: solo enlaza.

El destino se configura en `src/config/conversion.ts`.


## Dónde está publicada

| | |
|---|---|
| Dirección | https://automatiza.afcademia.com |
| Alojamiento | Vercel, conectado a este repositorio |
| Despliegue | Automático: cada envío a `main` publica una versión nueva |

El dominio principal, `afcademia.com`, es un WordPress en otro servidor y no
tiene nada que ver con esta landing. Por eso `metadataBase`, en
`src/app/layout.tsx`, apunta al subdominio: si apuntara al dominio principal,
la imagen de previsualización se buscaría en el WordPress y daría 404.

## Arrancar

```bash
npm run dev
```

## Dónde está cada cosa

| Archivo | Qué contiene |
|---|---|
| `DESIGN.md` | La identidad visual de AFCademIA. Se respeta siempre |
| `src/config/conversion.ts` | **El precio y qué hace el botón.** El único archivo de decisiones |
| `src/content/curso.ts` | Todos los textos. Para corregir una frase se corrige aquí |
| `src/components/` | El diseño. No contiene textos ni decisiones de negocio |
| `src/components/ui.tsx` | El ritmo vertical y la cabecera de sección. Se toca aquí y cambia toda la página |
| `src/components/reveal.tsx` | El observador que hace entrar los bloques al hacer scroll |
| `src/components/navbar.tsx` | La barra fija de arriba: logo, tres anclas y el botón |
| `src/components/acreditaciones.tsx` | La franja blanca con los sellos de ENISA y FUNDAE |
| `src/components/pie.tsx` | El pie común de AFCademIA, igual que en Santander y Graduados Sociales |
| `FICHA-PRODUCTO-WOOCOMMERCE.md` | El texto del producto, listo para pegar en la tienda |

## De dónde sale el contenido

Los textos vienen de `6-Comercial/pagina-de-venta.html` del itinerario P1, y las
cifras de `FICHA-DEL-CURSO.md`. Están escritos a mano y no se han reescrito.

Si el curso cambia, la fuente de verdad sigue siendo la carpeta del itinerario:
allí los comerciales se regeneran con `_genera-comercial-p1.py` y desde ahí se
traen los cambios a `src/content/curso.ts`.

## Lo que no dice la página, y no debe decir

Por el README de la carpeta comercial:

- **Horas ahorradas.** No está medido.
- **Testimonios.** No hay.

### FUNDAE

**Confirmado por Manel el 22 de septiembre de 2026: el itinerario es bonificable.**

Por eso la página lo dice. Están el logo de la Fundación Estatal en la franja de
acreditaciones y el texto de `BONIFICACION`, en `src/content/curso.ts`, debajo
del bloque de precio.

La frase es sobria a propósito: dice que es bonificable y a quién aplica, sin
prometer importes ni porcentajes, porque dependen del crédito de formación de
cada despacho.

Queda desactualizado el aviso de la carpeta comercial del itinerario
(`6-Comercial/imagenes/fundae-pendiente-no-publicar-1200x400.jpg`), que sigue
marcando el uso como pendiente de comprobar. Conviene corregirlo allí para que
no contradiga a esta página.

## Página de alumnos fundadores · /alumnos-fundadores

Registro gratis con matrícula en Evolcampus. Misma web, ruta oculta:
**https://automatiza.afcademia.com/alumnos-fundadores** (la antigua `/fundadores` redirige aquí). No se enlaza desde ningún sitio
y lleva `noindex`: solo entra quien tenga el enlace.

Recorrido, igual que la clase gratuita:

1. Se registra en la página → fila en `registros_fundadores` (Supabase).
2. Supabase avisa a n8n → le llega un correo «Confirma tu plaza · AFCademIA».
3. Responde con la palabra **ALTA** → n8n lo matricula en Evolcampus.
4. Evolcampus le manda usuario y contraseña.

| Archivo | Qué contiene |
|---|---|
| `src/content/fundadores.ts` | Textos, palabra clave y cláusula de datos |
| `src/app/alumnos-fundadores/page.tsx` | La página |
| `src/components/registro-fundador.tsx` | El formulario |
| `supabase/fundadores.sql` | Tabla, permisos y aviso a n8n |
| `n8n/fundadores-matricula.json` | El flujo de n8n, para importar |

### Para ponerla en marcha

- [ ] n8n: importar `n8n/fundadores-matricula.json`.
- [ ] n8n, nodo «Registro nuevo (Supabase)»: crear credencial *Header Auth* con nombre `X-Firma` y un secreto largo.
- [ ] n8n, nodo «Evolcampus Token»: pegar `clientid` y `key`.
- [x] n8n, nodo «⚙️ Config respuesta»: `grupo_id` = 93 («GRUPO FUNDADORES - SEPT», curso «AFC - IA PARA EL DESPACHO», 999 días de acceso).
- [ ] Supabase: en `supabase/fundadores.sql` cambiar la URL del webhook y el mismo secreto, y ejecutarlo.
- [ ] Activar el flujo en n8n y hacer una prueba de principio a fin con un correo propio.
- [ ] Decidir qué incluye ser fundador (`incluye` en `fundadores.ts`). Mientras esté vacío, no se enseña.
- [ ] Que Prodat revise la cláusula de datos de este formulario.

La palabra clave está en tres sitios que tienen que coincidir: `fundadores.ts`
y los dos nodos «⚙️ Config» del flujo.

## Clasificador de solicitudes de diagnóstico

Cada solicitud del formulario llega a n8n, que le pone una prioridad y avisa
al equipo por correo. **El `estado` no lo toca: lo decidís vosotros.**

- **Reglas (código, acordadas el 29-09-2026):** fuera de 20-500 comunidades →
  descartada. Dentro, decide él o con socio y lo quiere en tres meses → alta.
  Resto → media.
- **IA (OpenAI):** recibe solo las respuestas, nunca nombre, correo ni teléfono.
  Escribe un resumen, por dónde empezar la llamada, preguntas y alertas.
- Si OpenAI falla, sale como `sin_clasificar` y el aviso llega igual.

| Archivo | Qué contiene |
|---|---|
| `supabase/clasificador.sql` | Columnas nuevas: `prioridad`, `resumen_ia`, `enfoque_ia`, `alertas_ia` |
| `n8n/solicitudes-clasificador.json` | El flujo, con el prompt en el nodo «⚙️ Config» |

### Para ponerlo en marcha

- [ ] Supabase: ejecutar `supabase/clasificador.sql`.
- [ ] n8n: importar `n8n/solicitudes-clasificador.json`.
- [ ] Webhook: credencial *Header Auth* `X-Firma` con el mismo secreto que `webhook-n8n.sql`. La ruta es `solicitud-despacho`.
- [ ] Nodo «OpenAI»: credencial OpenAI de AFCademIA.
- [ ] «Guarda clasificación»: la credencial Postgres de Supabase (la de fundadores).
- [ ] «Avisa al equipo»: la credencial de Gmail.
- [ ] «⚙️ Config» → `avisar_a`: los correos del equipo, separados por comas.
- [ ] Activar y hacer una prueba con un correo propio.
- [ ] Que Prodat confirme que usar OpenAI como encargado encaja con la cláusula del formulario.

## De dónde viene cada solicitud (partners y redes)

Cada partner y cada red usa su propio enlace:

- Partner: `https://automatiza.afcademia.com/?ref=juan` → el código aparece
  escrito en el campo «¿Te recomienda alguien?». Si vuelve otro día por otro
  sitio, lo puede escribir él. Sin cookies.
- Redes: `?utm_source=linkedin`, `instagram`, `facebook`, `whatsapp`.

Se guarda en las columnas `partner` y `utm` de `solicitudes_despacho`.
`supabase/origen.sql` crea la columna y trae la consulta para contar
solicitudes y matrículas por partner y por red.

**`origen.sql` se ejecuta antes de publicar la landing**: si no, Supabase
rechaza el formulario porque no conoce la columna `partner`.

## Stack

Next.js 16, React 19, TypeScript y Tailwind CSS 4. Sin base de datos: la página
es estática. Si se añade formulario de contacto, entonces sí hará falta
Supabase o un servicio de formularios.
