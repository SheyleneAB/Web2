const setup = () => {
    let elementNode=document.getElementsByTagName("p");

    for (let i = 0; i < elementNode.length; i++) {
        elementNode[i].addEventListener("click", printKlik);
    }
}
const printKlik = () => {
    console.log("Klik")
}
window.addEventListener("load", setup)