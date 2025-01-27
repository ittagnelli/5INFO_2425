function getInput() {
    return document.getElementById("input")
}

function getInputValue() {
    return getInput().value;
}

function getPriority() {
    return document.getElementById("priority");
}

function getPriorityValue() {
    return getPriority().value;
}

function setPriority() {
    const ARROWS = ["&darr;", "&rarr;", "&uarr;"];
    return ARROWS[getPriorityValue()];
}

function checkInput() {
    return getInputValue() == "";
}
function add() {
    if(checkInput()) {
        alert("Devi inserire tutti gli input");
        return; 
    }
    const li = document.getElementById("list");
    const tr = document.createElement("tr");
    const tdText = document.createElement("td");
    const tdPriority = document.createElement("td");
    const tdCheck = document.createElement("td");
    const checkButton = document.createElement("button");
    const tdRemove = document.createElement("td");
    const rmButton = document.createElement("button");
    rmButton.addEventListener("click", function() {
        tr.remove();
    }); 
    rmButton.innerHTML = "&#128465;";
    checkButton.addEventListener("click", function() {
        tdText.classList.toggle("line");
        checkButton.classList.toggle("color-0");
    })
    checkButton.innerHTML = "&#10004;";
    tdText.innerText = getInputValue();
    tdPriority.innerHTML = setPriority();
    tdPriority.classList.add(`color-${getPriorityValue()}`);
    tr.append(tdText);
    tr.append(tdPriority);
    tdCheck.append(checkButton);
    tr.append(tdCheck);
    tdRemove.append(rmButton);
    tr.append(tdRemove);
    li.append(tr);
}