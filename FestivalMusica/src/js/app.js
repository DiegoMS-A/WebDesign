document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <picture>
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg"
                alt="Imagen Galeria">
        </picture>        
        `;

        imagen.onclick =  function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <picture>
            <source srcset="build/img/grande/${id}.avif" type="image/avif">
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg"
                alt="Imagen Galeria">
        </picture>        
        `;

    //CREA OVERLAY CON IMAGEN
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        const body = document.querySelector('body');    
        body.classList.remove('fijarBody');
        overlay.remove();
    }

    //BOTON CERRAR MODAL
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');    
        body.classList.remove('fijarBody');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);


    //AÑADE AL HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijarBody');
}