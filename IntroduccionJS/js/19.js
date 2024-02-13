function sumar(num1,num2){
    return num1+num2
}

const resultado = sumar(2,2)
console.log(resultado)
console.log(sumar(3,3))

let total = 0

function agregarCarrito(precio){
    return total +=precio;
}

function calcularImpuesto(total){
    return 1.15 * total
}

total = agregarCarrito(200)
total = agregarCarrito(400)
total = agregarCarrito(600)

const totalPagar = calcularImpuesto(total)

console.log(total)
console.log("El total a pagar con impuestos es" + " " + totalPagar)
console.log(`EL total a pagar con impuestos es ${totalPagar}`)