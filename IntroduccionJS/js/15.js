//Métodos de array
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

const carrito = [
    { nombre: "Monitor 20\"", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Móvil", precio: 300 },
    { nombre: "Consola", precio: 400 },
    { nombre: "Teclado", precio: 500 },
    { nombre: "Raton", precio: 600 },
    { nombre: "Auriculares", precio: 700 }
]

//For each
meses.forEach(function (mes) {
    if(mes =="Marzo")
    console.log("Marzo si existe")
}
)

//No vale con objetos
let resultado = meses.includes("Diciembre")
//console.log(resultado)

//Some para objetos por propiedades
resultado = carrito.some(function(producto){
    return producto.nombre === "Raton" //devuelve true
})
console.log(resultado)

//Arrow function
let resultado2
resultado2 = carrito.some(producto => producto.nombre === "Auriculares")
console.log(resultado2) //devuelve true

//TOTAL A PAGAR DEL CARRITO -> REDUCE
let resultado3 = carrito.reduce(function(total, producto) {
    return total + producto.precio
},0)

console.log(resultado3)

//TOTAL A PAGAR DEL CARRITO -> REDUCE CON ARROW FUNCTION
resultado3 = carrito.reduce((total, producto)=> total + producto.precio,0)
console.log(resultado3)

//FILTER
 resultado3 = carrito.filter(function(producto){
    return producto.precio !== "Teclado"
 })
 console.log(resultado3)
