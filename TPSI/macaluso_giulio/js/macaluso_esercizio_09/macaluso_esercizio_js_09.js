let tabella = document.getElementById('paghe');
let buttonAdd = document.getElementById('add');

let idRiga = -1;

buttonAdd.addEventListener('click', add);


function add() {
    const tr = document.createElement("tr");
    const cellaDipartimento = document.createElement("td");
    const cellaCognome = document.createElement("td");
    const cellaNome = document.createElement("td");
    const cellaMese = document.createElement("td");
    const cellaImporto = document.createElement("td");

    let dipartimento = document.getElementById('dipartimento').value;
    let cognome = document.getElementById('cognome').value;
    let nome = document.getElementById('nome').value;
    let mese = document.getElementById('mese').value;
    let importo = document.getElementById('importo').value;

    if (dipartimento == "" || cognome == "" || nome == "" || mese == "" || importo == "") {
        alert("Hei! Compila i maledetti campi!");
    } else {
        tr.id = idRiga++;

        cellaDipartimento.innerText = dipartimento;
        cellaCognome.innerText = cognome;
        cellaNome.innerText = nome;
        cellaMese.innerText = mese;
        cellaImporto.innerText = importo;
        
        tr.append(cellaDipartimento, cellaCognome, cellaNome, cellaMese, cellaImporto);
        tabella.append(tr);
    
        if (idRiga >= 1) {
            let buttonSomma = document.getElementById('somma');
            buttonSomma.addEventListener('click', somma);
            let buttonMedia = document.getElementById('media');
            buttonMedia.addEventListener('click', media);
        }
    }
}

function somma() {
    let totale = 0;
    let table = tabella.children;
    let cellaTotale = document.getElementById('tot');

    for (let i = 2; i < table.length; i++) {
        totale +=  parseInt(table[i].children[4].innerText);
    }
    
    cellaTotale.innerText = totale;
}

function media() {
    let averenge = 0;
    let table = tabella.children;
    let cellaMedia = document.getElementById('med');

    for (let i = 2; i < table.length; i++) {
        averenge +=  parseInt(table[i].children[4].innerText);
    }

    averenge = averenge / (idRiga + 1);

    averenge = averenge * 100;

    averenge = parseInt(averenge);

    averenge = averenge / 100;
    
    cellaMedia.innerText = averenge;
}