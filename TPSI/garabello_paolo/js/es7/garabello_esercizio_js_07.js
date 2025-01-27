let id = 0;
const DATI = ["Cognome", "Nome", "Indirizzo", "Telefono"];

function clean() {
    for (let dato of DATI) {
        document.getElementById(dato).value = "";
    }
}
function validate(element) {
    if(element.value == "") {
        alert("Devi inserire tutti i campi")
        return false;
    }
    return true;
}

function rimuovi(givenid) {
    document.getElementById(givenid).remove();
}

function salva() {
    let row = document.createElement("tr");
    const id_tr = id;

    for (let dato of DATI) {
        let cred = document.getElementById(dato);
        if(!validate(cred))
            return;
        else {
            let td = document.createElement("td");
            td.innerText = cred.value;
            row.append(td);
        }
    }
    let td = document.createElement("td");
    let remove = document.createElement("button");
    remove.innerText = "rimuovi";
    remove.addEventListener("click", () => rimuovi(id_tr));
    td.setAttribute("colspan", 2);
    td.append(remove);
    row.append(td);
    row.setAttribute("id", id);
    id++;  
    document.getElementById("tabella").append(row);
    clean()
}

function cerca() {
    let Cognome = document.getElementById("Cognome").value;
    let numero = document.getElementById("Telefono").value;
    for(let i = 0; i <= (id-1); i++) {
        if(document.getElementById(`${i}`)) {
            if(document.getElementById(`${i}`).childNodes[0].innerText == Cognome) {
                let search = document.getElementById(`${i}`);
                search.remove()
                document.getElementById("tabella").prepend(search);
            }
            if(document.getElementById(`${i}`).childNodes[3].innerText == numero) {
                let search = document.getElementById(`${i}`);
                search.remove()
                document.getElementById("tabella").prepend(search);
            }
        }
    }
}

function update() {
    if(document.getElementById("tabella")) {
        let row = document.getElementById("tabella").childNodes[0].childNodes;
        for(let i = 0; i < 4; i++) {
            if(document.getElementById(DATI[i]).value != "")
                row[i].innerText = document.getElementById(DATI[i]).value;
        }
    }
    clean()
}