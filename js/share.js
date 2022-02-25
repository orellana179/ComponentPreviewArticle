var sharebtn = document.getElementById('share');
var cerrar = document.getElementById('cerrar');

    sharebtn.addEventListener('click',mostrar);

    cerrar.addEventListener('click',ocultar);

function mostrar() {
    var compartir = document.getElementById('compartir');
    compartir.classList.add('active');
}
function ocultar() {
    var compartir = document.getElementById('compartir');
    compartir.classList.remove('active');
}