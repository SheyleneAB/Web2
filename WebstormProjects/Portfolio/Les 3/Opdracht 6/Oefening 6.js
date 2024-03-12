const kopieer = ()  =>
{
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");
     txtOutput.textContent = txtInput.value;

}

const  setup = () => {

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

window.addEventListener("load", setup)