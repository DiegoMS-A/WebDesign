//OBJETOS
const nombreProducto = "Monitor 20 \""
const precio = 300
const disponible = true

const producto = {
    nombreProducto : "Monitor 25 \"",
    precio : 280,
    disponible : false,
}

/*
//devuelve objeto completo
console.log(producto)
*/

//ACCEDER A PROPIEDADES OBJETO
console.log(producto.precio)
console.log(producto["precio"])

//AÑADIR PROPIEDADES
producto.imagen = "imagen.jpg"
console.log(producto)

//QUITAR PROPIEDADES
delete producto.imagen
console.log(producto)
