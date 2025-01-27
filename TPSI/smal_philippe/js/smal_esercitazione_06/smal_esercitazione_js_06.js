let buttonAdd = document.getElementById('add');
let buttonChange = document.getElementById('change');
let buttonGrasse = document.getElementById('grasse');
let buttonBlu = document.getElementById('blu');
let buttonBord = document.getElementById('bord');

buttonAdd.addEventListener('click', add);
buttonChange.addEventListener('click', change);
buttonGrasse.addEventListener('click', grassetto)
buttonBlu.addEventListener('click', blue);
buttonBord.addEventListener('click', bordi)


//event handler
function add() {
    let table = document.getElementById("tableAdd")
    let nome = document.getElementById("nome").value 
    let media = document.getElementById("media").value
    const tr = document.createElement("tr")
    let cellNome = document.createElement("td")
    cellNome.innerText = nome
    let cellMedia = document.createElement("td")
    cellMedia.innerText = media
    tr.append(cellNome, cellMedia)
    table.append(tr)
}

function change() {
    let table = document.getElementById("tableAdd").children

    for (let index = 0; index < table.length; index++) {
        if(((index + 1 )% 2) == 0) {
            table[index].children[0].style.color = "blue"
            table[index].children[1].style.color = "blue"
        }
        
    }
}

function grassetto() {
    let table = document.getElementById("tableAdd").children

    for (let index = 0; index < table.length; index++) {
        table[index].children[0].classList.add("grassetto");
        table[index].children[1].classList.add("grassetto");
    }
}

function blue() {
    let table = document.getElementById("tableAdd").children

    for (let index = 0; index < table.length; index++) {
        table[index].children[0].classList.add("blue");
        table[index].children[1].classList.add("blue");
    }
}

function bordi() {
    let table = document.getElementById("tableAdd").children

    for (let index = 0; index < table.length; index++) {
        table[index].children[0].classList.toggle("bordo");
        table[index].children[1].classList.toggle("bordo");
    }
}