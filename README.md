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

## Stack

Next.js 16, React 19, TypeScript y Tailwind CSS 4. Sin base de datos: la página
es estática. Si se añade formulario de contacto, entonces sí hará falta
Supabase o un servicio de formularios.
