const btn_aggiungi = document.getElementById("aggiungi");
let products = [];

function aggiungi() {
    const productName = document.getElementById("prodoo").value;
    const quantity = parseInt(document.getElementById("qty").value);
    const unitCost = parseFloat(document.getElementById("costo").value);

    if (!productName || quantity < 1 || isNaN(quantity) || isNaN(unitCost)) {
        alert("Compila tutti i campi e assicurati che la quantità sia almeno 1!");
        return;
    }

    const totalCost = quantity * unitCost;

    products.push({ name: productName, quantity: quantity, unitCost: unitCost, totalCost: totalCost });

    aggiornaCarrello();

    document.getElementById("prodoo").value = '';
    document.getElementById("qty").value = '1';
    document.getElementById("costo").value = '1';
}

function aggiornaCarrello() {
    const cartTable = document.getElementById("carrello");
    const rows = cartTable.getElementsByTagName("tr");

    for (let i = rows.length - 2; i > 0; i--) {
        cartTable.deleteRow(i);
    }

    let grandTotal = 0;

    products.forEach((product, index) => {
        const nuovaRiga = cartTable.insertRow(-1);
        nuovaRiga.insertCell(0).innerText = product.name;

        const qtyCell = nuovaRiga.insertCell(1);
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.min = '1';
        qtyInput.value = product.quantity;
        qtyInput.onchange = () => aggiornaQuantita(index, qtyInput.value);
        qtyCell.appendChild(qtyInput);
        
        nuovaRiga.insertCell(2).innerText = `${product.unitCost.toFixed(2)} €`;
        nuovaRiga.insertCell(3).innerText = `${product.totalCost.toFixed(2)} €`;

        const removeCell = nuovaRiga.insertCell(4);
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Rimuovi';
        removeBtn.onclick = () => rimuoviProdotto(index);
        removeCell.appendChild(removeBtn);

        grandTotal += product.totalCost;
    });

    document.getElementById("totale").innerText = `${grandTotal.toFixed(2)} €`;
}

function aggiornaQuantita(index, newQuantity) {
    const quantity = parseInt(newQuantity);
    if (quantity < 1) {
        alert("La quantità deve essere almeno 1.");
        return;
    }
    
    const product = products[index];
    product.quantity = quantity;
    product.totalCost = product.unitCost * product.quantity;

    aggiornaCarrello();
}

function rimuoviProdotto(index) {
    products.splice(index, 1);
    aggiornaCarrello();
}

btn_aggiungi.addEventListener("click", aggiungi);