var sharebtn = document.getElementById('share');
var cerrar = document.getElementById('cerrar');

if (compartir.style.display = "none") {
    sharebtn.addEventListener('click',mostrar);
}else {
    cerrar.addEventListener('click',ocultar);
}

function mostrar() {
    var compartir = document.getElementById('compartir');
    compartir.style.display = "block";
}
function ocultar() {
    var compartir = document.getElementById('compartir');
    compartir.style.display = null;
}