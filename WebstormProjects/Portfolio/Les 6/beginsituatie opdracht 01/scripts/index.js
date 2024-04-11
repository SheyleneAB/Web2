const setup = () => {
	// registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", voegToe);

	// registreer click event listener 'wisAlles' bij #btnClear
    let btnClear = document.getElementById("btnClear");
    btnClear.addEventListener("click", wisAlles);
	
	// registreer click event listener 'maakBelangrijk' bij elke <li> in .lstIngredients
    let lstIngredients = document.getElementById("lstIngredients")
    lstIngredients.addEventListener("click", maakBelangrijk);
}

const voegToe = () => {
	// Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtveld = document.getElementById("txtInput")
    let lstIngredients =document.getElementById("lstIngredients")
    lstIngredients.innerHTML += `<li>${txtveld.value}</li>`;
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



















