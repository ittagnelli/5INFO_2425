let buttonAdd = document.getElementById('add');
let buttonChange = document.getElementById('change');

buttonAdd.addEventListener('click', add);
buttonChange.addEventListener('click', change);

function add() {
    let table = document.getElementById("tableAdd")
    let nome = document.getElementById("nome").value
    let media = document.getElementById("media").value
    const tr = document.createElement("tr");

    const tdNome = document.createElement('td');
    tdNome.innerText = nome

    const tdMedia = document.createElement('td');
    tdMedia.innerText = media
    tr.append(tdNome, tdMedia)
    table.append(tr)
}

function change() {
    let row = document.getElementById("tableAdd").children

    for (let index = 0; index < row.length; index++) {
        if((index % 2) == 0){
            row[index].children[0].style.color = "red"
            row[index].children[1].style.color = "red"
        }
    }

}