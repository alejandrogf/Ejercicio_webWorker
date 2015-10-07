var insular = false;

function hora() {
    var d = new Date();

    var h = (!insular ? d.getHours() : (d.getHours()-1)) + ":" + d.getMinutes() + ":" + d.getSeconds();

    postMessage({ accion: 1, contenido: h });
    setTimeout("hora()", 500);
}

function color() {
    var r = parseInt(Math.random() * 255);
    var g = parseInt(Math.random() * 255);
    var b = parseInt(Math.random() * 255);

    var col = "rgb(" + r + "," + g + "," + b + ")";

    postMessage({ accion: 2, contenido: col  });


}


function zona() {
    //insular = !insular;
    if (insular === true) {
        insular = false;
    } else {
        insular = true;
    }
}

hora();

self.onmessage=function(evento) {
    if (evento.data.accion === 1) {
        zona();
    }
    else if (evento.data.accion === 2) {
        color();
    }
}