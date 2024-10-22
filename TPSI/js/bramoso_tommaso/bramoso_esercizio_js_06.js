function aggiungi(event) {
    event.preventDefault();
    console.log("aggiunto");
    const nome = document.getElementById("nome");
    const media = document.getElementById("media");
    console.log(nome.value, media.value);

    const tr = document.createElement("tr");
    const td_nome = document.createElement("td");
    const td_media = document.createElement("td");
    td_nome.innerText = nome.value;
    td_media.innerText = media.value;
    tr.append(td_nome, td_media);

    const tbody = document.getElementById("medie");
    tbody.append(tr);
}

function colora() {
    const tbody = document.getElementById("medie");
    for (let i = 0; i < tbody.children.length; i++) {
        if (i % 2 === 0) {
            tbody.children[i].style.backgroundColor = "blue";
        } else {
            tbody.children[i].style.backgroundColor = "red";
        }
    }
}

function toggleGrassetto() {
    const tbody = document.getElementById("medie");
    tbody.classList.toggle("bold");
}

function toggleBlue() {
    const tbody = document.getElementById("medie");
    tbody.classList.toggle("blue");
}

function toggleBordo() {
    const tbody = document.getElementById("medie");
    tbody.classList.toggle("bordered");
}

const bottone_colora = document.getElementById("colora");
bottone_colora.addEventListener("click", colora);

const bottone_grassetto = document.getElementById("grassetto");
bottone_grassetto.addEventListener("click", toggleGrassetto);

const bottone_blue = document.getElementById("blue");
bottone_blue.addEventListener("click", toggleBlue);

const bottone_bordo = document.getElementById("bordo");
bottone_bordo.addEventListener("click", toggleBordo);

const form = document.getElementById("form");
form.addEventListener("submit", aggiungi);