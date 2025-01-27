let buttonCerca = document.getElementById('cerca');
let buttonSalva = document.getElementById('salva');

buttonCerca.addEventListener('click', cerca);
buttonSalva.addEventListener('click', add);

var num = 0

function add() {
    let table = document.getElementById("tableAdd")
    let nome = document.getElementById("nome").value 
    let cognome = document.getElementById("cognome").value
    let indirizzo = document.getElementById("indirizzo").value 
    let telefono = document.getElementById("telefono").value

    const tr = document.createElement("tr")

    let cellCognome = document.createElement("td")
    cellCognome.innerText = cognome

    let cellNome = document.createElement("td")
    cellNome.innerText = nome

    let cellIndirizzo = document.createElement("td")
    cellIndirizzo.innerText = indirizzo

    let cellTelefono = document.createElement("td")
    cellTelefono.innerText = telefono

    let cellButton = document.createElement("td")
    let button = document.createElement("button")
    button.innerText = "Rimuovi"

    let idNome = "remove" + (num)
    tr.id = idNome

    button.addEventListener('click', () => { remove(idNome) })
    num = num + 1

    cellButton.append(button)
    cellButton.colSpan = 2


    tr.append(cellCognome, cellNome, cellIndirizzo, cellTelefono, cellButton)

    table.append(tr)
}   

function remove(idNome) {
    console.log(idNome)
    let row = document.getElementById(idNome)

    row.remove()
}

function cerca() {
    let table = document.getElementById("tableAdd").children
    let inputSelection = document.getElementById("inputx")
    let cognome = document.getElementById("cognome").value 
    let telefono = document.getElementById("telefono").value
    let indexTrovato = -1


    for (let index = 0; index < table.length; index++) {
        console.log(table[index].children[0].textContent)
        if((table[index].children[0].textContent == cognome) & (table[index].children[3].textContent == telefono) ) {
            console.log(index)
            indexTrovato = index
        }
    }

    console.log("index" + indexTrovato)

    if(indexTrovato != -1) {
        document.getElementById("nome").value = table[indexTrovato].children[0].textContent
        document.getElementById("cognome").value = table[indexTrovato].children[1].textContent
        document.getElementById("indirizzo").value = table[indexTrovato].children[2].textContent
        document.getElementById("telefono").value = table[indexTrovato].children[3].textContent

        let cellButton = document.createElement("td")
        let button = document.createElement("button")
        button.innerText = "Update"
        button.addEventListener('click', () => { update(indexTrovato) })
        
        cellButton.append(button)
        inputSelection.append(cellButton)
    }
}

function update(indexTrovato) {
    let table = document.getElementById("tableAdd").children
    let nome = document.getElementById("nome").value 
    let cognome = document.getElementById("cognome").value
    let indirizzo = document.getElementById("indirizzo").value 
    let telefono = document.getElementById("telefono").value

    table[indexTrovato].children[0].textContent = nome
    table[indexTrovato].children[1].textContent = cognome
    table[indexTrovato].children[2].textContent = indirizzo
    table[indexTrovato].children[3].textContent = telefono

    document.getElementById("nome").value = " "
    document.getElementById("cognome").value = " "
    document.getElementById("indirizzo").value = " "
    document.getElementById("telefono").value = " "
}
