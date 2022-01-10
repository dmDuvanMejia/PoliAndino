function sumar() {
    $('#resultado').text('');
    let num1 = $('#numero1').val( );
    let num2 = $('#numero2').val( );

    $('#resultado').append(parseInt(num1) + parseInt(num2));
}

function modifyText() {
    let table2 = $('#table2');
    table2.firstChild.nodeValue = 'Three';
}

function load() {
    let table = $('#table');
    table.addEventListener('click', modifyText, false);
  
}

document.addEventListener('DOMContentLoaded', load, false);

class Producto {
    codigo;
    nombre;
    precio;
    constructor(codigo, nombre, precio = 0) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

function inicializarProductos() {
    let lstProducto = [];
    for(let i = 0; i < 5; i++) {
        let producto = new Producto(i.toString(), 'Leche', 2500);
        lstProducto.push(producto);
    }
}