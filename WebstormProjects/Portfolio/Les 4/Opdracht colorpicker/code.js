const setup = () => {
    update();
    let colorDemos=document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");

    // we moeten zowel op het input als het change event reageren,
    // zie http://stackoverflow.com/questions/18544890
    for (let i = 0; i<sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }



}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let toonWaardeRood = document.getElementById("labelRood");
    let toonWaardeGroen = document.getElementById("labelGroen");
    let toonWaardeBlauw = document.getElementById("labelBlauw");

    let roodValue = sliders[0].value;
    let groenValue = sliders[1].value;
    let blauwValue = sliders[2].value;
    let colordemo = document.getElementsByClassName("colorDemo");
    colordemo[0].style.backgroundColor = `rgb(${roodValue}, ${groenValue}, ${blauwValue})`;


    console.log("de waarde van de rode slider is momenteel: " + roodValue);
    console.log("de waarde van de groene slider is momenteel: " + groenValue);
    console.log("de waarde van de blauwe slider is momenteel: " + blauwValue);
    toonWaardeRood.textContent = "Red "+ roodValue;
    toonWaardeGroen.textContent = "Green "+ groenValue;
    toonWaardeBlauw.textContent = "Blue " + blauwValue;

}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);