                        /*Operador*/            
let numero1 = 100;
let numero2 = 80;

suma = numero1 + numero2;
console.log(suma);

resta = numero1 - numero2;
console.log(resta);

multiplicacion = numero1 * numero2;
console.log(multiplicacion);

division = numero1 / numero2;
console.log(division);

residuo = numero1 % numero2;
console.log(residuo);

incremento = numero1;
incremento ++;
console.log(incremento);

decremento = numero2;
decremento --;
console.log(decremento);

let precioReal = 1000;
let porcentajeDescuento = 20;

/*let cantidadDescuento = (precioReal * .80)
console.log( cantidadDescuento);*/

let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioDescuento = precioReal - cantidadDescuento;

console.log("Precio real:$" + precioReal);
console.log("Porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Cantidad de descuento:$" + cantidadDescuento);
console.log("Precio a pagar:$" + precioDescuento);

                        // Operadores de comparación

        // (==): Igualdad compara si nuestros valores son iguales
let numero3 = 10;
let texto  = "10";

console.log(numero3 == texto);

        // (===): Igualdad estricta compara si nuestros valores son iguales y el tipo de dato

let numero4 = 10;
let texto1  = "10";
        
console.log(numero4 === texto1);

/* 
Desigualdas o distinto este operador verifica si dos valores no son iguales y de ser necesario
realiza la conversión
*/

let precioCaja = 2000;
let precioOferta = 2000;

if (precioCaja != precioOferta) {

console.log("El precio del producto no es igual al precio máximo");
} else {
console.log("El precio del producto es igual al precio maximo permitido");
}

/* 
(!==) Desigualdad estricta, este operador en este caso ambos valores deben tener  verifica si dos valores no son
iguales, pero a diferencia del (!=) en este caso ambos valoresn deben tener
el mismo tipo y valor
*/

let precioCaja1 = 2000;
let precioOferta1 = "2000";

if (precioCaja1 !== precioOferta1) {

console.log("Difieren");
} else {
console.log("Iguales");
}

                //(>) 

let puntuacionFinal = 85;
let puntuacionMaxima = 300;

console.log(puntuacionFinal>puntuacionMaxima);

                //(<)
let anios = 29;
let votar = 30;
console.log(anios<votar);

                //(>=)
let yo = 18;
let bar = 21;
console.log(yo>=bar);

                //(<=)
let she = 21;
let kinder = 7;
console.log(she<=kinder);


                        //EJERCICIOS 

                        //1 Un valor igual o diferente

        let number1 = 3000;
        let number2 = 2000;
                        
        if (number1===number2) {
                        
        console.log("Iguales");
        } else if (number1>number2) {
        console.log("el 1 es más grande");
        }
        else {
        console.log("El 2 es más grande")
        };

                        //2

                let equipo1 = "Atlas";
                let equipo2 = "Atlas";
                        
                if (equipo1 !== equipo2) {
                        
                console.log("Difieren");
                } else {
                console.log("Iguales");
                }

                        //Operadores lógicos

/* (&&) AND se utiliza cuando las condiciones deben cumplirse, 
*/ 

let mayoriaEdad = 18;
let tieneIdentificacion = true;

if (mayoriaEdad >=18 && tieneIdentificacion) {
        console.log("Puedes rentar");
}
else {
        console.log("No lo puedes rentar");
}

                //(||) OR se utiliza cuando alguna de las condiciones debe cumplirse
let resuelve = true;
let altura = false;

if (resuelve || altura) {
        console.log("Pueden salir");
} else {
        console.log("No le hables");
};

                //(!) NOT se utiliza para negar el valor de una condicion
               
let esKeto = true;

if (!esKeto) {
        console.log("No se come");
} else {
        console.log("Se come");
}

                //Operadores de cadena

//toLowerCase

let mensaje = "HOLA BUENAS NOCHES"
let cambioMinusculas = mensaje.toLowerCase();

console.log(cambioMinusculas);

//toUpperCase

let mensaje1 = "hola buenas tardes"
let cambioMayusculas = mensaje.toUpperCase();

console.log(cambioMayusculas);


//trim (elimina espacios)

let aviso ="    HAY            ESPACIO          "
let sinEspacio = aviso.trim ();

console.log(sinEspacio);



//toString convierte un tipo de dato number a string

let numero500 = 500;
let cadenas = numero500.toString();

console.log(cadenas);


//concat

let nombre = "Victorio";
let apellido = "Dragone";
let nombreCompleto = nombre.concat (" ",apellido)

console.log(nombreCompleto);

/* Expresiones

Expresión aritmética
let operación = 14 + 25 * 12; combina la suma con la multiplicación

Expresión de cadena
let notificación = "Casi," + "Año Nuevo"; expresión concatedano

Expresiól lógica
let es MayorEdad = (23 > 18) && (23 < 65);

Expresión de asignación
let frasco = chocolates; asigna el valor a la variable

*/