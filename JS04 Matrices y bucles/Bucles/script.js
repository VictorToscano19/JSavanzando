        // ESTRUCTURAS REPETITIVAS (BUCLES)
console.log("Ciclos for y while");



                // PROGRAMA PARA VENTA DE BOLETOS EN RIFA
for (let boleto  = 1; boleto <=10; boleto++) {
console.log(`Boleto # ${boleto}`);
}

                //PROGRAMA VENDER GLOBOC CON UNA VARIABLE
let bolos = 1;

for (bolos; bolos <=10; bolos++) {
        console.log(`vendí # ${bolos}`);
        }

                //Cuenta regresiva
let cuentaRegresiva = 5;
for (cuentaRegresiva; cuentaRegresiva >=0;
        cuentaRegresiva--){
        console.log(`Quedan ${cuentaRegresiva} paletas`);
}

                //Recorrer arrays con el cliclo for
/* 
Debemos usar indices del arreglo para poder usar el bucle, 
en indices desde el 0 hasta n y usaremos la propiedad length
*/


const kinder = ["Pepe","Pedro","Juanito","Paco","Hugo","Diego"];

for(let i = 0; i < kinder.length; i++){
        console.log(kinder[i]);
}

 /* 
                         Variaciones del ciclo for
  * -- for...of nos permite recorrer el objeto (array) y devuelve el valor
  * -- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/



                //      SUMAR NÚMEROS
let suma = 0;
for (let i = 1; i <=20; i++){
        suma += i;
}
console.log(suma);


                // Tabla del 5
const tabla = 10;
for (let i=1; i <=11; i++){
        let resultado = tabla *i;
        console.log(`${tabla} x ${i} = ${resultado}`);
}

                        // CICLOS WHILE

                // Venta de productos
let productos = 5;
while (productos > 0) {
        console.log(productos + " productos ");
        productos--;
}

                // Imprimir números
let num1 = 0;
while (num1 < 30) {
        num1 ++
        console.log("El numero es " + num1);
}