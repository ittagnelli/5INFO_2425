function modifica_stile() {
    let titoliPrimoLivello = document.getElementsByClassName("titoloL1")
    for(let i = 0; i < titoliPrimoLivello.length; i++) {
        titoliPrimoLivello[i].style.color = "red"
    }

    let titoliSecondoLivello = document.getElementsByClassName("titoloL2")
    for(let i = 0; i < titoliPrimoLivello.length; i++) {
        titoliSecondoLivello[i].style.color = "blue"
        titoliSecondoLivello[i].style.backgroundColor = "yellow"
        titoliSecondoLivello[i].style.fontSize = "40px"
        titoliSecondoLivello[i].innerText = titoliSecondoLivello[i].textContent.toUpperCase()
    }

    let paragrafi = document.getElementsByTagName("p")
    paragrafi[0].style.color = "red"
    paragrafi[3].style.color = "red"

    paragrafi[1].style.color = "green"
    paragrafi[4].style.color = "green"
    paragrafi[7].style.color = "green"

    paragrafi[2].style.color = "blue"

    paragrafi[5].innerText = paragrafi[5].textContent.toUpperCase()
    paragrafi[6].innerHTML = "<i>" + paragrafi[6] + "</i>"
}