function aggiunta_elemento(evento) {
    evento.preventDefault();
    const tabella = document.getElementById("todos");
    const riga = document.createElement("tr");
    const td_descrizione = document.createElement("td");
    const td_priority = document.createElement("td");
    const td_check = document.createElement("td");
    const td_remove = document.createElement("td");
    
    td_descrizione.innerText = document.getElementById("descrizione").value;
    td_priority.innerHTML = FRECCE[document.getElementById("priorita").value];
    td_check.innerHTML = "&check;";
    td_remove.innerHTML = "&#x1F5D1;";

    td_descrizione.id = "descrizione-" + Date.now();
    riga.id = "riga-" + Date.now();

    td_check.dataset.id = td_descrizione.id;
    td_check.addEventListener("click", completato);

    td_remove.dataset.id = riga.id;
    td_remove.addEventListener("click", rimuovi);

    riga.append(td_descrizione, td_priority, td_check, td_remove);
    tabella.append(riga);
}

function completato(evento) {
    document.getElementById(evento.target.dataset.id).classList.toggle('barrato');
}

function rimuovi(evento) {
    document.getElementById(evento.target.dataset.id).remove();
}

const FRECCE = ["&darr;", "&rarr;", "&uarr;"];


const bottone_invio = document.getElementById("invio");
bottone_invio.addEventListener("click", aggiunta_elemento);