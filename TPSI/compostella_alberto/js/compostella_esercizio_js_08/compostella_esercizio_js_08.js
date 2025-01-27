let buttonSalva = document.getElementById('salva');

buttonSalva.addEventListener('click', add);

var num = 0

function add() {
    let table = document.getElementById("tableAdd")
    let compito = document.getElementById("compito").value 
    let importanza = document.getElementById("importanza").value

    console.log(compito)
    console.log(importanza)

    const tr = document.createElement("tr")

    let idNome = "compito" + (num)
    tr.id = idNome

    let cellcompito = document.createElement("td")
    cellcompito.innerText = compito
    let idcompito = idNome + "text"
    cellcompito.id = idImpegnpo

    let cellImportanza = document.createElement("td")
    cellImportanza.innerText = importanza

    let cellButtonDo = document.createElement("td")
    let buttonDo = document.createElement("button")
    buttonDo.innerText = "Check"
    buttonDo.addEventListener('click', () => {toDo(idcompito)})
    cellButtonDo.append(buttonDo)

    let cellButtonRemove = document.createElement("td")
    let buttonRemove = document.createElement("button")
    buttonRemove.innerText = "Remove"
    buttonRemove.addEventListener('click', () => { remove(idNome) })
    cellButtonRemove.append(buttonRemove)

    console.log(cellButtonRemove)

    tr.append(cellcompito, cellImportanza, cellButtonDo, cellButtonRemove)

    table.append(tr)
    num = num + 1
}   

function remove(idNome) {
    console.log(idNome)
    let row = document.getElementById(idNome)

    row.remove()
}

function toDo(idNome) {
    let cell = document.getElementById(idNome)
    cell.classList.toggle("to-do")
    
}
