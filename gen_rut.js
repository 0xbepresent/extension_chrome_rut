
$(document).ready(function(){
    var num_aleatorio = Math.round(Math.random()*(25000000-5000000))+5000000,
        rut_g = num_aleatorio+'-'+$.Rut.getDigito(num_aleatorio+"");
    copyToClipboard(rut_g);
    $("#rut").html(rut_g);
});

function copyToClipboard(text) {
    window.prompt ("Copiar: Ctrl+C, Enter", text);
}


