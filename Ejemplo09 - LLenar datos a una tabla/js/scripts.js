function llenarTabla(){
    // datos = ["vladimir", "Ascue"];
    // datos = fetch("Http://Servicioweb.com/datitosdeejemplo)

    datos = [
        ["158","vladimir", "Ascue", "Lovon"],
//        ["vladimir", "Ascue"],
        ["321","Carlos", "Alcantara"],
        ["654","Vanessa", "Terques"],
        ["195","Don Quijote", "de la Mancha", "Quispe", "Acuña"]
    ];

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
        for (let j = 1; j < datos[i].length; j++) {
//            document.write("<td>"+(i+1)+"Ojito </td>");
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