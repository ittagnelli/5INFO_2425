function aggiungi (event) {
    event.preventDefault()
    console.log("aggiunto")
    const nome = document.getElementById("nome")
    const media = document.getElementById("media")
    console.log(nome.value, media.value)
    const tr = document.createElement("tr")
    const td_nome = document.createElement("td")
    const td_media = document.createElement("td")
    td_nome.innerText = nome.value
    td_media.innerText = media.value
    tr.append(td_nome, td_media)
    const tbody = document.getElementById("medie")
    tbody.append(tr)
}

function colora () {
    const tbody = document.getElementById("medie")
    for (let i = 0; i < tbody.children.length; i++) {
        if (i%2 == 0) {
            tbody.children[i].style.backgroundColor = "blue"
        }
        else{
            tbody.children[i].style.backgroundColor = "red"
        }
    }
}

const bottone_colora = document.getElementById("colora")
bottone_colora.addEventListener("click", colora)

const form = document.getElementById("form")
form.addEventListener("submit", aggiungi)