let lomake = document.forms["FormNewItem"];
let itemlist = document.getElementById("itemlist");

document.addEventListener("submit", UusiListaElementti)
itemlist.addEventListener("click", itemInKlikkaus)


function UusiListaElementti(event) {

    event.preventDefault()


    let elementinNimi = document.querySelector("#main input[type=text]").value;

    if (elementinNimi.length < 1) {
        alert("Tyhjä syöte!");
        return;
    }

    let uusiElementti = document.createElement("li");
    let uusiElementtiTeksti = document.createTextNode(elementinNimi);
    uusiElementti.appendChild(uusiElementtiTeksti);
    uusiElementti.className = "list-item";
    
    document.querySelector("#itemlist").appendChild(uusiElementti);
    lomake.reset();
}

function itemInKlikkaus(event){
    console.log("klikkaus")
    console.log(event.target)
    let parentti = event.target.parentElement;
    poistaItem = (event.target, parentti)
}

function poistaItem(poistettavaElementti, elementinParentti){
    elementinParentti.removeChild(poistettavaElementti);
}