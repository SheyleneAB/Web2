const  toonresultaten = () => {
    let roken = document.querySelector("#rook")
    let text = document.querySelector("#resulttext")
    if(roken.checked){
        console.log("is een roker");
    }
    else {
        console.log("is geen roker");
    }
    let selectedOptions=document.querySelectorAll("#buurland option:checked");
    let moedertaal = document.querySelector("input[name='moedertaal']:checked");
    console.log(`moedertaal is ${moedertaal.value}`);

    let FavorieteBuurland=document.querySelector("#buurland option:checked");
    console.log(`favoriete buurland is ${FavorieteBuurland.text}`);
}
const setup = () => {
    let button = document.querySelector("#toonbutton");
    button.addEventListener("click", toonresultaten)
}



window.addEventListener("load", setup)