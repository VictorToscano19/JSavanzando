/* 
Funciones

*/

            //FUNCION QUE SALUDA

function saludar() {
    console.log("Hola desde una funcion");
}
saludar ();

//Funciones que retornan algo
/*Para que una función retorne algo (string, operation,
     variable, etc nececitamos indicarle al código de la
      función que vamos a retorar mediante la palabara
       reversa "RETURN")*/
function greeting (){
    return "Hola desde una función que retorna";
}
console.log (greeting());



        //Funcion que retorna y recibe parametros
function sumar (x, y){
                        return x + y;
}
let resultado = sumar(4, 8)
console.log(resultado);



//Calcular el cuadrado de un número
function calCuadrado (numero){
                        return numero * numero;
}
let resultCuadrado = calCuadrado (5);
console.log(resultCuadrado);


        // FUNCIÓNES ARROW



        // FUNCIONES ANONIMAS 


        /*Callbacks. Es pasar una función B por parámetro a una 
        función A, de modo que la función A pueda ejecutar esa 
        función de forma genérica desde su código.*/
const functionB = function() {
    console.log("Ejecutando función B");
}

const functionA = function(callback) {
    callback();
}
functionA(functionB);