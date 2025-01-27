let pulsanteAdd = document.getElementById("add");
let pulsanteSum = document.getElementById("sum");
let tabella = document.getElementById("tabella");
let prodotto = document.getElementById("prodotto");
let quantita = document.getElementById("qty");
let costo = document.getElementById("costo");

pulsanteAdd.addEventListener("click", add);
pulsanteSum.addEventListener("click", sum);

function calcolaImporto(quantita, costo) {
    return quantita * costo;
}

function add() {
    let tr = document.createElement("tr");
    let cellaProdotto = document.createElement("td");
    let cellaQuantita = document.createElement("input");
    cellaQuantita.type = "number";
    cellaQuantita.min = 1;
    let cellacosto = document.createElement("td");
    let cellaImporto = document.createElement("td");
    let cellaRemove = document.createElement("span");
    cellaRemove.classList.add("material-icons", "icon-remove");
    cellaRemove.textContent = "remove_shopping_cart";

    cellaProdotto.innerText = prodotto.value;
    cellaQuantita.value = quantita.value;
    cellacosto.innerText = costo.value;
    cellaImporto.innerText = calcolaImporto(quantita.value, costo.value);

    cellaQuantita.addEventListener("input", function() {
        cellaImporto.innerText = calcolaImporto(cellaQuantita.value, costo.value);
        sum();
    })

    cellaRemove.addEventListener("click", function() {
        tr.remove();
        sum();
    })

    tr.append(cellaProdotto, cellaQuantita, cellacosto, cellaImporto, cellaRemove);
    tabella.append(tr);
}

function sum() {
    let totale = 0;
    let table = tabella.children;
    let cellaTotale = document.getElementById('totale');

    for (let i = 0; i < table.length; i++) {
        totale +=  parseInt(table[i].children[3].innerText);
    }
    
    cellaTotale.innerText = totale;
}