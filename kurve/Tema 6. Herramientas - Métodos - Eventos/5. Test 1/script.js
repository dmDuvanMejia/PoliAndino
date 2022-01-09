$(document).ready(function() {
    $('#btnNotas').click(function(){

        $('#final').text('');

        let nombre = $('#nombre').val();
        let nota1 = $('#nota1').val();
        let nota2 = $('#nota2').val();
        let nota3 = $('#nota3').val();
        let nota4 = $('#nota4').val();

        if (nombre == "") {
            alert('El campo Nombre es requerido');
            return false;
        }
        if (nota1 == "") {
            alert('El campo Primer Nota es requerido');
            return false;
        }
        if (nota2 == "") {
            alert('El campo Segunda Nota es requerido');
            return false;
        }
        if (nota3 == "") {
            alert('El campo Tercer Nota es requerido');
            return false;
        }
        if (nota4 == "") {
            alert('El campo Cuarta Nota es requerido');
            return false;
        }

        let promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;

        $('#final').append('Ganaste ' + nombre + ' tu promedio es ' + promedio);
        if (promedio >= 3) {
            $('#final').append('<br>Felicidades, aprobaste').addClass('gano');
        } else {
            $('#final').append('<br>Lo siento, reprobaste').addClass('perdio');
        }
    });

    
});