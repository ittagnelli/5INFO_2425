let add = document.getElementById('add')
let tot = document.getElementById('tot')
let tabella = document.getElementById('tabella') 

var id = 0
var totCarrello = 0;

add.addEventListener('click', aggiungi)
tot.addEventListener('click', calcolaTot)

function aggiungi() {
    id += 1
    let prodotto = document.getElementById('prodoo').value
    let qty = document.getElementById('qty').value
    let costo = document.getElementById('costo').value
    
    let tr = document.createElement("tr")
    tr.setAttribute("id", id)

    let tdProdotto = document.createElement("td")
    let tdQty = document.createElement("input")
    tdQty.type = "number"
    tdQty.value = qty
    tdQty.min = 1
    let tdCosto = document.createElement("td")
    let tdCostoTot = document.createElement("td")
    let tdButton = document.createElement("span")

    tdButton.classList.add("material-icons", "icon-remove")
    tdButton.textContent = "remove_shopping_cart"

    tdProdotto.innerText = prodotto
    tdQty.innerText = qty
    tdCosto.innerText = costo
    tdCostoTot.innerText = (qty * costo) + " €"

    tdQty.addEventListener("input", function() {
        let newQty = tdQty.value
        tdCostoTot.innerText = (newQty * costo) + " €"
    })

    tdButton.addEventListener('click', () => rimuovi(tr.id))
    
    tr.append(tdProdotto, tdQty, tdCosto, tdCostoTot, tdButton)
    tabella.append(tr)

    resettaInput()
}

function rimuovi(id) {
    let tr = document.getElementById(id)
    tr.remove()
}

function calcolaTot() {
    let tot = 0
    let table = tabella.children;
    let tdTotale = document.getElementById('totale')

    for (let i = 0; i < table.length; i++) {
        tot += parseInt(table[i].children[3].innerText)
    }

    tdTotale.innerText = tot + " €"
}

function resettaInput() {
    let prodotto = document.getElementById('prodoo').value = " "
    let qty = document.getElementById('qty').value = " "
    let costo = document.getElementById('costo').value = " "
}
