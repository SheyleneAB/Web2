const setup = () => {
    let elementNode=document.getElementsByTagName("p");

    for (let i = 0; i < elementNode.length; i++) {
        elementNode[i].addEventListener("click", printKlik);
        elementNode[i].addEventListener("mouseenter", enter);
        elementNode[i].addEventListener("mousemove", move);
        elementNode[i].addEventListener("mouseleave", leave);
    }
}
const printKlik = () => {
    console.log("Klik")
}
const  enter = () => {
    console.log("enter")
}
const  move = () => {
    console.log("move")
}
const  leave = () => {
    console.log("leave")
}
window.addEventListener("load", setup)