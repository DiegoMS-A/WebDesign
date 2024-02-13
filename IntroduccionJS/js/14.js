//ARRAYS O ARREGLOS []

const numeros = [10,20,30,40,50]

//console.log(numeros)
///console.table(numeros)


//const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo")

//console.log(meses)
//console.table(numeros)

/*const arreglo = ["Hola", 10, true, {nombre: "Diego", trabajo:"programador"}, [1,2,3]]
console.log(arreglo)
console.log(arreglo[3])
console.log(arreglo[300]) //undefined*/

//Conocer extensión de un arreglo
//console.log(meses.length)

//Recorrer array con iterador
/*meses.forEach(function(mes){
    console.log(mes);
})*/

numeros [0] = 1
numeros [5] = 60
console.table(numeros)

//Agrega al final
numeros.push(70)
//Agrega al principio
numeros.unshift(45)
console.table(numeros)

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

//elimina el último
meses.pop()
//elimina el primero
meses.shift()
//elimina por índice y cuantos a partir del índice
meses.splice(2,1)
console.table(meses)

//HASTA AQUI SE MODIFICAN LOS DATOS, ORIGINALES, NO RECOMENDADO.

//Copia meses y añade Junio al final
const nuevoArray = [...meses, "Junio"]
//Copia meses y añade Junio al principio
const nuevoArray2 = ["Junio",...meses]
console.table(nuevoArray)
console.table(nuevoArray2)
