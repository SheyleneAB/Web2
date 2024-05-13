const setup = ()=> {
    let lielementen = document.querySelectorAll("#lstIngredients li a")
    for(let i = 0; i<lielementen.length; i++) {
        lielementen[i].addEventListener("click", verwijderele)
    }
}
const verwijderele = (event) => {
    let element = event.target;
    let list = element.parentElement.parentElement;
    list.removeChild(element.parentElement);
}





window.addEventListener("load", setup)