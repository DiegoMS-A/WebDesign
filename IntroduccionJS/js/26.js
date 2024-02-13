//THIS (hace referencia al objeto)

const reserva = {
    nombre : "Diego",
    apellido : "Martinez",
    total : 5000,
    pagado : false,
    informacion : function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`)
    }
}

const reserva2 = {
    nombre : "Paco",
    apellido : "Porras",
    total : 5000,
    pagado : false,
    informacion : function() {
        console.log(`El cliente ${reserva2.nombre} reservó y su cantidad a pagar es ${reserva2.total}`)
    }
}

reserva.informacion()
reserva2.informacion()