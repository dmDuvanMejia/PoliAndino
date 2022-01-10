let $ = require('jquery')

var nombre = "";

function Persona(nombre) {
    this.nombre = nombre;
}

var persona1 = new Persona("Duvan Mejia");
console.log(persona1.nombre);

function mostrarNombre( callback ) {
    let nombre = "Duvan Mejia";
    callback(nombre);
}

function saludar( nombre ) {
    console.log("Hola " + nombre);
}

mostrarNombre( saludar );

var seconds = 20;
function startCount() {
    setInterval(function() {
        seconds--;
        showSeconds();
    }, 1000);
}

function showSeconds() {
    console.log( seconds );
}

startCount();