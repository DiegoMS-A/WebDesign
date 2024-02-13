const carrito = [
    { nombre: "Monitor 20\"", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Móvil", precio: 300 },
    { nombre: "Consola", precio: 400 },
    { nombre: "Teclado", precio: 500 },
    { nombre: "Raton", precio: 600 },
    { nombre: "Auriculares", precio: 700 }
]


//forEach (iterar y mostrar en consola)
carrito.forEach(producto => console.log(producto.nombre))
const arreglo1 = carrito.forEach(producto =>producto.nombre)

//Map (crear nuevo array)
const arreglo2 = carrito.map(producto =>producto.nombre)
const arreglo3 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`)

console.log(arreglo1) //undefined
console.log(arreglo2)
console.log(arreglo3)
