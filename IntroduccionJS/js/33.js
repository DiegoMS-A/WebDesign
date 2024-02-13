//FETCH API

/*function obtenerEmpleados() {

    const archivo = "empleados.json"

    fetch(archivo)
        .then(resultado => {
            return resultado.json()
        })
        .then(datos => {
            //console.log(datos.empleados)

            const {empleados} = datos
            //console.log(empleados)

            empleados.forEach(element => {
                //console.table(element)
                console.log(element.id, element.nombre, element.trabajo )
                
            });
        })
}*/

async function obtenerEmpleados() {

    const archivo = "empleados.json"
    const resultado = await fetch(archivo)
    const datos = await resultado.json()
    console.log(datos)
    
}

obtenerEmpleados();

