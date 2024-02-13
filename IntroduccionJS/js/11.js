const producto = {
    nombreProducto: "Monitor 25 \"",
    precio: 280,
    disponible: false,
}

const precioProducto = producto.precio
const nombre = producto.nombreProducto //da igual que se llamen igual

console.log(precioProducto)
console.log(nombre)

//DESTRUCTURING, CREA VARIABLE Y EXTRAE VALOR EN 1 PASO
//OJO!!!! TIENEN QUE LLAMARSE IGUAL

/*const {precio} = producto
const {nombreProducto} = producto*/

//ASIGNACIÓN DOBLE
const { precio, nombreProducto } = producto

console.log(precio)
console.log(nombreProducto)