var worker = undefined;

function crearWorker() {
    worker = new Worker("wwReloj.js");
    worker.onmessage=function(evento) {
        var capa = document.getElementById("reloj");
        if (evento.data.accion === 1) {
            capa.innerHTML = evento.data.contenido;
        }
        else if (evento.data.accion === 2) {
            capa.style.color = evento.data.contenido;

        }
    }
}

function cambiarColor() {
    var data = { accion: 2 };
    worker.postMessage(data);
}

function cambiarZona() {
    var data = { accion: 1 };
    worker.postMessage(data);
}

crearWorker();

document.getElementById("btnHora").addEventListener("click", cambiarZona);
document.getElementById("btnColor").addEventListener("click", cambiarColor);