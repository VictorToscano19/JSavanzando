console.log("Hola mundo");
/*
Control de flujo y estructura de control

Las estrcuturas de control son un componente fundamental, dentro de la programación
, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y
depurar código, podemos mencionar las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista

 */


/*
                                DECLARACIÓN DE SENTENCIA IF-ELSE
- Palabra reservada "IF" para comenzar declaracion, se coloca un parentesis() donde se debe
colocar una expresión lógica (true or false), se abre y cierran llaves {} para indicar
que sentencia ejecutará sin la condición se cumple (true), después de la llave {} 
declarada para el loque de ejecución if, colocamos la palabra reservada else, para este
ejemplo no es necesario colocar más expresiones de un (), *simplemente colocamos otras llaves
{} para indicar el bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla
(false).
 */

let n = 21;

if (n > 20) {
        console.log(true);
} else {
        console.log(false);
};

/*
                                        if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
 *  */


                                        // IF ANIDADOS
let edad = 51;

if (edad < 15) {
        console.log("No puedes usar tiktok, ponte a leer");
}else if (edad >= 15 && edad < 50) {
        console.log("Estas en edad de ver tiktoks");
} else {
        console.log("Estas old, ve novelas");
};

/*                                      SENTENCIA SWITCH


* La sentencia switch es otro tipo de estructura de control de flujo, que nuevamente 
se encuentra en diversos lenguajes de programación.
        Es bastante parecida a la sentencia "if-else", pero se diferencía en cuanto
        a comportamiento, ya que no se basa en una bifurcación, sino que secciona en
        multiples casos ("case"), dependiendo de la expresión que cumpla con un caso
        específico, será la secuencia que se bifurcará dentro de la declaración.

                                        * Declaracion:
* se empieza por colocalr la palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.
*Falta indicar el bloque de codigo que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro de el parentesis ().
*Cada uno de estos casos se separa de la siguiente manera:
* case valor : instrucción a ejecutar si el valor empata con este caso.
*Despues, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion 
*break. 
*Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
* Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
* default : mensaje no disponible.
*/

let dia = "martes"
switch (dia) {
        case "lunes" :
                console.log("Cuando inicia la semana");
                break;
        case "martes" :
                console.log("Cuando hay promociones");
                 break;
                 case "miercoles" :
                console.log("Cine 2 x 1");
                 break;
                 case "jueves" :
                console.log("Motivate, casi se acaba");
                 break;
                 case "viernes" :
                console.log("De fiesta");
                 break;
                 case "sabado" :
                        console.log("De desayuno");
                         break;
                         case "domingo" :
                                console.log("De resurrección");
                                 break;
}                               // Termina el switch

                                //OPERADOR TERNARIO
/*
 *Expresión condicional if-else más simple y legible
 - Principalmente se usa para simplificar condiciones de una sola expresión
 - También puede anidar sentencias if-else-if, sin embargo, no es recomentdado poque el código se puede volver confuso y poco legible.
  - Su declaración es la siguiente:
  - Palabra reservada var, let o const
  Se le asigna un nombre como sei se tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un paréntesis  () después hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si, se cumple (o no ) la expresión.
  Para separar el resultado true de false debemos agregar un caracter de :, del lado izquiero se coloca la sentencia a ejecutar.
  Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar
*/




                                // Ejemplo de operador ternario
let verificacion = n > 10 ? "Si es mayor" : "No es mayor"
console.log(verificacion);


/*                              CUANDO USAR IF-ELSE O SWITCH
* 
*/


                                //EJERCICIOS JS
        
                //EJERCICIO 1

         let votante = 18;

         if (votante < 18) {
         console.log("No puedes votar");
         }else if (votante >= 18) {
                console.log("Estas listo pa votar");
        };

                //EJERCICIO 2



                // EJERCICIO 3

                

                // EJERCICIO 4
         let pelicula = "drama"
        switch (pelicula) {
                case "accion" :
                 console.log("Mision imposible");
                 break;
           case "drama" :
                  console.log("Cuna de lobos");
                   break;
                  case "comedia" :
                console.log("Scary movie");
                  break;
                 case "romance" :
                        console.log("About time");
                         break;
                         case "suspenso" :
                        console.log("La mascara");
                         break;
                        case "terror" :
                         console.log("Calle elm");
                         break;                
        }

                //EJERCICIO 5
         let opcion = 4;

         if (opcion = 1) {
        console.log("Retirar dinero");
        } if (opcion = 2 ) {
         console.log("Transferencia");
        } if (opcion = 3 ) {
                console.log("Deposito");
        } if (opcion = 4 ) {
                console.log("Pago de servicios");
        }        
        ;

        //EJERCICIO 6

        let mxPesos = "dolar";
        switch (mxPesos) {
                case "dolar" :
                function convertir (x) {
                                                return x * 15;             
                }
                let resultadoMxusa = convertir (3);
                console.log(resultadoMxusa);
                break;
                case "euro" :
                console.log("B");
                break;
                case "yenes" :
                console.log("C");
                break;
                case "libra esterlina" :
                console.log("D");
                break;
                case "franco suizo" :
                console.log("E");
                break;             
        }