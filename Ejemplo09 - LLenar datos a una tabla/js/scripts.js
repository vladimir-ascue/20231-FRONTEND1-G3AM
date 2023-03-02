function llenarTabla(){
    datos = [
        ["158","vladimir", "Ascue Lovon", "vladimir.ascue@gmail.com"],
        ["321","Carlos", "Alcantara"],
        ["654","Vanessa", "Terques"],
        ["195","Don Quijote", "de la Mancha", "dquijote@mail.com", "Acuña"],
        ["64","Mario", "Calderon", "mc@gmail.ocm", "Pachecho", "Julian"]
    ];

    let tamanioMayor = 0;

    for (let i = 0; i < datos.length; i++) {
        let tamanoActual = datos[i].length;
        if (tamanoActual > tamanioMayor) {
            tamanoMayor = tamanoActual;
        }
    }

    let numFilas = datos.length;
//    let numColumnas = datos[0].length;

    for (let i = 0; i < numFilas; i++) {
        document.write("<tr id='"+datos[i][0]+"'>")
        document.write("<td>"+(i+1)+"</td>");
        for (let j = 1; j < 6; j++) {
            if(datos[i][j]==undefined)
                document.write("<td></td>");
            else
                document.write("<td>"+datos[i][j]+"</td>");
        }
    }
}

llenarTabla();

// create.element

const tabla = document.querySelector("#tablaDatos");
tabla.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        const fila = event.target.parentElement;
        const nombre = fila.cells[1].textContent;
        const apellidos = fila.cells[2].textContent;
        const email = fila.cells[3].textContent;

        fila.cells[3].textContent = "Pepe";

        document.querySelector("#nombre").value = nombre;
        document.querySelector("#apellidos").value = apellidos;
        document.querySelector("#email").value = email;
    }
});