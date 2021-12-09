let hello ='Hello, ';

console.log(hello.concat('Kevin','.  Have  a  nice  day.'))// Hello, Kevin. Have a nice day.

let greetList =['Hello','   ','Venkat','!'];

"".concat(...greetList)// "Hello Venkat!"
"".concat({})// [object Object]
"".concat([])// ""
"".concat(null)// "null"
"".concat(true)// "true"
"".concat(4,5)// "45"





let comida = [ "Pan", "Leche", "Queso", "Pastas", "Chocolate" ];

comida.push("Arepa");
comida.push("Frijoles");
document.writeln( `Lista de alimentos ${comida}` );
comida.pop();
document.writeln( `Lista de alimentos ${comida}` );


let myData ='Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
document.write( myArray.length );
document.write( myArray[0] ); 
document.write( myArray[1] ); 
document.write( myArray[myArray.length-1] ); 
