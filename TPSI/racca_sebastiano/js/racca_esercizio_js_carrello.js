const getData = () => {
  const dati = ["prodotto", "qty", "costo"];
  const res = {};

  dati.forEach((d) => {
    res[d] = document.getElementById(d);
  });

  return res;
};

const dataToArray = (data) => Object.values(data);

const checkAndGetData = () => {
  const data = getData();
  let already_warned = false;

  dataToArray(data).forEach((obj) => {
    if (!already_warned && !obj.value) {
      alert(`${obj.id} è richiesto`);
      already_warned = true;
    }
  });

  return already_warned ? false : data;
};

const createRow = () => {
  const tr = document.createElement("tr");
  tr.classList.add("cart-item");
  return tr;
};

const createQtyInput = (value, id) => {
  const input = document.createElement('input');
  input.id = `${id}-qty`;
  input.type = "number";
  input.min = 1;
  input.value = value;
  input.dataset.rowid = id;
  input.addEventListener('change', inputChange);
  return input;
}

const createRemoveButton = (id) => {
  const span = document.createElement('span');
  span.classList.add("material-icons", "icon-remove");
  span.innerText = "remove_shopping_cart";
  span.dataset.rowid = id;
  span.addEventListener('click', removeCartItem);
  return span;
}

const appendToTable = (data) => {
  const row = createRow();
  row.classList.add("cart-item");
  row.id = `cart-item-${Date.now()}`;

  dataToArray(data).forEach((d) => {
    const cell = row.insertCell();

    switch(d.id) {
      case "prodotto":
        cell.innerText = d.value;
        break;
      case "costo":
        cell.innerHTML = `${d.value} &euro;`;
        cell.id = `${row.id}-costo`;
        break;
      case "qty":
        cell.append(createQtyInput(d.value, row.id));
        break;
    }
  });
  

  getTabella().childNodes[1].insertBefore(row, getCartEntryPoint());

  const tot = row.insertCell();
  tot.classList.add('importo');
  tot.id = `${row.id}-tot`;
  tot.innerHTML = getTotalItemCost(row.id);

  // Remove btn
  row.insertCell().append(createRemoveButton(row.id));
};

const aggiungi = () => {
  const data = checkAndGetData();
  
  if (!data) return;
  
  appendToTable(data);
}

const getTotalItemCost = (rowid) => {
  return `${document.getElementById(`${rowid}-qty`).value * parseFloat(document.getElementById(`${rowid}-costo`).innerText)} &euro;`;
}

const getTotalCost = () => {
  let tot = 0;
  [...document.getElementsByClassName("cart-item")].forEach(item => {
    console.log()
    tot += parseFloat(document.getElementById(`${item.id}-tot`).innerText);
  })

  return tot;
}

const inputChange = (e) => {
  const id = e.target.dataset.rowid;
  document.getElementById(`${id}-tot`).innerHTML = getTotalItemCost(id);
  totale();
}

const removeCartItem = (e) => {
  document.getElementById(e.target.dataset.rowid).remove();
  totale();
}

const totale = () => {
  document.getElementById('total-price').innerHTML = getTotalCost();
}

const getCartEntryPoint = () => document.getElementById("cart-entrypoint");
const getTabella = () => document.getElementById("carrello");


(() => {
  document.getElementById("btn_aggiungi").addEventListener("click", aggiungi);
  document.getElementById("btn_totale").addEventListener("click", totale);
})();
