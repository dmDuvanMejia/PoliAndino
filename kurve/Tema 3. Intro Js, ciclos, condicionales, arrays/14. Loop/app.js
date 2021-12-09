let i = 0; 

//WHILE
while (i < 10 ) {
    i++;
    if ( i == 8 ) 
    //break; //Serviria para terminar 
    continue; //Busca algo y si ya existe lo omite
    document.writeln(i + "<br/>");
}

//DO WHILE
do {
    i++;
    if ( i == 8 ) break;
    document.writeln(i + "<br/>");
} while ( i < 10 );

document.writeln("Termino");

//FOR
let j = 12;
for ( let j = 0; j < 6; j++ ) {
    document.writeln(i + "<br/>");
}

document.writeln(j);
document.writeln("Termino <br/>");


//FOR IN (indice)
var comidas = ["Sancocho", "Frijoles", "Sushi"];
comidas.push("Platanos");
for (const comida in comidas) {
    document.writeln(comidas[comida] + "<br/>");

}

document.writeln("<br/>");
//FOR OF (objeto)
for (const comida of comidas) {
    document.writeln(comida + "<br/>");

}


//Otro ejemplo 
document.writeln("<br/>");

var array1 = ["Lapices", "Lapiceros", "Colores"];
var array2 = ["Cuadernos", "Maleta", array1];

forGrande:
for(arreglo1 in array2) {
    if( arreglo1 == 2 ) {
        for (arreglo2 in array1) {
            if(array1[arreglo2] == "Lapices") break forGrande;
            document.writeln(array1[arreglo2] + "<br/>");
        }
    }
    document.writeln(array2[arreglo1] + "<br/>");
}