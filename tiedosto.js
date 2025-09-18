let lomake = document.forms["FormNewItem"];
let itemlist = document.getElementById("itemlist");

document.addEventListener("submit", UusiListaElementti)
itemlist.addEventListener("click", ItemInClick);


function UusiListaElementti(event) {

    event.preventDefault()

    if (elementinNimi.lenght < 1) {
        alert("Tyhjä syöte!");
        return;
        }

    let elementinNimi = document.queryselector("#main input[type=text]").value;

    let NewElement = document.createElement("li");
    let uusiElementtiTeksti = document.createTextNode(elementinNimi);
    uusiElementti.appendChild(uusiElementtiTeksti);
    uusiElementti.className = "list-item";
    
    document.querySelector("#itemlist").appendChild(NewElement);
}
function ItemInClick(event){
    console.log("klikkasit listaa");
    console.log(event);
    TerminateItem(event.document, Parent);
}
function TerminateItem(DeleteItem, ParentElement){
    ParentElement.removeChild(DeleteItem);
}