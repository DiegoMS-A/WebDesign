//OBJETOS
const producto = {
    nombreProducto: "Monitor 25 \"",
    precio: 280,
    disponible: false,
}

const medidas = {
    peso : "1kg",
    medidas : "1m"
}

//Junta objetoss
const productoConMedidas = {...producto, ...medidas}

console.log(producto)
console.log(productoConMedidas)