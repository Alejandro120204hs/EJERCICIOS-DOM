const figura = document.getElementById('figure');

function circulo(){
    
    figura.style.borderRadius = "50%";
    
}

function estrella(){

    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, \
                            79% 91%, 50% 70%, 21% 91%, 32% 57%, \
                            2% 35%, 39% 35%)";
}

function gif(){

    figura.style.backgroundImage = "url(../img/programacion.gif)";
}

function animacion(){

    figura.classList.add('animado');
    
}

function arriba(){

    figura.style.transition = "all 1s ease-in-out";
    figura.style.transform = "translateY(-100px)";
}

function abajo(){

    figura.style.transition = "all 1s ease-in-out";
    figura.style.transform = "translateY(100px)";
}

function izquierda(){

    figura.style.transition = "all 1s ease-in-out";
    figura.style.transform = "translateX(-100px)";
}

function derecha(){

    figura.style.transition = "all 1s ease-in-out";
    figura.style.transform = "translateX(100px)";
}

function nTitulo(){

    const nTexto = prompt("Ingrese el nuevo titulo");
    const titulo = document.querySelector('h1');

    titulo.textContent = nTexto;
}

function nParrafo(){

    const nParrafo = prompt("Ingrese el nuevo parrafo");
    const parrafo = document.querySelector('#mainParagraph');

    parrafo.textContent = nParrafo;
}

function aParrafo(){

    const nParrafo = prompt("Ingrese el nuevo parrafo");
    const parrafo = document.createElement('p');
    const ubicacion = document.querySelector('#extraParagraphs')

    parrafo.textContent = nParrafo;
    ubicacion.appendChild(parrafo);
}

function eParrafo(){

    const parrafo = document.querySelector('#extraParagraphs');
    parrafo.remove();

}

function hColor(){

    const color = prompt("Ingrese un color en HEX");

    figura.style.backgroundColor = color
}

function cFigura(){

    const f = prompt("Eliga entre circulo, estrella, cuadrado")

    switch (f) {
        case 'circulo':
            figura.style.borderRadius = '50%';
        break;
    
        case 'estrella':
            figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, \
                                    79% 91%, 50% 70%, 21% 91%, 32% 57%, \
                                    2% 35%, 39% 35%)";
        break;

        case 'cuadrado':
            figura.style.borderRadius = '10px'
        break;
    }
}

function siguiente(){

    const i = document.querySelector('#mainImage');
    let imagenes = ['img/imagen.jpg','img/imagen2.jpg','img/imagen3.jpg']
    let iActual = i.getAttribute('src');
    let siguiente = imagenes[0];

    imagenes.forEach((imagen,index) =>{

        if(iActual===imagen){
            if(index<imagenes.length -1){
                siguiente=imagenes[index + 1];
            }else{
                siguiente = imagenes[0];
            }
        }
    });
    i.setAttribute('src', siguiente);

}

function atras(){

    const i = document.querySelector('#mainImage');
    let imagenes = ['img/imagen.jpg','img/imagen2.jpg','img/imagen3.jpg']
    let iActual = i.getAttribute('src');
    let atras = imagenes[imagenes.length-1];

    imagenes.forEach((imagen,index)=>{
        if(iActual===imagen){
            if(index>0){
                atras=imagenes[index-1];
            }else{
                atras = imagenes[imagenes.length-1];
            }
        }
    });
    i.setAttribute('src', atras)
}

function ocultar(){

    const imagen = document.querySelector("#mainImage");
    imagen.style.display = 'none'
}



document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click',circulo)
    document.getElementById('btnStar').addEventListener('click',estrella)
    document.getElementById('btnGif').addEventListener('click', gif)
    document.getElementById('btnAnim').addEventListener('click', animacion)
    document.getElementById('btnMoveUp').addEventListener('click', arriba)
    document.getElementById('btnMoveDown').addEventListener('click', abajo)
    document.getElementById('btnMoveLeft').addEventListener('click', izquierda)
    document.getElementById('btnMoveRight').addEventListener('click', derecha)
    document.getElementById('btnChangeTitle').addEventListener('click', nTitulo)
    document.getElementById('btnChangeParagraph').addEventListener('click', nParrafo)
    document.getElementById('btnAddParagraph').addEventListener('click', aParrafo)
    document.getElementById('btnRemoveParagraph').addEventListener('click', eParrafo)
    document.getElementById('btnHexColor').addEventListener('click', hColor)
    document.getElementById('btnChooseFigure').addEventListener('click', cFigura)
    document.getElementById('btnChangeImageNext').addEventListener('click', siguiente)
    document.getElementById('btnChangeImagePrev').addEventListener('click', atras)
    document.getElementById('btnToggleImage').addEventListener('click', ocultar)
});