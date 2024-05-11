const setup = () => {
let btnwijzig = document.querySelector("#wijzigbtn")
    btnwijzig.addEventListener("click",veranderAfbeelding)

}
const  veranderAfbeelding = () => {
    let imghtml = document.querySelector("#disimage")
    let imgurl = document.querySelector("#image-url")
    imghtml.setAttribute("src", imgurl.value);
}


window.addEventListener('load', setup)