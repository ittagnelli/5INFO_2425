document.addEventListener('DOMContentLoaded', () => {
    const cognomeInput = document.getElementById('cognomeInput');
    const nomeInput = document.getElementById('nomeInput');
    const indirizzoInput = document.getElementById('indirizzoInput');
    const telefonoInput = document.getElementById('telefonoInput');
    const salvaButton = document.getElementById('salvaButton');
    const aggiungiButton = document.getElementById('aggiungiButton');
    const aggiornaButton = document.getElementById('aggiornaButton');
    const cercaButton = document.getElementById('cercaButton');
    const alertMessage = document.getElementById('alertMessage');
    const rubricaTable = document.getElementById('rubricaTable');

    let selectedRow = null;

    function resetForm() {
        cognomeInput.value = '';
        nomeInput.value = '';
        indirizzoInput.value = '';
        telefonoInput.value = '';
        selectedRow = null;
        aggiornaButton.style.display = 'none';
        salvaButton.style.display = 'inline';
    }

    aggiungiButton.addEventListener('click', () => {
        if (cognomeInput.value && nomeInput.value && indirizzoInput.value && telefonoInput.value) {
            const newRow = rubricaTable.insertRow();
            newRow.innerHTML = `
                <td>${cognomeInput.value}</td>
                <td>${nomeInput.value}</td>
                <td>${indirizzoInput.value}</td>
                <td>${telefonoInput.value}</td>
                <td><button class="modificaButton">Modifica</button></td>
                <td><button class="rimuoviButton">Rimuovi</button></td>
            `;
            resetForm();
        } else {
            alertMessage.textContent = 'Tutti i campi devono essere compilati!';
        }
    });

    rubricaTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('rimuoviButton')) {
            const row = event.target.closest('tr');
            rubricaTable.deleteRow(row.rowIndex);
        }
    });

    cercaButton.addEventListener('click', () => {
        const cognomeRicerca = cognomeInput.value.toLowerCase();
        const telefonoRicerca = telefonoInput.value;
        for (let i = 1; i < rubricaTable.rows.length; i++) {
            const row = rubricaTable.rows[i];
            const cognomeCell = row.cells[0].textContent.toLowerCase();
            const telefonoCell = row.cells[3].textContent;
            if (cognomeCell === cognomeRicerca || telefonoCell === telefonoRicerca) {
                selectedRow = row;
                cognomeInput.value = row.cells[0].textContent;
                nomeInput.value = row.cells[1].textContent;
                indirizzoInput.value = row.cells[2].textContent;
                telefonoInput.value = row.cells[3].textContent;
                aggiornaButton.style.display = 'inline';
                salvaButton.style.display = 'none';
                break;
            }
        }
    });

    aggiornaButton.addEventListener('click', () => {
        if (selectedRow) {
            selectedRow.cells[0].textContent = cognomeInput.value;
            selectedRow.cells[1].textContent = nomeInput.value;
            selectedRow.cells[2].textContent = indirizzoInput.value;
            selectedRow.cells[3].textContent = telefonoInput.value;
            resetForm();
        }
    });

    salvaButton.addEventListener('click', () => {
        alertMessage.textContent = 'Per aggiornare un contatto, usa il pulsante "Aggiungi Contatto".';
    });
});