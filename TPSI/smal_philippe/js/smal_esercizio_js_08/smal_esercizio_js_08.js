let buttonSalva = document.getElementById('salva');

buttonSalva.addEventListener('click', add);

var num = 0

function add() {
    let table = document.getElementById("tableAdd")
    let impegno = document.getElementById("impegno").value 
    let importanza = document.getElementById("importanza").value

    console.log(impegno)
    console.log(importanza)

    const tr = document.createElement("tr")

    let idNome = "impegno" + (num)
    tr.id = idNome

    let cellImpegno = document.createElement("td")
    cellImpegno.innerText = impegno
    let idImpegnpo = idNome + "text"
    cellImpegno.id = idImpegnpo

    let cellImportanza = document.createElement("td")
    cellImportanza.innerText = importanza

    let cellButtonDo = document.createElement("td")
    let buttonDo = document.createElement("button")
    buttonDo.innerText = "Check"
    buttonDo.addEventListener('click', () => {toDo(idImpegnpo)})
    cellButtonDo.append(buttonDo)

    let cellButtonRemove = document.createElement("td")
    let buttonRemove = document.createElement("button")
    buttonRemove.innerText = "Remove"
    buttonRemove.addEventListener('click', () => { remove(idNome) })
    cellButtonRemove.append(buttonRemove)

    console.log(cellButtonRemove)

    tr.append(cellImpegno, cellImportanza, cellButtonDo, cellButtonRemove)

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