const puntuacion = "1000";


// === revisa que sea el valor y el tipo de dato
if (puntuacion == 1000) {
    console.log("La puntuacion es 1000")
} else {
    console.log("La puntuacion no es 1000")
} //SI ES 1000

if (puntuacion === 1000) {
    console.log("La puntuacion es 1000")
} else {
    console.log("La puntuacion no es 1000")
}//NO ES 1000

const efectivo = 1000
const carrito = 800

if (efectivo > carrito) {
    console.log("Puede pagar")
} else {
    console.log("Fondos insuficientes")

}

const rol = "EDITOR"
if (rol === "ADMINISTRADOR") {
    console.log("Acceso a todo el sistema")
}
else if (rol === "EDITOR") {
    console.log("Acceso de editor")
}
else {
    console.log("No tienes acceso")
}