let addButton = document.getElementById("add");

addButton.addEventListener("click", add);

function add() {
	let table = document.getElementById("carrello");
	let prodotto = document.getElementById("prodotto").value;
	let quantita = document.getElementById("qty").value;
	let costo = document.getElementById("costo").value;

	let tr = document.createElement("tr");

	let tdProdotto = document.createElement("td");
	tdProdotto.innerText = prodotto;

	let tdQuantità = document.createElement("td");
	let input = document.createElement("input");
	input.type = "number";
	input.value = quantita;
	tdQuantità.append(input);

	let tdCosto = document.createElement("td");
	tdCosto.innerText = costo;

	let tdTot = document.createElement("td");
	tdTot.innerText = costoUnitario(quantita, costo);

	input.addEventListener("input", function () {
		tdTot.innerText = costoUnitario(quantita.value, costo.value);
	});

	tr.append(tdProdotto, tdQuantità, tdCosto, tdTot);
	table.append(tr);
}

function costoUnitario(quantita, costo) {
	console.log("test");
	return parseFloat(quantita) * parseFloat(costo);
}
