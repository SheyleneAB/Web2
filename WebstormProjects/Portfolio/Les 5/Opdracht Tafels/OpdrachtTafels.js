const setup = () => {
    let btntabel = document.getElementById("goButton");
    btntabel.addEventListener("click", addTabel);
}
const addTabel = () => {
    let tabelTafel = document.getElementById("tabelTafel");
    let Tafelproduct = document.getElementById("Tafelproduct").value;

    let html ="<table>";
    for (let i = 0; i<11; i++) {
        if (i === 0) {
            html +=  `<tr><td> Tafel van ${Tafelproduct} </td></tr>`;

        }
        else {
            let bewerkingString = `<tr><td>${Tafelproduct} x ${i} = ${Tafelproduct*i}</td></tr>`
             html += bewerkingString;
           // // if (i%2 !== 0) {
           //      tabelTafel[i].rows[i].cells[2].style.backgroundColor = "#d3d3d3";
           //  }
           //  else {
           //      tabelTafel[i].style.backgroundColor = "#d3d3d3";
           //  }
        }


    }
    html += "</table>"
    tabelTafel.innerHTML += html;

}

window.addEventListener("load", setup)