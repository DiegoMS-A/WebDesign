//Funciones que reciben parámetros
function sumar(num1,num2){
    console.log(num1+num2);
}

//se pasan argumentos a las funciones
sumar(3,4);

const sumar2 = function(n1,n2){
    console.log(n1 + n2);
}

sumar2(3,4);

//parámetros por default
function sumarDefault(num1 = 0,num2 = 0){
    console.log(num1+num2);
}
sumarDefault(1)