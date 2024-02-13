//FUNCIONES, JS se ejectura en 2 vueltas, regitro y ejecución

//Declaracion, se puede llamar antes de declarar
function sumar() {
    console.log(10 + 10);
}
//LLamada
sumar();

//Expresion, NO se puede llamar antes de declarar, lo toma cómo variable
const sumar2 = function () {
    console.log(3 + 3);
}
sumar2();

//IIFE, funciones sin llamada, se llaman a sí mismas
(function() {
    console.log("Esto es una función IIFE");
})()