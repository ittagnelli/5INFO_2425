document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll(".inputx input");
    const [cognomeInput, nomeInput, indirizzoInput, telefonoInput] = inputFields;
    const salvaButton = document.getElementById("salva");
    const cercaButton = document.getElementById("cerca");
    const aggiornaButton = document.getElementById("aggiorna");
    const tabella = document.querySelector("table");
    
    let modifica = null;

    function cls() {
        inputFields.forEach(input => input.value = "");
    }

    salvaButton.addEventListener("click", function () {
        if (!cognomeInput.value || !nomeInput.value || !indirizzoInput.value || !telefonoInput.value) {
            console.log("compila tutto, fratm");
        } else {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${cognomeInput.value}</td>
                <td>${nomeInput.value}</td>
                <td>${indirizzoInput.value}</td>
                <td>${telefonoInput.value}</td>
                <td colspan="2">
                    <button class="rimuovi-btn">Rimuovi</button>
                </td>
            `;
            tabella.appendChild(newRow);
            fidatichefunge(newRow.querySelector(".rimuovi-btn"));
            cls();
        }
    });

    cercaButton.addEventListener("click", function () {
        const cognomeSearch = cognomeInput.value.toLowerCase();
        const telefonoSearch = telefonoInput.value;
        let trovato = false;

        tabella.querySelectorAll("tr").forEach(row => {
            const cognome = row.children[0].textContent.toLowerCase();
            const telefono = row.children[3].textContent;

            if (cognome === cognomeSearch || telefono === telefonoSearch) {
                trovato = true;
                cognomeInput.value = row.children[0].textContent;
                nomeInput.value = row.children[1].textContent;
                indirizzoInput.value = row.children[2].textContent;
                telefonoInput.value = row.children[3].textContent;
                modifica = row;
                row.classList.add("editing");
            } else {
                row.classList.remove("editing");
            }
        });

        if (!trovato) {
            console.log("404");
        }
    });

    aggiornaButton.addEventListener("click", function () {
        if (modifica) {
            modifica.children[0].textContent = cognomeInput.value;
            modifica.children[1].textContent = nomeInput.value;
            modifica.children[2].textContent = indirizzoInput.value;
            modifica.children[3].textContent = telefonoInput.value;
            modifica.classList.remove("editing");
            modifica = null;  
            cls();
        } else {
            alert("immagina non selezionare");
        }
    });

    function fidatichefunge(button) {
        button.addEventListener("click", function () {
            const row = this.parentElement.parentElement;
            row.remove();
        });
    }

    document.querySelectorAll(".rimuovi-btn").forEach(button => {
        fidatichefunge(button);
    });
});
