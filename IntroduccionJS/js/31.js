const boton = document.querySelector("#boton")

boton.addEventListener("click", function () {
    Notification.requestPermission()
        .then(resultado => console.log("Permisos dados", resultado))
})

if (Notification.permission == "granted") {
    new Notification("Esto es una notificacion", {
        icon: 'img/ccj.png',
        body: "Probando las notificaciones"
    })
}


