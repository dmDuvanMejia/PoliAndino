function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event) {
    if( !event.target.matches('.dropbtn') ){
        let dropdowns = document.getElementsByClassName('dropdown-content');
        for (let index = 0; index < dropdowns.length; index++) {
            const element = dropdowns[index];
            if ( element.classList.contains('show') ) {
                element.classList.remove('show');
            }      
        }
    }
}

function validateForm() {
    let nom1 = document.forms['myForm']['nombre'].value;
    let nom2 = document.forms['myForm']['nombre2'].value;

    if( nom1 == '' ) {
        alert('El campo Primer Nombre es requerido');
        return false;
    }
    if( nom2 == '' ) {
        alert('El campo Segundo Nombre es requerido');
        return false;
    }
}

function clean() {
    document.getElementById('myForm').reset();
}

$(document).ready(function() {
    $('#btnAlert').click(function(){
        alert('Esto  es un ejemplo de Jquery');
    });

    $('#btnOcultar').click(function(){
        $('#validaciones').hide();
    });

    $('#btnMostrar').click(function(){
        $('#validaciones').show();
    });

    $('#btnEstilo').click(function(){
        $('#flEstyle').addClass('style-fieldset');
    });

    $('#btnQuitarEstilo').click(function(){
        $('#flEstyle').removeClass('style-fieldset');
    });

    $('#btnAppend').click(function(){
        $('#parrafo1').append(' Agregado');
    });

    $('#btnPreappend').click(function(){
        $('#parrafo2').prepend(' Agregado.');
    });

    $('#btnRemove').click(function(){
        $('#contenedor2').addClass('style-div');
        $('#contenedor2').remove();
    });

    $('#btnEmpty').click(function(){
        $('#contenedor3').empty();
        $('#contenedor3').addClass('style-div');
    });
});

