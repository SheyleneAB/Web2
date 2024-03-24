const kopieer = ()  =>
{
    let prijsProduct = document.getElementsByClassName("prijs");
    let aantalProduct = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw")
    let subTotaal = document.getElementsByClassName("subtotaal")
    let totaal = 0;
    for (let i = 0; i < subTotaal.length; i++) {
        let prijs = parseFloat(prijsProduct[i].textContent);
        let aantal = parseFloat(aantalProduct[i].value);
        let btwPercentage = parseFloat(btw[i].textContent) / 100;

        let subTotaalPrijs = prijs * aantal;
        let subTotaalMetBtw = subTotaalPrijs + subTotaalPrijs * btwPercentage;

        subTotaal[i].textContent = subTotaalMetBtw.toFixed(2) + " Eur";

        totaal += subTotaalMetBtw;
    }

    document.getElementsByClassName("totaal")[0].textContent = totaal.toFixed(2) + " Eur";
}

const  setup = () => {

    let btnHerbereken = document.getElementById("herbereken");
    btnHerbereken.addEventListener("click", kopieer);
}

window.addEventListener("load", setup)