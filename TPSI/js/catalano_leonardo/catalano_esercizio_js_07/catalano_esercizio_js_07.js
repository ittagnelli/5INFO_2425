let button2 = document.getElementById('button2');
let button4 = document.getElementById('button4');
let button3 = document.getElementById('button3');
let button1 = document.getElementById('button1');

button2.addEventListener('click', salva)
button4.addEventListener('click', rimuoviRiga)
button1.addEventListener('click', cerca)
button3.addEventListener('click', aggiorna)


function salva() {
    var cognome = document.getElementById("cognome").value;
    var nome = document.getElementById("nome").value;
    var indirizzo = document.getElementById("indirizzo").value;
    var telefono = document.getElementById("telefono").value;

    if (cognome && nome && indirizzo && telefono) {
        var tabella = document.getElementById("rubrica");
        var nuovaRiga = tabella.insertRow();
        nuovaRiga.insertCell(0).innerHTML = cognome;
        nuovaRiga.insertCell(1).innerHTML = nome;
        nuovaRiga.insertCell(2).innerHTML = indirizzo;
        nuovaRiga.insertCell(3).innerHTML = telefono;

        var cellaRimuovi = nuovaRiga.insertCell(4);
        var pulsanteRimuovi = document.createElement('button');
        pulsanteRimuovi.textContent = 'Rimuovi';
        cellaRimuovi.appendChild(pulsanteRimuovi);

        pulsanteRimuovi.addEventListener('click', function () {
            rimuoviRiga(nuovaRiga);
        });
    } else {
        alert("Riempi i campi");
    }
}
function rimuoviRiga(riga) {

    const conferma = confirm("vuoi rimuoverlo");

    if (conferma) {
        riga.remove();
    }
}

function cerca() {
    var cognomeInput = document.getElementById("cognome").value;
    var tabella = document.getElementById("rubrica");
    var righe = tabella.getElementsByTagName("tr");

    for (let i = 1; i < righe.length; i++) { 
        let celle = righe[i].getElementsByTagName("td");
        let cognome = celle[0].innerHTML;

        if (cognome === cognomeInput) {
            righe[i].style.backgroundColor = "yellow"; 
            return;
        }
    }
    alert("non c'e' il congome");
}

function aggiorna() {
    var cognomeInput = document.getElementById("cognome").value;
    var nomeInput = document.getElementById("nome").value;
    var indirizzoInput = document.getElementById("indirizzo").value;
    var telefonoInput = document.getElementById("telefono").value;
    var tabella = document.getElementById("rubrica");
    var righe = tabella.getElementsByTagName("tr");

    for (let i = 1; i < righe.length; i++) {
        let celle = righe[i].getElementsByTagName("td");
        let cognome = celle[0].innerHTML;

        if (cognome === cognomeInput) {
            celle[1].innerHTML = nomeInput;
            celle[2].innerHTML = indirizzoInput;
            celle[3].innerHTML = telefonoInput;
            alert("contatto aggiornato");
            return;
        }
    }
    alert("non c'e'il cognome");

}