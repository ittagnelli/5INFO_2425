document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inserisciDati');
    const tabella = document.getElementById('tabella');
    let fareshybutton = document.getElementById('fareshy');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const punteggio = parseInt(document.getElementById('punteggio').value);

        aggiungiRigaTabella(nome, punteggio);
    });

    function aggiungiRigaTabella(nome, punteggio) {
        const riga = document.createElement('tr');
        riga.innerHTML = `
            <td>${nome}</td>
            <td>${punteggio}</td>
            <td></td>
        `;
        tabella.querySelector('tbody').appendChild(riga);
    }

    fareshybutton.addEventListener('click', fareshy2);

    function fareshy2() {
        const righe = tabella.querySelectorAll('tbody tr');
        righe.forEach((riga, index) => {
            const cella = riga.querySelector('td:nth-child(3)');
            if (index % 2 === 0) {
                cella.classList.add('pari');
            } else {
                cella.classList.add('dispari');
            }
        });
    }
});
