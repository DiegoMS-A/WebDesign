//ASYNC - AWAIT

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando clientes, espere")

        setTimeout(function () {
            resolve("Los clientes han sido descargados")
        }, 3000)
    })
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log("Descargando pedidos, espere")

        setTimeout(function () {
            resolve("Los pedidos han sido descargados")
        }, 5000)
    })
}

async function app() {
    try {
        // const resultado = await descargarNuevosClientes()
        // console.log(resultado)
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]) //Array de funciones
        console.log(resultado[0])
        console.log(resultado[1])

    } catch (error) {
        console.log(error)
    }
    console.log("APP lista")
}

app()

console.log("Este código no se bloquea")

/*
//Intervalos de 5segndos lo hace 1 vez
setTimeout(function () {
    console.log("Set timeout")
}, 5000)

//Intervalos de 5segndos lo hace continuamente
setInterval(function () {
    console.log("Set interval")
}, 5000)
*/