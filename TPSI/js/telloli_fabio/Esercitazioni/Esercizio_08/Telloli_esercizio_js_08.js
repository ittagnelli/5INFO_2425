let add = document.getElementById('add')
var id = 0

add.addEventListener('click', salva)

function salva() {
    id = id + 1
    let todo = document.getElementById('todo').value
    let tabella = document.getElementById('tabella')
    let pry = document.getElementById('pry').value.toLowerCase()

    let tr = document.createElement("tr")
    tr.setAttribute("id", id)

    let tdTodo = document.createElement("td")
    let tdpry = document.createElement("td")
    let tdButton2 = document.createElement("button")
    let tdButton1 = document.createElement("button")

    tdTodo.innerText = todo
    tdpry.innerText = pry
    tdButton2.innerText = "check"
    tdButton1.innerText = "rimuovi"

    if (pry === "bassa") {
        tdpry.classList.add("bassa");
    } else if (pry === "media") {
        tdpry.classList.add("media");
    } else if (pry === "alta") {
        tdpry.classList.add("alta");
    }

    tdButton1.addEventListener('click', () => rimuovi(tr.id))
    tdButton2.addEventListener('click', () => check(tdTodo))

    tr.append(tdTodo, tdpry,tdButton2, tdButton1)
    tabella.append(tr)
}

function rimuovi(id) {
    let tr = document.getElementById(id);
    tr.remove()
}

function check(td) {
    td.classList.toggle("barrato")
}