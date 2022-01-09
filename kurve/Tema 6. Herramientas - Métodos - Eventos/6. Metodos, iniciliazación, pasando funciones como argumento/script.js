let $ = require('jquery')

var nombre = "";

function Persona(nombre) {
    this.nombre = nombre;
}

var persona1 = new Persona("Duvan Mejia");
console.log(persona1.nombre);