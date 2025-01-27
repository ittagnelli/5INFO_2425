let buttonAdd = document.getElementById("add");

buttonAdd.addEventListener("click", add);

function add() {
	let tabella = document.getElementById("tabella");
	let nome = document.getElementById("nome").value;
	let voto = document.getElementById("voto").value;
	const tr = document.createElement("tr");

	const tdNome = document.createElement("td");
	tdNome.innerText = nome;
	const tdMedia = document.createElement("td");
	tdMedia.innerText = voto;
	tr.append(tdNome, tdMedia);
	tabella.append(tr);
}

function change() {
	let row = document.getElementById("tableAdd").children;

	for (let index = 0; index < row.length; index++) {
		if (index % 2 == 0) {
			row[index].children[0].styles.color = "red";
			row[index].children[1].styles.color = "red";
		}
	}
}
