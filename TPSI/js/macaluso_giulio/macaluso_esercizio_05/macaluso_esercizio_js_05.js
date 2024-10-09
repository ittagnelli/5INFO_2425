let buttonAdd = document.getElementById('add');
let buttonChange = document.getElementById('change');

buttonAdd.addEventListener('click', add);
buttonChange.addEventListener('click', change);

function add() {
    let tabella = document.getElementById('tabella');
    let nome = document.getElementById('nome').value;
    let voto = document.getElementById('voto').value;
    const tr = document.createElement("tr");
    tr.innerHTML = "<tr> <td>" + nome + "</td> <td>" + voto + "</td> </tr>"
    tabella.append(tr);
}

function change() {
    let row = document.getElementById("tabella").children;

    for(let i = 0; i < row.length; i++) {
        if(i % 2 == 0) {
            row[i].children[0].style.color = "red";
            row[i].children[1].style.color = "red";
        }
    }
}