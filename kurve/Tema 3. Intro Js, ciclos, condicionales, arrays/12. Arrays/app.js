let frutas = ["pera", "manzana", "banano"]; 

// alert(frutas);
// alert(frutas[0]);

let computador = ["Intel Core i7", "DD 200 GB", "RAM 2 GB", "Monitor 19'"];
computador.push("Fuente de poder ATX"); //Agregar otro elemento al arreglo
document.writeln(computador.length); //Cuantos elementos tiene

// alert(computador[0]);

let pc = {
    procesador: "Intel Core i7",
    discoDuro: "DD 200 GB",
    memoriaRam: "RAM 2 GB",
    monitor: "Monitor 19'"
}

// alert(pc.procesador);

//-------------------------------------------------------------------------------
// Trabajar con Arrays

let cantidadDeEquipos = parseInt( prompt("Cuantos equipos participan del torneo"));
let equipos = [];
for(i = 0; i < cantidadDeEquipos; i++) {
    //Posicion 0 Nombre equipo, 1 Puntos, 2 PG, 3 PP
    equipos[i] = [prompt("Nombre del Equipo"), 0,0,0];

}

const solicitarMarcador = ( posicion ) => {
    let marcador = prompt(equipos[posicion][0] + "G: Gano, E: Empato, Any: Perdio");
    if( marcador.toUpperCase() == "G" ){
        equipos[posicion][1] = equipos[posicion][1] + 2;
        equipos[posicion][2] = equipos[posicion][2] + 1;
    } else if( marcador.toUpperCase() == "E" ){
        equipos[posicion][1] = equipos[posicion][1] + 1;
    } else {
        equipos[posicion][2] = equipos[posicion][3] + 1;
    }
}

//5 Fechas entonces la I llega hasta 5
for(i = 0; i < 5; i++) {
    for(equipo in equipos){
        solicitarMarcador(equipo);
    }
}

for(equipo in equipos){
    let definicion = `<strong> ${equipos[equipo][0]}: </strong> <br>
                    Puntos: ${equipos[equipo][1]} <br>
                    Partidos Ganados: ${equipos[equipo][2]} <br>
                    Partidos Perdidos: ${equipos[equipo][3]} <br>
                    `;
    document.writeln(definicion);
    if(equipos[equipo][1] >= 8 ) {
        document.writeln( `<b style="color: red"> CLASIFICADO A SIGUIENTE RONDA ${equipos[equipo][0]} </b> <br>` )
    }

}