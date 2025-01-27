let buttonAdd = document.getElementById('add');
let buttonSearch = document.getElementById('search');
let buttonUpdate = document.getElementById('update');

buttonAdd.addEventListener('click', add);
buttonSearch.addEventListener('click', search);
buttonUpdate.addEventListener('click', update);

var num = 0;
var index = -1;

function add() {
    let tabella = document.getElementById('tabella');
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let indirizzo = document.getElementById('indirizzo').value;
    let numero = document.getElementById('numero').value;

    const tr = document.createElement("tr");

    const cellaCognome = document.createElement("td");
    cellaCognome.innerText = cognome;

    const cellaNome = document.createElement("td");
    cellaNome.innerText = nome;

    const cellaIndirizzo = document.createElement("td");
    cellaIndirizzo.innerText = indirizzo;

    const cellaNumero = document.createElement("td");
    cellaNumero.innerText = numero;

    const cellaPulsante = document.createElement("td");
    const pulsante = document.createElement("button");
    pulsante.innerText = "Rimuovi";

    let idRiga = "remove" + num;

    tr.id = idRiga;
    
    pulsante.addEventListener('click', () => { remove(idRiga) });
    num += 1; 

    cellaPulsante.append(pulsante);

    tr.append(cellaCognome, cellaNome, cellaIndirizzo, cellaNumero, cellaPulsante);
    tabella.append(tr);
}

function remove(idRiga) {
    let row = document.getElementById(idRiga);
    row.remove();
}

function search() {
    let tabella = document.getElementById("tabella").children;
    let cognome = document.getElementById("cognome").value;
    let numero = document.getElementById("numero").value;
    
    for(let i = 0; i < tabella.length; i++) {
        if((tabella[i].children[0].textContent == cognome) && (tabella[i].children[3].textContent == numero)) {
            index = i;
        }
    }

    if(index != -1) {
        document.getElementById('cognome').value = tabella[index].children[0].textContent;
        document.getElementById('nome').value = tabella[index].children[1].textContent;
        document.getElementById('indirizzo').value = tabella[index].children[2].textContent;
        document.getElementById('numero').value = tabella[index].children[3].textContent;
    }
}

function update() {
    let tabella = document.getElementById("tabella").children;
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let indirizzo = document.getElementById('indirizzo').value;
    let numero = document.getElementById('numero').value;

    tabella[index].children[0].textContent = cognome;
    tabella[index].children[1].textContent = nome;
    tabella[index].children[2].textContent = indirizzo;
    tabella[index].children[3].textContent = numero;

    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("numero").value = "";
}