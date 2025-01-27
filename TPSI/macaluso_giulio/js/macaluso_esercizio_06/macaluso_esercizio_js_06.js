let buttonAdd = document.getElementById('add');
let buttonChange = document.getElementById('change');
let buttonBolder = document.getElementById('grassetto');
let buttonBlue = document.getElementById('blue');
let buttonBorder = document.getElementById('bordo');

buttonAdd.addEventListener('click', add);
buttonChange.addEventListener('click', change);
buttonBolder.addEventListener('click', grassetto);
buttonBlue.addEventListener('click', blue);
buttonBorder.addEventListener('click', bordo);

function add() {
    let tabella = document.getElementById('tabella');
    let nome = document.getElementById('nome').value;
    let voto = document.getElementById('voto').value;
    const tr = document.createElement("tr");
    tr.innerHTML = "<tr> <td>" + nome + "</td> <td>" + voto + "</td> </tr>"
    tabella.append(tr);
}

function change() {
    let row = document.getElementById("tabella").children;

    for(let i = 0; i < row.length; i++) {
        if(i % 2 == 0) {
            row[i].children[0].style.color = "red";
            row[i].children[1].style.grassettocolor = "red";
        }
    }
}

function grassetto () {
    let tabella = document.getElementById("tabella").children;

    for (let i = 0; i < tabella.length; i++) {
        console.log("entra")
        tabella[i].children[0].classList.add("bolder");
        tabella[i].children[1].classList.add("bolder");
    }
}

function blue () {
    let tabella = document.getElementById("tabella").children;

    for (let i = 0; i < tabella.length; i++) {
        tabella[i].children[0].classList.add("blue");
        tabella[i].children[1].classList.add("blue");
    }
}

function bordo () {
    let tabella = document.getElementById("tabella").children;

    for (let i = 0; i < tabella.length; i++) {
        tabella[i].children[0].classList.toggle("border");
        tabella[i].children[1].classList.toggle("border");
    }
}