const navToggle= document.querySelector (".nav-toggle");
const navMenu= document.querySelector (".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");


    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute ("aria-label", "Cerrar menú");
    } else{
        navToggle.setAttribute ("aria-label", "Abrir menú");
    }
});

    function mostrar(){
    document.getElementById("img").style.display="block";
}

function ocultar(){
    document.getElementById("img").style.display="none";
}

var boton = document.getElementById("download");
var contador = 5;
var etiqueta = document.createElement ("p");

 a.innerHTML= "<b> 5 segundos para descargar.</b>";
var id;

boton.parentNode.removeChild(etiqueta, boton);

function descarga(){
    this.style.display = "none";
    id= window.setInterval(function(){
        contador--;
        if (contador < 0){
            etiqueta.parentNode.replaceChild (boton, etiqeuta);
            window.clearInterval(id);
        }
        else{
            etiqueta.innerHTML = + contador.toString () + "<b> segundos para descargar. </b>";
        }
    }, 1000)
}

var clickbtn = document.getElementById ("btn");
clickbtn.onclick = descarga;
