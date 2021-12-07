//Variables

//palabra reservada NOMBRE = lo que voy a guardar
//Palabra reservadas son var let y const


//var cedula = 123456789

//Tipos de datos 
//Simples: numeros, texto y de verdad
//num string, bool
//Complejos: listas, resumen
//array, objects

//Sintaxis ANTIGUA
var nombre = "Duvan Mejia";
var edad = 26;
console.log(nombre)
console.log(edad)

//Sintaxis Moderna
//Declarar la variable let y const
let nombre1 = "Jesus";
let edad1 = 33;
console.log(nombre1);
console.log(edad1);

//Reasignación
nombre1 = "Emanuell";
console.log(nombre1);

edad1 = "33 años";
console.log(edad1);

//const (es inmutable), no se puede cambiar
const iva = 19;
console.log(iva);

const PI = 3.141598;
console.log(PI);



//FORMAS DE NOMBRAR VARIABLES
//Javascript es CASE SENSITIVE (Sensible a mayúscula y minuscula)
//formas de nombrar variables
//camelCase
let nombreCompleto;
let valorNeto;

//PascalCase
let NombreCompleto;
let ValorNeto;

//snake_case
let nombre_completo;
let valor_neto;

//STRING, NUMBER, METODOS
const textoA = "Soy un texto en Javascript";
console.log(textoA);
const textoB = "Yo tambien soy un texto en Javascript";
console.log(textoB);
const textoC = new String("Otro texto");
console.log(textoC);

//METODOS DE STRINGS
//Saber la longitud de un texto en Javascript

console.log( textoA.length )
console.log( textoB.length )
console.log( textoC.length )

const textoD = '"Asi uso las comillas dobles dentro del texto"';
console.log( textoD.length )

const textoF = "Cuantos caracteres hay en esta frase";
console.log( textoF.length );

//Saber si dentro de un string hay otro string (indexOf)

const textoG = "Hola mi nombre es Duvan";
console.log( textoG.indexOf("Duvan") );
console.log( textoG.indexOf("Mejia") );


//TALLERCITO DONDE:
//Crear una variable let con su nombre
//Reasignar esa variable con su segundo nombre
//Crear una constante de la velocidad del sonido 300
//Crear una variable con un texto largo cualquiera
//Con esa frase... Encontrar cuantos caracteres tiene y encontrar una palabra especifica

let miNombre = "Duvan";
miNombre = "Mejia";
const velocidad = 300;
const textoP = "Este es el texto de prueba con Javascript"
console.log( textoP.length );
console.log( textoP.indexOf("texto") );

//Concatenar textos (unir)

const miEdad = 26;
const miNombre1 = "Duvan";
let textoUnido = "Hola mi nombre es " + miNombre1 + " y tengo " + miEdad + " años";
console.log(textoUnido);

//Otra forma es con concat
console.log( miNombre.concat(miEdad));

//La forma moderna se llama TEMPLATE STRINGS 
//TEMPLATE LITERALS (BACKTICK) se puede llamar con ALT y 96
console.log( `Hola mi nombre es ${miNombre} y tengo ${miEdad} años` );

/***TALLER  DE TEMPLATE STRINGS */

//Crear una variable con su nombre, otra con apellido, edad y su barrio
//Crear un template string e imprimirlo con console.log que diga
//Mi nombre es "NOMBRE" "APELLIDO", tengo "EDAD" años y vivo en el barrio "BARRIO"

const miApellido = "Mejia";
const barrio = "Belen";
console.log(`Mi nombre es ${miNombre1} ${miApellido}, tengo ${miEdad} años y vivo en el barrio ${barrio}`);

//Como reemplazar partes de un string por Otro
const miNombre2 = "Duvan Rene";
console.log(miNombre2);

//Replace
console.log(miNombre2.replace("Rene", ""));

//Generar un string cualquiera donde reemplaze una palabra por otra
//Ej: "BARRANQUILLA" POR MEDELLIN
let textoCiudad = "Yo vivo en BARRANQUILLA, una ciudad muy bonita"
console.log(textoCiudad.replace("BARRANQUILLA", "MEDELLIN"));

//SLICE
console.log(miNombre2.slice(0, 5));
console.log(miNombre2.slice(6, miNombre2.length));

//Substring
console.log(miNombre2.substring(0, 5));
console.log(miNombre2.substring(6, miNombre2.length));

//Como extraer caracteres individuales
//charAt
console.log(miNombre2.charAt(0));
console.log(miApellido.charAt(1));

console.log(`Hola ${miNombre2.charAt(0)}${miApellido.charAt(0)}`);

//Crear un template donde diga:
//Vivo en el departamento "DPTO" y en el municipio de "MPIO" 
//Ej: Vivo en el departamento de Ant y en el municipio de Bel

const departamento = "Antioquia";
const municipio = "Medellin";

console.log(`Vivo en el departamento de ${departamento.substring(0,3)} y en el municipio de ${municipio.substring(0,3)}
`)