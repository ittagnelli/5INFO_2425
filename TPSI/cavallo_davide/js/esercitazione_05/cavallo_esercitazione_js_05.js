let buttonAdd = document.getElementById('add');
let buttonChange = document.getElementById('change');

buttonAdd.addEventListener('click', add);
buttonChange.addEventListener('click', change);

function add() {
    let table = document.getElementById("tableAdd")
    let nome = document.getElementById("nome").value 
    let media = document.getElementById("media").value
    const tr = document.createElement("tr")
    let cellNome = document.createElement("td")
    cellNome.innerText = nome
    let cellMedia = document.createElement("td")
    cellMedia.innerText = media
    tr.append(cellNome, cellMedia)
    table.append(tr)
}

function change() {
    let table = document.getElementById("tableAdd").children

    for (let index = 0; index < table.length; index++) {
        if(((index + 1 )% 2) == 0) {
            table[index].children[0].style.color = "blue"
            table[index].children[1].style.color = "blue"
        }
        
    }
}
