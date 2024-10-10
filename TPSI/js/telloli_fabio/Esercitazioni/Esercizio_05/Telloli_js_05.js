let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')

button1.addEventListener('click', addStudente)
button2.addEventListener('click', cambiaColore)




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



