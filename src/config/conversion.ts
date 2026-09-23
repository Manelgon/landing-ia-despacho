/**
 * EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA DECIDIR QUÉ HACE EL BOTÓN.
 *
 * La landing está construida sin dar por supuesto cómo se vende el curso.
 * Aquí eliges el modo y rellenas lo que ese modo necesita. Nada más.
 * No hay que tocar ningún otro archivo.
 *
 *   'pendiente' → los botones quedan desactivados y sale un aviso en pantalla.
 *                 Es el estado actual. Impide publicar la página sin querer.
 *   'stripe'    → el botón lleva al enlace de pago. Rellena stripe.enlace.
 *   'lead'      → el botón lleva al formulario de contacto de más abajo.
 *   'externo'   → el botón lleva a Evolcampus o donde esté la matrícula.
 *   'contacto'  → sin botón de compra: se enseña el correo y el teléfono.
 */

export type ModoConversion = 'pendiente' | 'stripe' | 'lead' | 'externo' | 'contacto'

export const CONVERSION = {
  modo: 'externo' as ModoConversion,

  /** El precio, tal cual se quiere ver. Ejemplo: '890 €'. Déjalo en null mientras no esté decidido. */
  precio: '1.795 €' as string | null,

  /** Lo que va debajo del precio. Ejemplo: 'IVA incluido · pago único'. */
  precioNota: 'IVA incluido',

  stripe: {
    enlace: '',
    textoBoton: 'Matricularme ahora',
  },

  externo: {
    /**
     * Producto 539 de la tienda. El parámetro add-to-cart mete el curso en el
     * carrito y lleva directo a la pantalla de pago: se salta la ficha y el
     * carrito intermedio. La ficha, por si hace falta, es
     * https://afcademia.com/producto/ia-para-el-despacho-%c2%b7-itinerario-completo/
     */
    enlace: 'https://afcademia.com/finalizar-compra/?add-to-cart=539',
    textoBoton: 'Quiero el itinerario',
  },

  contacto: {
    email: 'info@afcademia.com',
    telefono: '',
    textoBoton: 'Hablar con nosotros',
  },

  lead: {
    textoBoton: 'Quiero que me llaméis',
    /** A dónde se envía el formulario. Vacío = todavía no conectado. */
    endpoint: '',
  },
} as const

/** true cuando la página todavía no se puede publicar. */
export const SIN_DECIDIR = CONVERSION.modo === 'pendiente' || CONVERSION.precio === null

/** El destino del botón principal según el modo elegido. */
export function destinoBoton(): string | null {
  switch (CONVERSION.modo) {
    case 'stripe':
      return CONVERSION.stripe.enlace || null
    case 'externo':
      return CONVERSION.externo.enlace || null
    case 'contacto':
      return CONVERSION.contacto.email ? `mailto:${CONVERSION.contacto.email}` : null
    case 'lead':
      return '#matricula'
    default:
      return null
  }
}

/** El texto del botón principal según el modo elegido. */
export function textoBoton(): string {
  switch (CONVERSION.modo) {
    case 'stripe':
      return CONVERSION.stripe.textoBoton
    case 'externo':
      return CONVERSION.externo.textoBoton
    case 'contacto':
      return CONVERSION.contacto.textoBoton
    case 'lead':
      return CONVERSION.lead.textoBoton
    default:
      return 'Quiero el itinerario'
  }
}
