function modifica_stile() {
    let titoli1 = document.getElementsByTagName("h1");

    for(let i = 0; i < titoli1.length; i++) {
        titoli1[i].style.color = "red";
    }

    let titoli2 = document.getElementsByTagName("h2");

    for(let i = 0; i < titoli2.length; i++) {
        titoli2[i].style.color = "blue";
        titoli2[i].style.backgroundColor = "yellow";
        titoli2[i].style.fontSize = "40px";
        titoli2[i].innerText = titoli2[i].textContent.toUpperCase();
    }

    let par1 = document.getElementById("par1");
    par1.style.color = "red";

    let par4 = document.getElementById("par4");
    par4.style.color = "red";

    let par2 = document.getElementById("par2");
    par2.style.backgroundColor = "lightgreen";
    
    let par5 = document.getElementById("par5");
    par5.style.backgroundColor = "lightgreen";

    let par8 = document.getElementById("par8");
    par8.style.backgroundColor = "lightgreen";

    let par3 = document.getElementById("par3");
    par3.style.backgroundColor = "lightblue";
    par3.innerText = par3.textContent.toUpperCase();

    let par6 = document.getElementById("par6");
    par6.innerText = par6.textContent.toUpperCase();

    let par7 = document.getElementById("par7");
    par7.style.fontFamily = "italico";
}