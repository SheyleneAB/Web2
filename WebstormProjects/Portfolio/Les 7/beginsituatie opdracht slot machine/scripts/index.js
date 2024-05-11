// een globale variabele met de urls van alle afbeeldingen

const urls = ["images/fruit01.jpg", "images/fruit02.jpg", "images/fruit03.jpg", "images/fruit04.jpg", "images/fruit05.jpg"];

const setup = () => {
let buttonlink = document.querySelector("a.buttonLink")
    buttonlink.addEventListener("click", spin)
    let spinein = document.querySelector(".slots")
    spinein.insertAdjacentHTML("beforeend", `<p></p>`)
}
const spin = () => {

    let slots = document.querySelector('.slots');

// Get all img elements within the slotsDiv
    let images = slots.querySelectorAll('img');
    let slotp = slots.querySelector( ".slots p")

    for (let i = 0; i<images.length; i++) {

        let randomNummer = Math.floor(Math.random() * 5);
        images[i].setAttribute("src", urls[randomNummer]);
    }
    let eerstesrc = images[0].src;
    let boolsrc = true;
    for (let i = 1; i<images.length; i++) {
        if (images[i].src !== eerstesrc) {
            boolsrc = false;
            break;
        }
        else {
            boolsrc = true;
        }
    }
    if (boolsrc) {
        slotp.textContent = "Proficiat";
    }
    else{
        slotp.textContent = "Zolang u niet stopt bent u geen verliezer";
    }
}


window.addEventListener("load", setup);
