let buttonAdd = document.getElementById("add");
let buttonChange = document.getElementById("change");
let buttonBold = document.getElementById("bold");
let buttonBlu = document.getElementById("blu");
let buttonBord = document.getElementById("bord");

buttonAdd.addEventListener("click", add);
buttonChange.addEventListener("click", change);
buttonBold.addEventListener("click", bold);
buttonBlu.addEventListener("click", blu);
buttonBord.addEventListener("click", bord);

function add() {
	let table = document.getElementById("tableAdd");
	let nome = document.getElementById("nome").value;
	let media = document.getElementById("media").value;
	const tr = document.createElement("tr");

	const tdNome = document.createElement("td");
	tdNome.innerText = nome;

	const tdMedia = document.createElement("td");
	tdMedia.innerText = media;
	tr.append(tdNome, tdMedia);
	table.append(tr);
}

function change() {
	let row = document.getElementById("tableAdd").children;

	for (let index = 0; index < row.length; index++) {
		if (index % 2 == 0) {
			row[index].children[0].style.color = "red";
			row[index].children[1].style.color = "red";
		}
	}
}

function bold() {
	let all = document.getElementById("tableAdd");
	all.classList.add("bold");
}

function blu() {
	let all = document.getElementById("tableAdd");
	all.classList.add("blu");
}

function bord() {
	let list = document.getElementById("list");
	list.classList.toggle("bord");
}
