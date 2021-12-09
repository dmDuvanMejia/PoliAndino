// 3 jovenes quieren comprar unos audifonos, no saben los precios. PEro quieren comprar los mas caros, con el dinero que tienen
//Emanuel tiene 1500 
//Sofia tiene 1700 
//Rochi 3000 
//Los precios son los siguientes:
//Bose 600
//Sennheiser 1000
//Sony 1600 
//Beat 1700 
//Panasonic 1800 
//Apple 2900 
//Samsung 2900 
//Condicion si hay 2 con el mismo precio tenemos que mostrarlo, necesitamos mostrar la devuelta

let dineroEmmanuel = parseInt(prompt("Inserte dinero que tiene Emmanuel"));
let dineroSofia = parseInt(prompt("Inserte dinero que tiene Sofia"));
let dineroRochi = parseInt(prompt("Inserte dinero que tiene Rochi"));

if( dineroEmmanuel >= 600 && dineroEmmanuel < 100 ) {
    document.writeln("Emmanuel puede comprarse los Bose");
    document.writeln( `La devuelta es ${dineroEmmanuel - 600}`);
} else if( dineroEmmanuel >= 1000 && dineroEmmanuel < 1600 ) {
    document.writeln("Emmanuel puede comprarse los Sennheiser");
    document.writeln( `La devuelta es ${dineroEmmanuel - 1000}`);
} else if( dineroEmmanuel >= 1600 && dineroEmmanuel < 1700 ) {
    document.writeln("Emmanuel puede comprarse los Sony");
    document.writeln( `La devuelta es ${dineroEmmanuel - 1600}`);
} else if( dineroEmmanuel >= 1700 && dineroEmmanuel < 1800 ) {
    document.writeln("Emmanuel puede comprarse los Beat");
    document.writeln( `La devuelta es ${dineroEmmanuel - 1700}`);
} else if( dineroEmmanuel >= 1800 && dineroEmmanuel < 2900 ) {
    document.writeln("Emmanuel puede comprarse los Panasonic");
    document.writeln( `La devuelta es ${dineroEmmanuel - 1800}`);
} else if( dineroEmmanuel >= 2900 ) {
    document.writeln("Emmanuel puede comprarse los Apple o los Samsung");
    document.writeln( `La devuelta es ${dineroEmmanuel - 2900}`);
} else {
    document.writeln("Estás muy pobre, aprende programación")
}

//Sofia
if( dineroSofia >= 600 && dineroSofia < 100 ) {
    document.writeln("Sofia puede comprarse los Bose");
    document.writeln( `La devuelta es ${dineroSofia - 600}`);
} else if( dineroSofia >= 1000 && dineroSofia < 1600 ) {
    document.writeln("Sofia puede comprarse los Sennheiser");
    document.writeln( `La devuelta es ${dineroSofia - 1000}`);
} else if( dineroSofia >= 1600 && dineroSofia < 1700 ) {
    document.writeln("Sofia puede comprarse los Sony");
    document.writeln( `La devuelta es ${dineroSofia - 1600}`);
} else if( dineroSofia >= 1700 && dineroSofia < 1800 ) {
    document.writeln("Sofia puede comprarse los Beat");
    document.writeln( `La devuelta es ${dineroSofia - 1700}`);
} else if( dineroSofia >= 1800 && dineroSofia < 2900 ) {
    document.writeln("Sofia puede comprarse los Panasonic");
    document.writeln( `La devuelta es ${dineroSofia - 1800}`);
} else if( dineroSofia >= 2900 ) {
    document.writeln("Sofia puede comprarse los Apple o los Samsung");
    document.writeln( `La devuelta es ${dineroSofia - 2900}`);
} else {
    document.writeln("Estás muy pobre, aprende programación")
}


//Rochi
if( dineroRochi >= 600 && dineroRochi < 100 ) {
    document.writeln("Rochi puede comprarse los Bose");
    document.writeln( `La devuelta es ${dineroRochi - 600}`);
} else if( dineroRochi >= 1000 && dineroRochi < 1600 ) {
    document.writeln("Rochi puede comprarse los Sennheiser");
    document.writeln( `La devuelta es ${dineroRochi - 1000}`);
} else if( dineroRochi >= 1600 && dineroRochi < 1700 ) {
    document.writeln("Rochi puede comprarse los Sony");
    document.writeln( `La devuelta es ${dineroRochi - 1600}`);
} else if( dineroRochi >= 1700 && dineroRochi < 1800 ) {
    document.writeln("Rochi puede comprarse los Beat");
    document.writeln( `La devuelta es ${dineroRochi - 1700}`);
} else if( dineroRochi >= 1800 && dineroRochi < 2900 ) {
    document.writeln("Rochi puede comprarse los Panasonic");
    document.writeln( `La devuelta es ${dineroRochi - 1800}`);
} else if( dineroRochi >= 2900 ) {
    document.writeln("Rochi puede comprarse los Apple o los Samsung");
    document.writeln( `La devuelta es ${dineroRochi - 2900}`);
} else {
    document.writeln("Estás muy pobre, aprende programación")
}