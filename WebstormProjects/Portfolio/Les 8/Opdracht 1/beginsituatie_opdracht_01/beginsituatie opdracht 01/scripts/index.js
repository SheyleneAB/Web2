const setup = ()=> {
    let lielementen = document.querySelectorAll("#lstIngredients li")
    for(let i = 0; i<lielementen.length; i++) {
        lielementen[i].addEventListener("click", verwijderele)
    }
}
const verwijderele = (event) => {
    let element = event.target;
    let list = element.parentElement;
    list.removeChild(element);
}





window.addEventListener("load", setup)