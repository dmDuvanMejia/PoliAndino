function sumar() {
    $('#resultado').text('');
    let num1 = $('#numero1').val( );
    let num2 = $('#numero2').val( );

    $('#resultado').append(parseInt(num1) + parseInt(num2));
}

function modifyText() {
    var table2 = document.createElement('table2');//$('#table2');
    table2.firstChild.nodeValue = 'Three';
}

function load() {
    var table = document.getElementById('table'); // $('#table');
    table.addEventListener('click', modifyText, false);
  
}

document.addEventListener('DOMContentLoaded', load, false);