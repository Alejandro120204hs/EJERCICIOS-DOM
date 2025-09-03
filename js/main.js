const figura = document.getElementById('figure');

function circulo(){
    

    figura.style.borderRadius = "50%";
    
}

function estrella(){

    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, \
                            79% 91%, 50% 70%, 21% 91%, 32% 57%, \
                            2% 35%, 39% 35%)"
}

function gif(){

    figura.style.backgroundImage = "url(../img/programacion.gif)"
}


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click',circulo)
    document.getElementById('btnStar').addEventListener('click',estrella)
    document.getElementById('btnGif').addEventListener('click', gif)
});