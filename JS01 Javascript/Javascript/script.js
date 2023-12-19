// comentarios en una sola linea

/*Comentarios
mulitinea*/


//alert ("Hola mundo");


//console.log("Este es un mensaje de prueba")


//var nombre = prompt("Ingresa tu nombre")
//alert("Hola, " + nombre + " Bienvenido a la CH35 ");


//var numero1 = parseInt (prompt("Ingresa el primer numero:"));
//var numero2 = parseInt (prompt("Ingresa el segundo numero:"));

//console.log("suma:" + (numero1 + numero2));
//console.log("resta:" + (numero1 - numero2));
//console.log("multiplicacion:" + (numero1 * numero2));
//console.log("division:" + (numero1 / numero2));

//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un  global
let tiene un  local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

/* Todas nuestras variables deben ser declaras con nombres específicos y claros,
 sin espacios, no inician con números*/

let nombre = "Daniel";
let edad = 22;
let esMayorEdad = true;
let invitadosExtra = 100;
let invitadoEspecial = null;
let horaDeSalida = undefined;

console.log("nombre");

//document.write(nombre);

/*Encasillamiento o tipado, útil para el mantenimiento del código,
lo vuelve más legible, previene errores de programación*/


/*let numero = 15;
let texto = "Holabebe";

//con encasilamiento

let numeroEncasillado = Number = 12;
let textoEncasillado = String = "hola";

//type of es una palabra reservada para saber que tipo de datos tenemos

console.log(typeof(nombre))


        /*CONVERSION DE STRING A NUMBER

let funcionNumber = console.log (typeof Number (nombre));
metodoParseInt = console.log (typeof parseInt (nombre));
metodoParseFloat = console.log (typeof parseFloat (nombre));

ParseInt y ParseFloat son funciones que se utilizan para convertir cadenas
de texto en números */

var numero1 = "4";
var numero2 = "5";

console.log("Tipo de variable numero1: "+typeof(numero1));
/*
typeof solo devuelve el tipo de variable que estas utilizando
*/
console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));
/*
Number: tranforma tu variable a una variable numerica
parseInt: tranforma tu variable a un tipo de variable entera
en el ejmplo lo utilizamod para sumas dos variables tipo string
*/
console.log(numero1+numero2);
console.log(parseInt(numero1)+parseInt(numero2));
console.log(Number(numero1)+Number(numero2));

                    /* CONVERSIÓN DE NUMBER A STRING */

//console.log (typeof String (edad));
//console.log (typeof edad.toString());

                    /* BULEANO A NÚMERO */

let numero = Number (esMayorEdad);

console.log (numero);

                    /* BULEANO A STRING */

let texto = String (esMayorEdad);

console.log (texto);
console.log (typeof esMayorEdad.toString());

                    /* BULEANO A STRING */

let negacion = !esMayorEdad;

console.log (negacion);

           /* CONCANTENEAR = UNIR CADENAS DE TEXTO/STRINGS */

let saludo = "Hola amigo ";
let frase = "que pizza te gusta?";

texto = saludo + frase;

document.write (texto);

console.log (texto);

/*
Tipos de datos
> - String (Cadenas de texto)
> - Number (numericos)
> - Booleans (booleanos; true or false)
> - Null (nulos)
> - Undefined (Indefinidos)
> - Objects (Objects)
> - Objects (Arrays)

/*
console.log(); Nos permite visualizar en consola del navegador el codigo de js.
console.warn(); Muestra un mensaje de advertencia
console.error(); Muestra un mensaje de error
console.table();
*/


let firstName;
firstName="daniel";
let lastName="Maldonado";

console.log(firstName+" "+lastName);
console.log("Mi nombre es "+firstName+" y mi apellido es "+lastName);


/*
ECMAScript 6 (ES6). Interpolacion de cadenas
> - backticks ``
> - Para variables ${}
> - Texto para string
*/

let age = 37;
//sin salto de linea
console.log(`Mi nombre es ${firstName}, 
y mi apellido es ${lastName} y tengo ${age} años`);
//con salto de linea
console.log(`Mi nombre es ${firstName}
mi apellido es ${lastName},
y tengo ${age} años`);


console.warn(`SALUDOS`);
console.error(`SALUDOS DOS`);

//TEXTO


let arreglo1 = []; //Array vacio
console.log(`Array vacio ${arreglo1}`);
//Los elementos de un array, se separan mediante comas
let arreglo2 = []

//Array de numbers
let salariesMx = [15000, 12000, 18000, 25000, 1, 28000, 1000000, 
100000000, 7805000, 777999, 35264716, 123456789000];
console.log (salariesMx.length);//Output:12
console.log(salariesMx);

/* 
Objetos. Son tipos de datos en js con una estrcutura definida que nos permite almacenar
información mediante llaves o claves y valores.

                SINTAXIS:
                const object = {
                        clave1: valor1 (dato1),
                        clave2: valor2 (dato2),
                Pueden almacenar distintos tipos de valores.
                }
*/

