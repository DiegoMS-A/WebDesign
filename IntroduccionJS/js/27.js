//POO

//OBJECT LITERAL
const producto = {
    nombre : "Tablet",
    precio: 500
}

//OBJECT CONSTRUCTOR

function Producto(nombre, precio){

    this.nombre = nombre
    this.precio = precio
}

const producto2 = new Producto("Móvil" , 400)
const producto3 = new Producto("Impresora" , 130)

//solo se puede usar en producto
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}

console.log(producto2)
console.log(producto3)

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`
}

console.log(formatearProducto(producto2))



