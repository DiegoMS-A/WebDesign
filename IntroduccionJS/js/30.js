//PROMISES (resolve = cuando se cumple, reject cuando no se cumple)

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false

    if (auth) {
        resolve("Usuario autenticado")
    } else {
        reject("No se pudo iniciar sesion")
    }
})

usuarioAutenticado.then(function (resultado) {
    console.log(resultado) //muestra resolve con THEN
})
.catch(function(error){
    console.log(error) //muestra reject com CATCH
})

//EN los PROMISES existen 3 valores
//PENDING --> NO SE HA CUMPLIDO PERO NO SE HA RECHAZADO
//FULFILLED --> CUMPLIDO
//REJECT--> RECHAZADO