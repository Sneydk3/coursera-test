var ruta = window.location;
document.write("Estas en: "+ ruta);

var teclas = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};
documentaddEventListener("keydown",metodo);
function metodo(evento){
    if(evento.keyCode == tecla.DOWN){
        document.body.appendChild("<p>Aca estoy!!!!!!!</p>");
    }
}