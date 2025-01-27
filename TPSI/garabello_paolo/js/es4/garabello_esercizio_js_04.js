function modifica_stile() {
    for (let h1 of (document.getElementsByTagName("h1"))) {
       h1.style.color = "red";
    };
    for (let h2 of (document.getElementsByTagName("h2"))) {
       h2.style.color = "blue";
       h2.style.backgroundColor = "yellow";
       h2.style.fontSize = "40px";
       h2.innerText = h2.innerText.toUpperCase();
    };
    for (let red of (document.getElementsByName("rosso"))) {
       red.style.color = "red";
    };
    for (let green of (document.getElementsByName("verde"))) {
       green.style.backgroundColor = "lightGreen";
    };
    let terzo = document.getElementById("par3")
    terzo.style.color = "lightBlue";
    terzo.innerText = terzo.innerText.toUpperCase();
    let sesto = document.getElementById("par6");
    sesto.innerText = sesto.innerText.toUpperCase();
    document.getElementById("par7").style.fontStyle     = "italic";
}