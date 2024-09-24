function titoliPrimoLiv() {
	let titoloL1 = document.getElementById("titoloL1");
	titoloL1.style.color = "red";
}

function titoliSecondoLiv() {
	let titolo = document.getElementsByTagName("h2");

	for (let i = 0; i < titolo.length; i++) {
		titolo[i].style.color = "blue";
		titolo[i].style.backgroundColor = "yellow";
		titolo[i].style.fontSize = "40px";
		titolo[i].innerText = titolo[i].innerText.toUpperCase();
	}
}

function primoQuartoParagrafo() {
	document.getElementById("par1").style.color = "red";
	document.getElementById("par4").style.color = "red";
}

function secondoQuintoOttavoParagrafo() {
	document.getElementById("par2").style.backgroundColor = "lightgreen";
	document.getElementById("par5").style.backgroundColor = "lightgreen";
	document.getElementById("par8").style.backgroundColor = "lightgreen";
}

function terzoParagrafo() {
	let par3 = document.getElementById("par3");
	par3.style.backgroundColor = "lightblue";
	par3.style.textTransform = "uppercase";
}

function sestoParagrafo() {
	let par6 = document.getElementById("par6");
	par6.style.textTransform = "uppercase";
}

function settimoParagrafo() {
	let par7 = document.getElementById("par7");
	par7.style.fontStyle = "italic";
}

function modifica_stile() {
	titoliPrimoLiv();
	titoliSecondoLiv();
	primoQuartoParagrafo();
	secondoQuintoOttavoParagrafo();
	terzoParagrafo();
	sestoParagrafo();
	settimoParagrafo();
}

modifica_stile();
