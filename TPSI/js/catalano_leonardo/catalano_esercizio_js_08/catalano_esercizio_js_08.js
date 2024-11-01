let buttonAdd = document.getElementById('pulsanteAggiungi');
let listaTodo = document.getElementById('listaTodo');
let idRiga = 0;

buttonAdd.addEventListener('click', aggiungi);

function aggiungi() {
    const testoTodo = document.getElementById('inputTodo').value;
    const testoPriorita = document.getElementById('selettorePriorita').value;


    if (!testoTodo || !testoPriorita) {
        alert("completa  i campi ");
        return;
    }


    const riga = document.createElement("tr");
    riga.id = idRiga++;


    const cellaTodo = creaCella(testoTodo);
    const cellaPriorita = creaCella(testoPriorita);


    cellaPriorita.classList.add(testoPriorita);


    const pulsanteCompleta = creaPulsante("Completa", () => barraCompletato(cellaTodo));
    const pulsanteElimina = creaPulsante("Elimina", () => riga.remove());
    const cellaAzioni = aggiungiCella(pulsanteCompleta);
    const cellaAzioniElimina = aggiungiCella(pulsanteElimina);


    riga.append(cellaTodo, cellaPriorita, cellaAzioni, cellaAzioniElimina);
    listaTodo.append(riga);


    document.getElementById('inputTodo').value = '';
    document.getElementById('selettorePriorita').value = '';
}

function creaCella(testo) {
    const cella = document.createElement("td");
    cella.innerText = testo;
    return cella;
}

function creaPulsante(testo, onClick) {
    const pulsante = document.createElement("button");
    pulsante.innerText = testo;
    pulsante.addEventListener('click', onClick);
    return pulsante;
}

function barraCompletato(cellaTodo) {
    cellaTodo.classList.toggle("completato");
}

function aggiungiCella(elemento) {
    const cella = document.createElement("td");
    cella.appendChild(elemento);
    return cella;
}
