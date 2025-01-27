let addButton = document.getElementById("add")
let calcButton = document.getElementById("calc")
var num = 0;

addButton.addEventListener('click', addTable)
calcButton.addEventListener('click', editFinalCost)

function addElementi(content, idCell) {
    let cellTable = document.createElement("td")
    cellTable.innerText = content
    if(idCell != null) cellTable.id = idCell

    return cellTable
}

function calcFinalCost(cost, qty) {
    return parseFloat(cost) * parseFloat(qty)
}

function createInput(content, idFianlCost, cost) {
    let cellTable = document.createElement("td")
    let input = document.createElement("input")
    input.value = content
    input.addEventListener('change', () => {editCell(idFianlCost, calcFinalCost(input.value, cost))})
    cellTable.append(input)

    return cellTable
}

function createButton(idRow) {
    let cellTable = document.createElement("td")
    let button = document.createElement("button")
    button.innerText = "-"
    button.addEventListener('click', () => {removeRow(idRow)})
    cellTable.append(button)

    return cellTable
}

function checkQty(qty) {
    return qty >= 1
}

function addTable() {
    let table = document.getElementById("carrello")
    let inputProdotto = document.getElementById("prodo").value
    let inputQty = document.getElementById("qty").value
    let inputCosto = document.getElementById("costo").value

    if(checkQty(inputQty)) {
        const tr = document.createElement("tr")
        let idRow = "prodotto" + num
        let idCellFinalCost = "finalcost" + num
        tr.id = idRow
        num += 1

        tr.append(addElementi(inputProdotto, null), 
                    createInput(inputQty, idCellFinalCost, inputCosto), 
                    addElementi(inputCosto, null), 
                    addElementi(calcFinalCost(inputCosto, inputQty), idCellFinalCost), 
                    createButton(idRow))
        table.append(tr)
    } else alert("La quantita deve essere maggiore o uguale a 1")
}

function removeRow(id) {
    let row = document.getElementById(id)
    row.remove()
    editFinalCost()
}

function editCell(id, value) {
    let cell = document.getElementById(id)
    cell.innerText = value
    editFinalCost()
}


function getImporto(table) {
    let totale = 0
    console.log(table.length)
    for (let index = 0; index < table.length; index++) totale += parseInt(table[index].children[3].textContent)
    
    return totale
}

function editFinalCost() {
    let table = document.getElementById("carrello").children
    let cell = document.getElementById("FinalCost")
    cell.innerText = getImporto(table)
}