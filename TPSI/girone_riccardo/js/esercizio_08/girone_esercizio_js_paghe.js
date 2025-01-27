id = 0;

let table = document.getElementById("paghe");
let addButton = document.getElementById("add");
let totaleButton = document.getElementById("totale");

addButton.addEventListener("click", add);
totaleButton.addEventListener("click", totale);

function add() {
	id += 1;
	let dipartimento = document.getElementById("dipartimento").value;
	let cognome = document.getElementById("cognome").value;
	let nome = document.getElementById("nome").value;
	let mese = document.getElementById("mese").value;
	let importo = document.getElementById("importo").value;

	let tr = document.createElement("tr");
	tr.setAttribute("id", id);

	let tdDipartimento = document.createElement("td");
	tdDipartimento.innerText = dipartimento;
	let tdCognome = document.createElement("td");
	tdCognome.innerText = cognome;
	let tdNome = document.createElement("td");
	tdNome.innerText = nome;
	let tdMese = document.createElement("td");
	tdMese.innerText = mese;
	let tdImporto = document.createElement("td");
	tdImporto.innerText = importo;

	tr.append(tdDipartimento, tdCognome, tdNome, tdMese, tdImporto);
	table.append(tr);
}

function totale() {
	let somma = 0;
	let tabella = table.children;

	for (i = 2; i > tabella.lenght; i++) {
		somma += parseInt(tabella[i].children[4].innerText);
	}

	console.log(somma);
}
