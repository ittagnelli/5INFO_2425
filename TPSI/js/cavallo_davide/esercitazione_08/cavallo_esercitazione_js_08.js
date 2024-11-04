let buttonAdd = document.getElementById('add');
let tabella = document.getElementById('tabella');
let idRiga = -1;

buttonAdd.addEventListener('click', add);

function getPriorita(priorita, testoPriorita) {
    if (testoPriorita === "bassa") {
        return priorita.style.color = 'green';
    } else if (testoPriorita === "media") {
        return priorita.style.color = 'yellow';
    } else {
        return priorita.style.color = 'red';
    }
}

function add() {
    const tr = document.createElement("tr");
    const cellaTodo = document.createElement("td");
    const cellaPriorita = document.createElement("td");
    const cellaButtonCheck = document.createElement("td");

    const buttonCheck = document.createElement("button");
    buttonCheck.innerText = "Check";
    const cellaButtonDelete = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";

    cellaButtonCheck.append(buttonCheck);
    cellaButtonDelete.append(buttonDelete);

    let todo = document.getElementById('todo').value;
    let priorita = document.getElementById('selettore').value;

    let stato = false;
    
    tr.id = idRiga++;

    cellaTodo.innerText = todo;
    cellaPriorita.innerText = priorita;

    if (priorita === "bassa") {
        cellaPriorita.classList.add("bassa");
    } else if (priorita === "media") {
        cellaPriorita.classList.add("media");
    } else {
        cellaPriorita.classList.add("alta");
    }

    buttonCheck.addEventListener('click', function() {
        if (!stato) {
            cellaTodo.style.textDecoration = 'line-through';
            stato = true;
        } else {
            cellaTodo.style.textDecoration = 'none';
            stato = false;
        }
    })

    buttonDelete.addEventListener('click', function() {
        tr.remove();
    });
    
    tr.append(cellaTodo, cellaPriorita, cellaButtonCheck, cellaButtonDelete);
    tabella.append(tr);
}
