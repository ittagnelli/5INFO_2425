document.addEventListener('DOMContentLoaded', function () {
    const addPulsante = document.getElementById("add")
    const tabella = document.querySelector("table")

    function GetToDo() {
        let testo = document.getElementById("inserimento");
        return testo.value
    }

    function GetPriority() {
        let prioritaText = document.getElementById("priorita")
        return prioritaText.value
    }

    function RimuoviToDo(pulsante) {
        pulsante.addEventListener('click', function () {
            const row = this.parentElement.parentElement;
            row.remove()
        })
    }

    function FattoToDo(pulsante) {
        pulsante.addEventListener('click', function () {
            const row = this.parentElement.parentElement
            td = row.querySelector("td:nth-child(1)")
            td.classList.toggle("fatto-format")
        })
    }


    // TODO: Iconcine
    addPulsante.addEventListener('click', function addToDo() {

        if (!GetToDo() || !GetPriority()) {
            alert("Compila tutti i campi")
        } else {
            const nuovalinea = document.createElement("tr")
            switch (GetPriority()) {
                case 'Bassa':
                    var priorita = '&#8595'
                    break;
                case 'Media':
                    var priorita = '&#8594'
                    break;
                case 'Alta':
                    var priorita = '&#8593'
                default:
                    break;
            }
            nuovalinea.innerHTML = `
             <td>${GetToDo()}</td>
             <td>${priorita}</td>
             <td colspan="2">
                <button class="fatto-btn">&#10004</button>
                <button class="rimuovi-btn">&#128465</button>
             </rd>
            `
            tabella.appendChild(nuovalinea)
            RimuoviToDo(nuovalinea.querySelector(".rimuovi-btn"));
            FattoToDo(nuovalinea.querySelector(".fatto-btn"));
        }
    })
})