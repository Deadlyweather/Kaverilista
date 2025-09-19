let lomake = document.forms["FormNewItem"];
let itemlist = document.getElementById("itemlist");

document.addEventListener("keydown", function(event) {
    if (event.key === "Shift") {
        JärjestäLista();
    }
});
function JärjestäLista() {
    let lista = Array.from(itemlist.getElementsByTagName("li"));
    lista.sort((a, b) => {
        return a.textContent.localeCompare(b.textContent, 'fi', { sensitivity: 'base' });
    });

    itemlist.innerHTML = "";
    lista.forEach(item => itemlist.appendChild(item));
}
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
}

function itemInKlikkaus(event){
    console.log("klikkaus")
    console.log(event.target)
    let parentti = event.target.parentElement;
    if (confirm("Oletko varma että haluat poistaa nimen listasta?") === true){
        poistaItem(event.target, parentti);
    }
}

function poistaItem(poistettavaElementti, elementinParentti){
    elementinParentti.removeChild(poistettavaElementti);
}