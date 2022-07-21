let btnC = document.querySelector("#createIMG");
let btnD = document.querySelector("#DeleteIMG");
let i = 0;

function createDIV() {
    let section = document.querySelector(".zadan");
    let ispolnit = document.querySelector("#ispolnit").value;
    let trek = document.querySelector("#trek").value;
    let linkIMG = document.querySelector("#linkIMG").value;
    let newDIV = document.createElement("div");
    let newTextI = document.createElement("h2");
    let newTextT = document.createElement("h2");
    newTextI.textContent = ispolnit;
    newTextT.textContent = trek;
    let newIMG = document.createElement("IMG");
    newIMG.setAttribute("src", linkIMG);
    newDIV.appendChild(newTextI);
    newDIV.appendChild(newTextT);
    newDIV.appendChild(newIMG);
    section.appendChild(newDIV);
    if (i == 5) {
        newIMG.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQAFyQ_bpnLbHc1ofzsRgCbiT0AhbQsILDg&usqp=CAU";
    }
    i++;
}

function deleteIMG() {
    document.querySelector("div").remove();
}

btnC.addEventListener("click", createDIV);
btnD.addEventListener("click", deleteIMG);