/*
for (let i = 0; i < 5; i++) {
    document.writeln(
        "<div className='card' style=width: 18rem; border: 1px solid #ccc;'>"+
            "<div className='card-body'>"+
                "<h5 className='card-title'>Card title</h5>"+
                "<h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>"+
                "<p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card content.</p>"+
                "<a href='#' className='card-link'>Card link</a>"+
                "<a href='#' className='card-link'>Another link</a>"+
            "</div>"+
        "</div>");
}

*/

function mostrar(){
    document.getElementById("activador").innerText = "Ocultar";
    document.getElementById("menu").style.setProperty("transform", "scaleX(1)");
    document.getElementById("menu").style.setProperty("transition", ".3s");
}

function ocultar(){
    document.getElementById("activador").innerText = "Mostrar";
    document.getElementById("menu").style.setProperty("transform", "scaleX(0)");
    document.getElementById("menu").style.setProperty("transition", ".3s");
}

function activar(){
    var texto = document.getElementById("activador").innerText;
    if (texto == "Mostrar"){
        mostrar();
    }else{
        ocultar();
    }
}

function redimensionar(){
    let cab = document.getElementById("Cabecera");

    cab.style.setProperty("width","500px");
}








