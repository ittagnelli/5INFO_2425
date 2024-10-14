let buttonSave = document.getElementById('add');

buttonSave.addEventListener('click', add);

var num = 0;

function add() {
    let tabella = document.getElementById('tabella');
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let indirizzo = document.getElementById('indirizzo').value;
    let numero = document.getElementById('numero').value;

    const tr = document.createElement("tr");

    const cellaNome = document.createElement("td");
    cellaNome.innerText = nome;

    const cellaCognome = document.createElement("td");
    cellaCognome.innerText = cognome;

    const cellaIndirizzo = document.createElement("td");
    cellaIndirizzo.innerText = indirizzo;

    const cellaNumero = document.createElement("td");
    cellaNumero.innerText = numero;

    const cellaPulsante = document.createElement("td");
    const pulsante = document.createElement("button");
    pulsante.innerText = "Rimuovi";

    let idRiga = "remove" + num;
    
    tr.id = idRiga;

    pulsante.addEventListener('click', () => {remove(idRiga)});
    num = num + 1;

    cellaPulsante.append(pulsante);

    tr.append(cellaCognome, cellaNome, cellaIndirizzo, cellaNumero, cellaPulsante);
    tabella.append(tr); 
    let cognome = document.getElementById('cognome').value;
}

function remove(idRiga){
    let row = document.getElementById(idRiga);
    row.remove();
}   

function search() {
    let tabella = document.getElementById("tabella").children;
    let cognome = document.getElementById("cognome").value;
    let numero = document.getElementById("numero").value;
    let inputSelection = document.getElementById("inputx");
    let index = -1;

    for(let i = 0; i < tabella.length; i++){

        if((tabella[i].children[0].textContent == cognome) && (tabella[i].children[3].textContent == numero)){
            index = i;
        }
    }

    if(index != -1){
        let nome = document.getElementById('nome').value = tabella[index].children[0].textContent;
        let cognome = document.getElementById('cognome').value = tabella[index].children[1].textContent;
        let indirizzo = document.getElementById('indirizzo').value = tabella[index].children[2].textContent;
        let numero = document.getElementById('numero').value = tabella[index].children[3].textContent;
    }
}
