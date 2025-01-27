function getProdotto() {
    return document.getElementById("prodotto").value;
}

function getQuantita() {
    return parseInt(document.getElementById("quantita").value);
}

function getPrezzo() {
    return parseInt(document.getElementById("prezzo").value);
}

function pulisciCampi() {
    document.getElementById("prodotto").value = "";
    document.getElementById("quantita").value = "";
    document.getElementById("prezzo").value = "";
}

function aggiungi() {
    const prodotto = getProdotto();
    const quantita = getQuantita();
    const prezzo = getPrezzo();


    if (!prodotto || !quantita || !prezzo) {
        alert("Inserisci tutti i campi");
        return;
    }

    const tabella = document.getElementById("carrello");
    const tr = document.createElement("tr");
    tr.classList.add("item");
    const id = Date.now();
    tr.id = id;


    const tdProdotto = document.createElement("td");
    tdProdotto.innerText = prodotto;

    const tdQuantita = document.createElement("td");
    const inputQuantita = document.createElement("input");
    inputQuantita.type = "number";
    inputQuantita.min = 1;
    inputQuantita.value = quantita;
    inputQuantita.addEventListener("change", () => aggiornaRiga(id));
    tdQuantita.appendChild(inputQuantita);

    const tdPrezzo = document.createElement("td");
    tdPrezzo.innerText = `${prezzo}€`;

    const tdTotale = document.createElement("td");
    tdTotale.innerText = `${prezzo * quantita}€`;

    const tdRimuovi = document.createElement("td");
    const iconaRimuovi = document.createElement("span");
    iconaRimuovi.classList.add("material-icons", "icon-remove");
    iconaRimuovi.innerText = "remove_shopping_cart";
    iconaRimuovi.addEventListener("click", () => rimuoviRiga(id));
    tdRimuovi.appendChild(iconaRimuovi);


    tr.append(tdProdotto, tdQuantita, tdPrezzo, tdTotale, tdRimuovi);


    tabella.appendChild(tr);

    pulisciCampi();
    aggiornaTotale();
}
function aggiornaRiga(id) {
    const riga = document.getElementById(id);
    const quantita = parseInt(riga.querySelector("input").value);
    const prezzo = parseInt(riga.cells[2].innerText.replace("€", ""));

    riga.cells[3].innerText = `${prezzo * quantita}€`;
    aggiornaTotale();
}

function rimuoviRiga(id) {
    document.getElementById(id).remove();
    aggiornaTotale();
}

function aggiornaTotale() {
    const items = document.querySelectorAll(".item");
    let totale = 0;

    items.forEach(item => {
        totale += parseInt(item.cells[3].innerText.replace("€", ""));
    });

    document.getElementById("totale").innerText = `${totale}€`;
}
