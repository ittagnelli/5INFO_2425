var aggiungiButton = document.getElementById('aggiungiStudente');
var coloraButton = document.getElementById('coloraTabella');
aggiungiButton.onclick = addStudente;
coloraButton.onclick = cambiaColore;

function addStudente() {
    var nome = document.getElementById("nome").value;
    var voto = document.getElementById("voto").value;
    var table = document.getElementById("studenti");
    var newRow = table.insertRow(); 
    var cellNome = newRow.insertCell(0);  
    var cellVoto = newRow.insertCell(1);  

    cellNome.innerHTML = nome;  
    cellVoto.innerHTML = voto; 
}

function cambiaColore() {
    var righe = document.getElementById("studenti").getElementsByTagName("tr");  

    for (var i = 1; i < righe.length; i++) {  
        if (i % 2 === 0) {
            righe[i].style.backgroundColor = "blue"; 
        } else {
            righe[i].style.backgroundColor = "red"; 
        }
    }
}