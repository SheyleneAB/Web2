// TODO 1
// voeg helemaal onderaan een regel toe zodat de setup functie wordt
// uitgevoerd zodra de pagina is ingeladen (na het 'load' event dus) KLAAR

const setup = () => {
    console.log("setup uitgevoerd");

    // een klik op de bovenste knop voert de functie 'kopieerBovenste' uit
    const btnKopieerBoven = document.getElementById("btnBoven");
    btnKopieerBoven.addEventListener("click", kopieerBovenste);

    // TODO 3
    // schrijf hieronder de nodige code zodat een klik op de onderste knop,
    // de functie 'kopieerOnderste' uitvoert
    const ondersteInput = document.getElementsByClassName('onder')[0];
    const paragraaf = document.getElementsByTagName("p");

    for (let i=0;i<paragrafen.length;i++) {
        paragraaf[i].textContent = ondersteInput.value;
    }
}

const kopieerBovenste = () => {
    console.log("button voor bovenste geklikt");

    // TODO 2
    // schrijf hieronder de nodige code zodat de tekst uit het BOVENSTE tekstveld,
    // naar de paragraaf met class 'output' gekopieerd wordt. De bestaande tekst
    // van die paragraaf wordt gewoon vervangen.
    let paragrafen=document.getElementsByTagName("p");
    let bovenstetext = document.getElementById("boven").value;
    for (let i=0;i<paragrafen.length;i++) {
        paragrafen[i].textContent = bovenstetext;
    }

}

const kopieerOnderste = () => {
    console.log("button voor onderste geklikt");

    // TODO 4
    // schrijf hieronder de nodige code zodat de tekst uit het ONDERSTE tekstveld,
    // naar de paragraaf met class 'output' gekopieerd wordt. De bestaande tekst
    // van die paragraaf wordt gewoon vervangen.


}

window.addEventListener("load", setup);