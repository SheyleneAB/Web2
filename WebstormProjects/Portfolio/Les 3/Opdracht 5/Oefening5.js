const setup = () => {

    let btnWijzig = document.getElementById("veranderbutton");
    btnWijzig.addEventListener("click", wijzig);
}
const wijzig = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.textContent="Welkom!";
}
window.addEventListener("load", setup);