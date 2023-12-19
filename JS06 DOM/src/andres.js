/* 
Manipulación del DOM
- Leer y traer nodos del arbol del DOM
    document.getElementById (traer elementos por ID)
        document.getElementByClass (traer elementos por Class)
            document.getElementByTagName (traer elementos por Etiquetas)       
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText);

//getElementByClassName
const titulos =document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length);
console.log(typeof titulos);

//getElementByTagName
const tituloH3 = document.getElementsByTagName ("h3")
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/* 
    Métodos para llamar elementos mediante selectores de CSS
    Se usa para documentos más específicos y la sintazis querySelector
    - document.querySelectos ("selector"); //#, ., <>
    - document.querySelectorll (). Selecciona los elementos que se 
    especifiquen.

    Siemprem van a traer el primer elementos con el selector indicado

*/

                    //querySelector
const query = document.querySelector ("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title")
console.log(queryClass);


                    //querySelectorAll ()
const queryClassAll = document.querySelectorAll(".title")
console.log(queryClassAll);


//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "orange"

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesion de manipulacion del DOM."
titulo2.style.color = "red";

                    //Crear nodos
const nodo1 = document.createElement("h4");
const imagenNodo = document.createElement("img");

            //Agregar nodos
const fatherElement = document.getElementById ("dif");
const textNodo1 = document.createTextNode ("Feliz Navidad");

        // Agregar texto al nodo
nodo1.appendChild(textNodo1);
fatherElement.appendChild(nodo1);
fatherElement.style.color = "green";

fatherElement.appendChild(imagenNodo);
imagenNodo.src = "https://i.pinimg.com/originals/a6/0d/18/a60d18144d2b51c7c89196a1d426d9cf.jpg";
imagenNodo.alt = "grogu";
imagenNodo.width = "200";


const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulacion 2.0 del DOM";
