let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')

button1.addEventListener('click', addStudente)
button2.addEventListener('click', cambiaColore)
button3.addEventListener('click', grassetto)
button4.addEventListener('click', blue)
button5.addEventListener('click', bordo)



function addStudente() {
    let nome = document.getElementById("nome").value
    let voto = document.getElementById("voto").value
    let table = document.getElementById("tabella")
    let tr = document.createElement("tr")
    let tdNome = document.createElement("td")
    let tdVoto = document.createElement("td")

    tdNome.innerText = nome
    tdVoto.innerText = voto

    tr.append(tdNome, tdVoto)
    table.append(tr)
}

function cambiaColore() {
    let righe = document.querySelectorAll("#tabella tr")

    righe.forEach((tr, index) => {
        if (index % 2 == 0) {
            tr.style.backgroundColor = "blue"
        } else {
            tr.style.backgroundColor = "red"
        }
    });
}

function grassetto() {
    let tabella = document.getElementById("tabella")
    tabella.classList.add("bold")
}

function blue() {
    let tabella = document.getElementById("tabella")
    tabella.classList.add("blue")
}

function bordo() {
    let tabella = document.getElementById("tabella")
    tabella.classList.toggle("bordo")
}




