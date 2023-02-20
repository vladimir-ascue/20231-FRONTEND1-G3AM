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

function mostrar() {
    document.getElementById("activador").innerText = "Ocultar";
    document.getElementById("menu").style.setProperty("transform", "scaleX(1)");
    document.getElementById("menu").style.setProperty("transition", ".3s");
}

function ocultar() {
    document.getElementById("activador").innerText = "Mostrar";
    document.getElementById("menu").style.setProperty("transform", "scaleX(0)");
    document.getElementById("menu").style.setProperty("transition", ".3s");
}

function activar() {
    var texto = document.getElementById("activador").innerText;
    if (texto == "Mostrar") {
        mostrar();
    } else {
        ocultar();
    }
}

function redimensionar(ef) {
    // capturo el elemento
    // cuadro.style.setProperty("width","100px");
    // tomo una propiedad
    // let w = cuadro.style.getPropertyValue("width");

    if (ef == "RH") {
        let cuadro = document.getElementById("cuadro1");
        if (cuadro.style.getPropertyValue("width") == "50px") {
            cuadro.style.setProperty("width", "100px");
        } else {
            cuadro.style.setProperty("width", "50px");
        }
    } else {
        if (ef == "RV") {
            let cuadro = document.getElementById("cuadro2");
            if (cuadro.style.getPropertyValue("height") == "50px") {
                cuadro.style.setProperty("height", "100px");
            } else {
                cuadro.style.setProperty("height", "50px");
            }
        } else {
            if (ef == "TH") {
                let cuadro = document.getElementById("cuadro3");
                //get pos = cuadro.getBoundingClientRect();
                if (cuadro.style.getPropertyValue("transform") == "translateX(0px)") {
                    cuadro.style.setProperty("transform", "translateX(150px)");
                } else {
                    cuadro.style.setProperty("transform", "translateX(0px)");
                }
            } else {
                if (ef == "TV") {
                    let cuadro = document.getElementById("cuadro4");
                    //get pos = cuadro.getBoundingClientRect();
                    if (cuadro.style.getPropertyValue("transform") == "translateY(0px)") {
                        cuadro.style.setProperty("transform", "translateY(30px)");
                    } else {
                        cuadro.style.setProperty("transform", "translateY(0px)");
                    }
                } else {
                    if (ef == "EHV") {
                        let cuadro = document.getElementById("cuadro5");
                        let pos = cuadro.getBoundingClientRect();
                        console.log("right: " + pos.right);
                        console.log("left: " + pos.left);
                        console.log("top: " + pos.top);
                        console.log("bottom: " + pos.bottom);
                        console.log("height: " + pos.height);
                        console.log("widht: " + pos.width);
                        if (cuadro.style.getPropertyValue("transform") == "scale(1)") {
                            cuadro.style.setProperty("transform", "scale(2)");
                        } else {
                            cuadro.style.setProperty("transform", "scale(1)");
                        }
                    } else {

                    }
                }
            }
        }
    }
}