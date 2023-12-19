                        // Arrays
 const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

                        // Array cadena de texto
const comida = ["tacos", "pizza", "torta", "pastel"];
console.log(comida);

                        // Array mixto
const mixto = [
        "Dua lipa",
        121221,
        true,
        {nombre: "victor"}
];
console.log(mixto);

                //Array vacio
const lista = [];
console.log(lista);

                //Agregar elementos a mi array vacio
lista [0] = "Leche";
lista [1] = "Huevos";
lista [2] = "Papas";
lista [3] = "Coca";
lista [4] = "Cafe";
lista [5] = "Pasta";
console.log(lista);

                //Otra manera de crear arrays
const frutas = new Array ("Peras", "Manzanas", "Cacahuates");
console.log(frutas);

                //Conocer  la longitud de un array
console.log(frutas.length);

                //Acceder a elementos del Array, acorde a su indice
console.log(lista[2]);
console.log(lista[4]);
console.log(lista[9]);


                //Modificar elementode un array por el indice
const cremeria = ["Jamon", "Queso", "Cajeta", "Mermelada"];
console.log(cremeria);

                //Cambiamos un elemento de queso a quesillo
cremeria [2] = "Quesillo"
console.log(cremeria);

                //Arreglo multidimensional
console.log("Arreglo de arreglos");

const estados = ["Estado de mexico", "Jalisco", "Yucatan"];
const platillos = ["Chorizo", "Torta ahogada", "Panucho"];

const menu = [estados, platillos];

console.log(menu[0][1]);
console.log(`El ${menu [1][2]} se come en ${menu [0][2]}`);

                //MÉTODOS ARRAYS
console.log("Métodos arrays");

const LIGAMX = ["Atlas", "America", "Chivas", "Toluca"];
console.log(LIGAMX);
//*pop () Eliminar el último elemento del array
let popLIGAMX = LIGAMX.pop();
console.log(popLIGAMX);
console.log(LIGAMX);
//*push () Agregar al final del array
let pushLIGAMX  = LIGAMX.push("Juarez");
console.log(LIGAMX);

                //shift
let shiftLIGAMX = LIGAMX.shift();
console.log(LIGAMX);

                //unshift
let unshiftLIGAMX = LIGAMX.unshift("Atlas");
console.log(LIGAMX);

                //REVERSE
let reverseLIGAMX = LIGAMX.reverse ();
console.log(LIGAMX);


        // ESTRUCTURAS REPETITIVAS (BUCLES)
