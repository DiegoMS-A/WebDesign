const producto = "Monitor de 20 Pulgadas";
//const producto2 = String('Monitor 30 Pulgadas');
//const producto3 = new String('Monitor 50 Pulgadas');
//const producto4 = "Monitor de 20\"";
const producto2 = "Monitor de 20\"";
const tweet = "Aprendiendo JavaScript con cel curso de Desarrollo Web Completo"
const email = "correo@correo"

/*console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(typeof producto3);
console.log(producto4)*/


//INDEXOF
console.log(producto.length)
console.log(tweet.indexOf("JavaScript"))
console.log(producto2.indexOf("Tablet")) //devuelve -1, que no está

//INCLUDES
console.log(tweet.includes("JavaScript")) //true
console.log(producto2.includes("Tablet"))  //false


