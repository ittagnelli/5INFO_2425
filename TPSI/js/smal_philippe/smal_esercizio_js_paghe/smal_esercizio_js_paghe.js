let buttonSalva = document.getElementById('addRow');
let buttonTotale = document.getElementById('totale');
let buttonMedia = document.getElementById('trend');

buttonSalva.addEventListener('click', add);
buttonTotale.addEventListener('click', totale);
buttonMedia.addEventListener('click', media);

function isFill(in_1, in_2, in_3, in_4, in_5) {
    return (in_1 == "") || (in_2 == "") || (in_3 == "") ||
    (in_4 == "") || (in_5 == "") 
}

function addElementi(content) {
    let cellTable = document.createElement("td")
    cellTable.innerText = content

    return cellTable
}

function add() {
    let table = document.getElementById("addTable")
    let dipartimento = document.getElementById("dipartimento").value 
    let cognome = document.getElementById("cognome").value
    let nome = document.getElementById("nome").value
    let mese = document.getElementById("mese").value
    let importo = document.getElementById("importo").value

    if (!isFill(dipartimento, cognome, nome, mese, importo)) {
        const tr = document.createElement("tr")
        tr.append(addElementi(dipartimento), addElementi(cognome), addElementi(nome), 
                    addElementi(mese), addElementi(importo))

        table.append(tr)
    } else {
        alert("Compila tutto")
    }

}   

function getImporto(table) {
    let totale = 0
    for (let index = 2; index < table.length; index++) totale += parseInt(table[index].children[4].textContent)
    
    return totale
}

function totale() {
    let table = document.getElementById("addTable").children
    let totaleLabel = document.getElementById("importo-dsa")
    let lung = table.length - 2

    if (lung >= 2) {
        totaleLabel.textContent = getImporto(table) + " €"
    }
}

function media() {
    let table = document.getElementById("addTable").children
    let mediaLabel = document.getElementById("media-bes")
    let lung = table.length - 2

    if (lung >= 2) {
        mediaLabel.textContent = getImporto(table)/lung + " €"
    }
}