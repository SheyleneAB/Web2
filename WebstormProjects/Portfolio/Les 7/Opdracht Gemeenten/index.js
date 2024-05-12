let arraygem = [];
const setup = () => {
let button = document.querySelector("#voegtoe")
    button.addEventListener("click", voegtoegemeentearray)

}
const compare = (a, b) => {
    return a.localeCompare(b);
}
const voegtoegemeentearray = () => {
    let inputgem = document.querySelector("#inputgem")
    arraygem.push(inputgem.value)
    arraygem.sort(compare)
    voegtoegemeenteselect(arraygem);

}
const voegtoegemeenteselect = () => {
    let selectitem = document.querySelector("#selGemeenten")
    selectitem.innerHTML = "";
    for(let i = 0; i< arraygem.length; i++) {

        selectitem.insertAdjacentHTML("beforeend", ` <option> ${arraygem[i]} </option> `)
    }

}
window.addEventListener("load", setup)