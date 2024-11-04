function getDipartimento() {
    return document.getElementById("dipartimento");
}

function getDipartimentoValue() {
    return getDipartimento().value;
}

function getCognome() {
    return document.getElementById("cognome");
}

function getCognomeValue() {
    return getCognome().value;
}

function getNome() {
    return document.getElementById("nome");
}

function getNomeValue() {
    return getNome().value;
}

function getMese() {
    return document.getElementById("mese");
}

function getMeseValue() {
    return getMese().value;
}

function getImporto() {
    return document.getElementById("importo");
}

function getImportoValue() {
    return getImporto().value;
}

function checkValues() {
    return (!getDipartimentoValue() && 
        !getCognomeValue() && 
        !getNomeValue() && 
        !getImportoValue());
}   

function clean() {
    getDipartimento().value = "";
    getCognome().value = "";
    getNome().value = "";
    getImporto().value = "";
    getMese().value = "";
}

function add() {
    if(checkValues()) {
        alert("tutti i campi devo essere compilati");
        return;
    }
    const tr = document.createElement("tr");
    const tdDiparitmento = document.createElement("td");
    const tdCognome = document.createElement("td");
    const tdNome = document.createElement("td");
    const tdMese = document.createElement("td");
    const tdImporto = document.createElement("td");
    const table = document.getElementById("body");

    tdDiparitmento.innerText = getDipartimentoValue();
    tdCognome.innerText = getCognomeValue();
    tdNome.innerText = getNomeValue();
    tdMese.innerText = getMeseValue();
    tdImporto.innerText = getImportoValue();

    tr.append(tdDiparitmento, tdCognome, tdNome, tdMese, tdImporto);
    table.insertBefore(tr, table.childNodes[4]);
    clean();
}

function removeClass(list, name) {
    Array.from(list).forEach(element => {
        element.classList.remove(`${name}`);
    });
}

function sum() {
    const td = document.getElementById("sum");
    const table = document.getElementById("body");
    const list = document.getElementsByClassName("h-sum");
    if(table.childNodes.length < 19)
        return;

    removeClass(list, "h-sum");
    let sum = 0;
    
    for(let i = 4; i < (table.childNodes.length-13); i++) {
        sum += Number(table.childNodes[i].childNodes[4].innerText);
    }
    td.innerHTML = `${sum} &euro;`;
}

function average() {
    const td = document.getElementById("average");
    const table = document.getElementById("body");
    const list = document.getElementsByClassName("h-average");
    if(table.childNodes.length < 19)
        return;

    removeClass(list, "h-average");
    
    let sum = 0;
    let average = 0;
    
    for(let i = 4; i < (table.childNodes.length-13); i++) {
        sum += Number(table.childNodes[i].childNodes[4].innerText);
        average = sum / (i-3);
    }
    td.innerHTML = `${average.toFixed(2)} &euro;`;
}