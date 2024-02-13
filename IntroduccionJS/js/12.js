//"use strict" // correr JS en modo stricto
const producto = {
    nombreProducto: "Monitor 25 \"",
    precio: 280,
    disponible: false,
}
Object.seal(producto) //no permite agregar/eliminar

//Object.freeze(producto) //no permite agregar/eliminar/modificar propiedades ni modificarlas
producto.imagen = "imagen.jpg";

//console.log(Object.isFrozen(producto))
console.log(Object.isSealed(producto))
console.log(producto)