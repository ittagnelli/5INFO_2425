const getData = () => {
  const dati = ["dipartimento", "cognome", "nome", "mese", "importo"];
  const res = {};

  dati.forEach((d) => {
    res[d] = document.getElementById(d);
  });

  return res;
};

const dataToArray = (data) => Object.values(data);

const getPaghe = () => document.getElementsByClassName("paga");

const numberOfRows = () => getPaghe().length;

const checkNumberOfRows = () => {
  const rows = numberOfRows();
  if (rows < 2) {
    alert("Inserisci almeno 2 paghe");
    return false;
  }

  return true;
};

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
  tr.classList.add("paga");
  return tr;
};

const appendToTable = (data) => {
  const row = createRow();

  dataToArray(data).forEach((d) => {
    const cell = row.insertCell();
    cell.innerText = d.value;

    if (d.id == "importo") {
      cell.innerHTML += "&euro;";
      cell.classList.add("importo");
    }
  });

  getTabella().childNodes[1].insertBefore(row, getPagheEntryPoint());
};

const aggiungi = () => {
  const data = checkAndGetData();

  if (!data) return;

  appendToTable(data);
};

const displayElements = (elClass) => {
  [...document.getElementsByClassName(elClass)].forEach((el) => {
    el.classList.remove("hidden");
  });
};

const getTotale = () => {
  let tot = 0;
  [...getPaghe()].forEach((r) => {
    tot += parseInt(r.cells.item(r.cells.length - 1).innerText);
  });

  return tot;
};

const getMedia = () => {
  return getTotale() / numberOfRows();
};

const somma = () => {
  if (checkNumberOfRows()) {
    getSpanTotale().innerText = getTotale();
    displayElements("h-totale");
  }
};

const media = () => {
  if (checkNumberOfRows()) {
    getSpanMedia().innerText = parseInt(getMedia() * 100) / 100;
    displayElements("h-media");
  }
};

const setupEventListeners = () => {
  document.getElementById("btn_aggiungi").addEventListener("click", aggiungi);
  document.getElementById("btn_somma").addEventListener("click", somma);
  document.getElementById("btn_media").addEventListener("click", media);
};

const getTabella = () => document.getElementById("paghe");
const getPagheEntryPoint = () => document.getElementById("paghe-entrypoint");
const getSpanTotale = () => document.getElementById("totale");
const getSpanMedia = () => document.getElementById("media");

setupEventListeners();
