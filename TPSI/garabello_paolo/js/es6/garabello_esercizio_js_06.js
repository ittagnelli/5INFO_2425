function inserisci() {
    let row = document.createElement("tr");
    let nome = document.createElement("td")
    nome.innerText = document.getElementById("nome").value;
    row.append(nome);
    let media = document.createElement("td")
    media.innerText = document.getElementById("media").value;
    row.append(media);
    document.getElementById("tabella").append(row);
}

function colore() {
    let rows = document.getElementsByTagName("tr");
    let pari = true;
    for (let row of rows) {
        if(pari) {
            row.classList.remove("rosso");
            row.classList.add("blu");
        }
        else {
            row.classList.add("blu");
            row.classList.add("rosso");
        }
        pari = !pari;
    }
}

function bordo() {
    let table = document.getElementById("tabella");
    table.classList.toggle("bordo");
}

function grassetto() {
    let rows = document.getElementsByTagName("tr");
    for (let row of rows) {
        row.classList.add("bold");
    }
}

function blu() {
    let rows = document.getElementsByTagName("tr");
    for (let row of rows) {
        row.classList.remove("rosso")
        row.classList.add("blu");
    }
}