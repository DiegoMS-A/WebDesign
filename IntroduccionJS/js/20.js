const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo canción ID: ${id}`)
    },
    pausar : function(){
        console.log("Pausando")
    },
    crearPlayList : function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlayList : function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    },
}

//Añadido por fuera de objeto
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion ID: ${id}`)
}

reproductor.borrarCancion(1111)
reproductor.reproducir(3840)
reproductor.pausar()
reproductor.crearPlayList("A todo trap")
reproductor.reproducirPlayList("A todo trap")

