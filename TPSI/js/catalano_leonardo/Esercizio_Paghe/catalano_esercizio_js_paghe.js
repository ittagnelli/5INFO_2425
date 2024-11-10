document.querySelector('.aggiungi').onclick = aggiungi;

function aggiungi() {
    var dipartimento = document.getElementById('dipartimento').value;
    var cognome = document.getElementById('cognome').value;
    var nome = document.getElementById('nome').value;
    var mese = document.getElementById('mese').value;
    var importo = parseFloat(document.getElementById('importo').value);

    if (dipartimento === '' || cognome === '' || nome === '' || mese === '' || isNaN(importo) || importo < 500) {
        alert('Compila i campi correttamente. Importo minimo 500 €');
        return;
    }

    var table = document.getElementById('paghe');
    var nuovaRiga = table.insertRow();

    var cellaDipartimento = nuovaRiga.insertCell(0);
    cellaDipartimento.textContent = dipartimento;

    var cellaCognome = nuovaRiga.insertCell(1);
    cellaCognome.textContent = cognome;

    var cellaNome = nuovaRiga.insertCell(2);
    cellaNome.textContent = nome;

    var cellaMese = nuovaRiga.insertCell(3);
    cellaMese.textContent = mese;

    var cellaImporto = nuovaRiga.insertCell(4);
    cellaImporto.textContent = importo.toFixed(2) + " €";
    cellaImporto.className = "importo";

    var inputDipartimento = document.getElementById('dipartimento');
    var inputCognome = document.getElementById('cognome');
    var inputNome = document.getElementById('nome');
    var inputMese = document.getElementById('mese');
    var inputImporto = document.getElementById('importo');

    inputDipartimento.value = '';
    inputCognome.value = '';
    inputNome.value = '';
    inputMese.value = '';
    inputImporto.value = '';

    var totale = 0;
    var righeImporto = document.querySelectorAll('.importo');

    for (var i = 0; i < righeImporto.length; i++) {
        var importoCorrente = righeImporto[i].textContent.replace(' €', '').trim();
        totale += parseFloat(importoCorrente);
    }

    var media = 0;  
    if (righeImporto.length > 0) {
        media = totale / righeImporto.length;
    }

    var totaleElement = document.getElementById('totale');
    var mediaElement = document.getElementById('media');

    totaleElement.textContent = totale.toFixed(2) + " €";
    mediaElement.textContent = media.toFixed(2) + " €";

    return;
}
