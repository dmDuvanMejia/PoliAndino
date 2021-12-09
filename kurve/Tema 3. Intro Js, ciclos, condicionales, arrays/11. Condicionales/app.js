var numero1, numero2;

numero1 = parseInt( prompt("ingrese el numero 1") );
numero2 = parseInt( prompt("ingrese el numero 2") );

if ( numero1 == numero2 ) {
    document.writeln("Los numeros son iguales");
} else if ( numero1 < numero2 ) {
    document.writeln("El numero 1 es menor a numero 2");
} else {
    document.writeln("El numero 2 es menor a numero 1");
}

switch ( new Date().getDay() ) {
    case 0: 
        day = "Domingo";
        break;
    case 1:
        day = "Lunes";
        break;
    case 2:
        day = "Martes";
        break;
    case 3:
        day = "Miercoles";
        break; 
    case 4:
        day = "Jueves";
        break;
    case 5:
        day = "Viernes";
        break;
    case 6:
        day = "Sabado";
        break;
    case 7:
        day = "Domingo";
        break;
}

alert(day);
