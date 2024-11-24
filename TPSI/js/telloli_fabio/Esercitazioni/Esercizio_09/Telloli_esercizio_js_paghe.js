let add = document.getElementById('add')
let total = document.getElementById('total')
let media = document.getElementById('media')
var id = 0

let tabella = document.getElementById('tabella')

add.addEventListener('click', salva)
total.addEventListener('click', totale)
media.addEventListener('click', mediaTot)

function salva() {
    id += 1

    
    let dipartimento = document.getElementById('dipartimento').value
    let cognome = document.getElementById('cognome').value
    let nome = document.getElementById('nome').value
    let mese = document.getElementById('mese').value
    let importo = document.getElementById('importo').value

    let tr = document.createElement("tr")
    tr.setAttribute("id", id) 

    let tdDipartimento = document.createElement("td")
    tdDipartimento.innerText = dipartimento;

    let tdCognome = document.createElement("td")
    tdCognome.innerText = cognome

    let tdNome = document.createElement("td")
    tdNome.innerText = nome

    let tdMese = document.createElement("td")
    tdMese.innerText = mese
    
    let tdImporto = document.createElement("td")
    tdImporto.innerText = importo

    tr.append(tdDipartimento, tdCognome, tdNome, tdMese, tdImporto)
    tabella.append(tr)
}

function mediaTot() {
    let somma = 0
    let contatore = 0
    let table = tabella.children
    let tdMedia = document.getElementById('celmedia')

    for (let i = 0; i < table.length; i++) {
        somma += parseInt(table[i].children[4].innerText)
        contatore++
    }

    tdMedia.innerText = (somma / contatore).toFixed(2) + " €"
}

function totale() {
    let somma = 0
    let table = tabella.children
    let tdTotale = document.getElementById('celtot')

    for (let i = 0; i < table.length; i++) {
        somma += parseInt(table[i].children[4].innerText)
    }

    tdTotale.innerText = somma + " €"
}