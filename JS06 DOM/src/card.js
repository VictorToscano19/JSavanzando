const user = {
    username: 'Victos19',
    age: 29,
    email: 'elzorroadios@gmail.com',
    favfilms: ["star wars", "sherk", "cars", "oppenhaimer"]
}
const createUser = (user) => {
document.getElementById("username").textContent = user.username
document.getElementById("age").textContent = user.age
document.getElementById("email").textContent = user.email
        //Mostrando elementos de lista en forma de lista
        //Mostrar array en forma de lista, utilizamos ciclo forEach
const ul =  document.getElementById ("fav-films");
user.favfilms.forEach(film => {
    const li = document.createElement("li");
    li.textContent = film;
    ul.appendChild(li);
});

ul.style.listStyleType = "none";
ul.style.padding = "0";
        //Mostrando elementos de lista en forma de fila
        /*
document.getElementById("fav-films").textContent = user.favfilms*/
} 

        //Invocar función
createUser(user);


const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener ("click",() => {
        userName.textContent = inputName.value;
})
