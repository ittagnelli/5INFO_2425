let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
var id = 0;
let currentRow = null

button1.addEventListener('click', cerca)
button2.addEventListener('click', salva)
button3.addEventListener('click', aggiorna)

function salva() {
    id = id + 1
    let cognome = document.getElementById("cognome").value
    let nome = document.getElementById("nome").value
    let indirizzo = document.getElementById("indirizzo").value
    let telefono = document.getElementById("telefono").value
    let tabella = document.getElementById("tabella")
    
    let tr = document.createElement("tr")
    tr.setAttribute("id", id)

    let tdCognome = document.createElement("td")
    let tdNome = document.createElement("td")
    let tdIndirizzo = document.createElement("td")
    let tdTelefono = document.createElement("td")
    let tdButton = document.createElement("button")

    tdCognome.innerText = cognome
    tdNome.innerText = nome
    tdIndirizzo.innerText = indirizzo
    tdTelefono.innerText = telefono
    tdButton.innerText = "Rimuovi"

    tdButton.addEventListener('click', () => rimuovi(tr.id))
    
    tr.append(tdCognome, tdNome, tdIndirizzo, tdTelefono, tdButton)
    tabella.append(tr)

    reset()
}

function rimuovi(id) {
    let tr = document.getElementById(id);
    tr.remove()
}

function cerca() {
    let cognome = document.getElementById("cognome").value;
    let tabella = document.getElementById("tabella");
    let rows = tabella.getElementsByTagName("tr");

    currentRow = null;

    for (let row of rows) {
        if (row.cells[0].innerText == cognome) {
            document.getElementById("nome").value = row.cells[1].innerText;
            document.getElementById("indirizzo").value = row.cells[2].innerText;
            document.getElementById("telefono").value = row.cells[3].innerText;
            currentRow = row;
            break;
        }
    }

    if (!currentRow) {
        alert("Contatto non trovato.");
    }

}

function aggiorna() {
    if (!currentRow) {
        alert("contatto non trovato")
        return
    }

    currentRow.cells[0].innerText = document.getElementById("cognome").value
    currentRow.cells[1].innerText = document.getElementById("nome").value
    currentRow.cells[2].innerText = document.getElementById("indirizzo").value
    currentRow.cells[3].innerText = document.getElementById("telefono").value

    currentRow = null

    reset()
}

function reset() {
    document.getElementById("cognome").value = ""
    document.getElementById("nome").value = ""
    document.getElementById("indirizzo").value = ""
    document.getElementById("telefono").value = ""
}