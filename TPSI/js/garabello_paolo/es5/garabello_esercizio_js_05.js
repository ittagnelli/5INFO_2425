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
    console.log(rows);
    for (let row of rows) {
        if(pari)
            row.classList.add("blu")
        else 
            row.classList.add("rosso")
        pari = !pari;
    }
}