//ITERADORES (FOR, WHILE, DO WHILE)

//FOR
for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        //  console.log(i + " es par")
    } else {
        //  console.log(i + " es impar")
    }
}

const carrito = [
    { nombre: "Monitor 20\"", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Móvil", precio: 300 },
    { nombre: "Consola", precio: 400 },
    { nombre: "Teclado", precio: 500 },
    { nombre: "Raton", precio: 600 },
    { nombre: "Auriculares", precio: 700 }
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre + " " + carrito[i].precio)
}

// WHILE
let i = 0;

while (i < carrito.length) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es par`)
    }
    i++;
}

//DO WHILE
let x= 100

do{
    console.log(x)
    x++
} while (x<10)

