document.getElementById('add').addEventListener('click', salva);
document.getElementById('somma').addEventListener('click', somma);
document.getElementById('media').addEventListener('click', media);

function dipartimentoObj() {
    return document.getElementById('dipartimento');
}

function cognomeObj() {
    return document.getElementById('cognome');
}

function nomeObj() {
    return document.getElementById('nome');
}

function meseObj() {
    return document.getElementById('mese');
}

function importoObj() {
    return document.getElementById('importo');
}

function getDipartimentoValue() {
    return dipartimentoObj().value;
}

function getCognomeValue() {
    return cognomeObj().value;
}

function getNomeValue() {
    return nomeObj().value;
}

function getMeseValue() {
    return meseObj().value;
}

function getImportoValue() {
    return importoObj().value;
}

function setDipartimentoValue(val) {
    dipartimentoObj().value = val;
}

function setCognomeValue(val) {
    cognomeObj().value = val;
}

function setNomeValue(val) {
    nomeObj().value = val;
}

function setMeseValue(val) {
    meseObj().value = val;
}

function setImportoValue(val) {
    importoObj().value = val;
}

function checkFields() {
    return !getDipartimentoValue() ||
        !getCognomeValue() ||
        !getNomeValue() ||
        !getMeseValue() ||
        !getImportoValue();
}

function clearInput() {
    setDipartimentoValue('');
    setCognomeValue('');
    setNomeValue('');
    setMeseValue('');
    setImportoValue('');
}

function createElement(el) {
    return document.createElement(el);
}

function createTd() {
    return createElement('td');
}

function createTr() {
    return createElement('tr');
}

function createButton() {
    return createElement('button');
}

function getTableRows() {
    return document.getElementsByTagName('tr');
}

function getRow(id) {
    return document.getElementById(id);
}

function salva() {
    if (checkFields() == true) {
        alert("Per cortesia riempi tutti i campi!!!");
    } else {
        let tabella = document.getElementById("paghe");
        let tr = createTr();
        let tdDipartimento = createTd();
        let tdCognome = createTd();
        let tdNome = createTd();
        let tdMese = createTd();
        let tdImporto = createTd();
        let tdButton = createTd();

        tdDipartimento.innerText = getDipartimentoValue();
        tdCognome.innerText = getCognomeValue();
        tdNome.innerText = getNomeValue();
        tdMese.innerText = getMeseValue();
        tdImporto.innerText = getImportoValue();
        tdButton.colSpan = 2;
        

        tr.append(tdDipartimento);
        tr.append(tdCognome);
        tr.append(tdNome);
        tr.append(tdMese);
        tr.append(tdImporto);
        tabella.append(tr);
        clearInput();
    }
}

function getImporto(tabella){
    let tot = 0
    for (let index = 2; index < tabella.length; index++) {
        tot +=  parseInt(  tabella[index].children[4].textContent)
    }

    return tot
}

function somma(){
    let tabella = document.getElementById("paghe").children
    let sommaLabel = document.getElementById("sommaLabel")
    
    if (tabella.length >= 4) {
        sommaLabel.textContent = getImporto(tabella)
    }
}

function media() {
    let tabella = document.getElementById("paghe").children;
    let sommaLabel = document.getElementById("mediaLabel");
    
    if (tabella.length >= 4) {
        sommaLabel.textContent = `${getImporto(tabella)/(tabella.length - 2)}`
    }
}
