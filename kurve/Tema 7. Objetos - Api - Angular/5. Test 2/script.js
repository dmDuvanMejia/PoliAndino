class Client {
    cedula;
    nombre;
    edad;
    salario;

    constructor(cedula, nombre, edad, salario) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
    }   


}

window.onload = functionaddEventListener('load', load, false);

function llenarLista() {
    let lst = [];
    for (let i = 0; i < 10; i++) {
        let client = new Client("1234" + i, "Cliente " + i, 20 + (i + 2), 80000 * 1000);
        
        let row = "<tr> <td>" + client.cedula + "</td> <td>" + client.nombre + "</td> <td>" 
            + client.edad + "</td> <td>" + client.salario + "</td> </tr>";
            $("#tblClientes").append(row);
        lst.push(client);
    }
}

function load() {
    llenarLista();
}
