const setup = () => {
    let elementNode=document.getElementById("div");

    elementNode.addEventListener("click", VeranderKleur);

}
const VeranderKleur = (event) => {
    let elementNode = event.target;
    elementNode.style.backgroundColor  = "pink";
}
window.addEventListener("load", setup)