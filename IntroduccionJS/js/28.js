//CLASES, siempre inicia en Mayuscula

class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    formatearProducto() {
        return `El nombre es ${this.nombre} y el precio es ${this.precio}`
    }

    precioProducto() {
        console.log(`El precio es ${this.precio}`)
    }

}

const producto = new Producto("Móvil", 400)
const producto2 = new Producto("Impresora", 130)
console.log(producto.precioProducto())
console.log(producto2.precioProducto())


//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre,precio)
        this.isbn = isbn
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su isbn ${this.isbn}`
    }

    precioProducto() {
        super.precioProducto()
        console.log("Hay existencias")
    }
}

const libro = new Libro("JavaScript para Dummies", 20, "4512328781F")
console.log(libro.formatearProducto())
libro.precioProducto()


