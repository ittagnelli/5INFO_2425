document.addEventListener('DOMContentLoaded', function() {
    const carrello = document.getElementById('carrello');
    const prodotti = [];
    
    function aggiornaTotaleCarrello() {
        let totale = prodotti.reduce((acc, prod) => acc + prod.quantità * prod.costo, 0);
        document.querySelector('#carrello tr:last-child td:last-child').textContent = `${totale.toFixed(2)} €`;
    }

    function aggiungiProdotto(nome, quantità, costo) {
        if (!nome || quantità < 1 || costo < 1) return;

        const prodotto = { nome, quantità: parseInt(quantità), costo: parseFloat(costo) };
        prodotti.push(prodotto);

        const riga = document.createElement('tr');
        riga.innerHTML = `
            <td>${nome}</td>
            <td><input type="number" min="1" value="${quantità}" /></td>
            <td>${costo.toFixed(2)} €</td>
            <td class="importo">${(quantità * costo).toFixed(2)} €</td>
            <td><span class="material-icons icon-remove">remove_shopping_cart</span></td>
        `;
        carrello.insertBefore(riga, carrello.querySelector('tr:last-child'));

        const qtyInput = riga.querySelector('input[type="number"]');
        qtyInput.addEventListener('change', () => {
            prodotto.quantità = parseInt(qtyInput.value) || 1;
            riga.querySelector('.importo').textContent = `${(prodotto.quantità * prodotto.costo).toFixed(2)} €`;
            aggiornaTotaleCarrello();
        });

        riga.querySelector('.icon-remove').addEventListener('click', () => {
            carrello.removeChild(riga);
            prodotti.splice(prodotti.indexOf(prodotto), 1);
            aggiornaTotaleCarrello();
        });

        aggiornaTotaleCarrello();
    }

    document.getElementById('add').addEventListener('click', () => {
        const nome = document.getElementById('prodoo').value;
        const quantità = document.getElementById('qty').value;
        const costo = parseFloat(document.getElementById('costo').value);
        aggiungiProdotto(nome, quantità, costo);
    });

    document.querySelector('.icon.functions').addEventListener('click', aggiornaTotaleCarrello);
});
