const btn_aggiungi = document.getElementById("aggiungi");
const btn_somma = document.getElementById("somma");
const btn_media = document.getElementById("media");

function aggiungi() {
    const dipartimento = document.getElementById("dipartimento").value;
    const cognome = document.getElementById("cognome").value;
    const nome = document.getElementById("nome").value;
    const mese = document.getElementById("mese").value;
    const importo = document.getElementById("importo").value;

    if (!dipartimento || !cognome || !nome || !mese || !importo) {
        alert("Compila tutti i campi!");
        return;
    }

    const modelloRiga = document.getElementById("template-row");
    const nuovaRiga = modelloRiga.cloneNode(true);
    nuovaRiga.style.display = "";
    nuovaRiga.classList.add("entry");

    nuovaRiga.querySelector(".dipartimento").innerText = dipartimento;
    nuovaRiga.querySelector(".cognome").innerText = cognome;
    nuovaRiga.querySelector(".nome").innerText = nome;
    nuovaRiga.querySelector(".mese").innerText = mese;
    nuovaRiga.querySelector(".importo").innerText = parseFloat(importo).toFixed(2);

    document.getElementById("entrypoint").before(nuovaRiga);
}

function somma() {
    const importi = document.querySelectorAll(".entry .importo");
    if (importi.length < 2) {
        alert("Aggiungi almeno due paghe per calcolare il totale.");
        return;
    }

    let totale = 0;
    importi.forEach(td => totale += parseFloat(td.innerText));
    document.querySelector(".totale").innerText = `${totale.toFixed(2)} €`;
}

function media() {
    const importi = document.querySelectorAll(".entry .importo");
    if (importi.length < 2) {
        alert("Aggiungi almeno due paghe per calcolare la media.");
        return;
    }

    let totale = 0;
    importi.forEach(td => totale += parseFloat(td.innerText));
    const media = totale / importi.length;
    document.querySelector(".media").innerText = `${media.toFixed(2)} €`;
}

btn_aggiungi.addEventListener("click", aggiungi);
btn_somma.addEventListener("click", somma);
btn_media.addEventListener("click", media);