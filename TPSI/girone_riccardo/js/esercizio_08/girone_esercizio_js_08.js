let buttonInsert = document.getElementById("add");
var id = 0;

buttonInsert.addEventListener("click", insert);

function insert() {
	id += 1;
	let table = document.getElementById("tableAdd");
	let titolo = document.getElementById("titolo").value;
	let priorita = document.getElementById("priorita").value;

	const tr = document.createElement("tr");
	tr.setAttribute("id", id);

	const tdTitolo = document.createElement("td");
	tdTitolo.innerText = titolo;

	const tdPriorita = document.createElement("td");
	tdPriorita.innerText = priorita;

	const buttonCheck = document.createElement("button");
	buttonCheck.innerText = "check";

	const buttonRemove = document.createElement("button");
	buttonRemove.innerText = "rimuovi";

	buttonRemove.addEventListener("click", () => remove(tr.id));
	buttonCheck.addEventListener("click", () => check(tr.id));

	tr.append(tdTitolo, tdPriorita, buttonCheck, buttonRemove);
	table.append(tr);
}

function remove(id) {
	let tr = document.getElementById(id);
	tr.remove();
}

function check(id) {
	let tr = document.getElementById(id);
	let tdTitolo = tr.querySelector("td");
	tdTitolo.classList.toggle("completed");
}
