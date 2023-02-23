function llenarTabla(){
    // datos = ["vladimir", "Ascue"];
    // datos = fetch("Http://Servicioweb.com/datitosdeejemplo)

    datos = [
        ["158","vladimir", "Ascue Lovon", "vladimir.ascue@gmail.com"],
//        ["vladimir", "Ascue"],
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

    let numFilas = datos.length; // 3
    let numColumnas = datos[0].length; //

/*    for (let i = 0; i < numFilas; i++) {
        document.write(
            "<tr>" +
            "<td>"+(i+1)+"</td>" +
            "<td>"+datos[i][0]+"</td>" +
            "<td>"+datos[i][1]+"</td>" +
            "</tr>")
    }*/

    for (let i = 0; i < numFilas; i++) {
//        document.write("<tr class='dato'>") >> Cuando varios elementos usan el mismo Selector
        document.write("<tr id='"+datos[i][0]+"'>")
        document.write("<td>"+(i+1)+"</td>");
        for (let j = 1; j < 6; j++) {
//            document.write("<td>"+(i+1)+"Ojito </td>");
            if(datos[i][j]==undefined)
                document.write("<td></td>");
            else
                document.write("<td>"+datos[i][j]+"</td>");
        }
        document.write("<td>" +
            "<button>Detalle</button>" +
            "<button>Editar</button>" +
            "<button>Eliminar</button>" +
            "</td>");
        document.write("</tr>")
    }
}

llenarTabla();

const tabla = document.querySelector("#tablaDatos");
tabla.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        const fila = event.target.parentElement;
        const nombre = fila.cells[1].textContent;
        const apellidos = fila.cells[2].textContent;
        const email = fila.cells[3].textContent;
        document.querySelector("#nombre").value = nombre;
        document.querySelector("#apellidos").value = apellidos;
        document.querySelector("#email").value = email;
    }
});