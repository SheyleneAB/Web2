const setup = () => {
	// registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

	// registreer click event listener 'wisAlles' bij #btnClear
    let btnClear = document.querySelector("#btnClear");
    btnClear.addEventListener("click", wisAlles);
	
	// registreer click event listener 'maakBelangrijk' bij elke <li> in .lstIngredients
    let lstIngredients = document.querySelectorAll("#lstIngredients li")
    for (let i=0;i<lstIngredients.length;i++) {
        lstIngredients[i].addEventListener("click", maakBelangrijk);
    }

}

const voegToe = () => {
	// Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtveld = document.getElementById("txtInput");
    let lstIngredients =document.getElementById("lstIngredients");
    lstIngredients.insertAdjacentHTML("beforeend",`<li>${txtveld.value}</li>` );

    let laatste = document.querySelector("#lstIngredients li:last-of-type");
    laatste.addEventListener("click", maakBelangrijk);
}

const wisAlles = () => {
	// Wis alle ingredienten
	// Je kunt dit doen door alle de .innerHTML van #lstIngredients een lege string in te stellen
    let lstIngredients =document.getElementById("lstIngredients")
    lstIngredients.innerHTML = "";
}

const maakBelangrijk = (event) => {
	// Geef het geklikte element de CSS class 'belangrijk'
   let item = event.target;
    item.classList.add("belangrijk");
}
	
window.addEventListener('load',setup);



















