const getDatiRubrica = () => {
  let dati = {};

  DATI_RUBRICA.forEach((d) => {
    dati[d] = document.getElementById(d);
  });

  return dati;
};

const datiNonNulli = () =>{
  return Object.values(getDatiRubrica()).every((value) => value.value);
}

const randomID = () => Math.random().toString(16).slice(2);

const rimuovi = (id) => {
  const tr = document.getElementById(id);
  tr.remove();
};

const salva = () => {
  if (!datiNonNulli()) {
    return alert("Devi inserire tutti i campi");
  }

  const dati = getDatiRubrica();
  const id = `rubrica-${randomID()}`;

  const tr = document.createElement("tr");
  tr.id = id;

  DATI_RUBRICA.forEach((d) => {
    const td = document.createElement("td");
    td.innerText = dati[d].value;
    td.dataset.dato = d;
    dati[d].value = "";
    tr.appendChild(td);
  });

  const rimuoviBtn = document.createElement("button");
  rimuoviBtn.addEventListener("click", () => rimuovi(id));
  rimuoviBtn.innerText = "Rimuovi";

  const tdRimuovi = document.createElement("td");
  tdRimuovi.colSpan = "2";
  tdRimuovi.appendChild(rimuoviBtn);

  tr.appendChild(tdRimuovi);

  table.appendChild(tr);
};

/** @param {HTMLTableRowElement} tr */
const modificaInterfacciaFromTR = (tr) => {
  const dati = getDatiRubrica();
  tr.childNodes.forEach((td) => {
    if (dati[td.dataset.dato]) {
      dati[td.dataset.dato].value = td.innerText;
    }
  });

  salvaBtn.innerText = "Aggiorna";
  salvaBtn.dataset.id = tr.id;
  salvaBtn.removeEventListener("click", salva);
  salvaBtn.addEventListener("click", aggiorna);
};

const cerca = () => {
  const dati = getDatiRubrica();

  if (dati.nome || dati.cognome) {
    const rubrica = document.querySelectorAll('[id^="rubrica-"]');
    let should_break = false;

    rubrica.forEach((tr) => {
      tr.childNodes.forEach((td) => {
        if (
          td.dataset.dato == "cognome" &&
          dati.cognome.value &&
          dati.cognome.value == td.innerText
        ) {
          console.log("trovato da cognome");
          return modificaInterfacciaFromTR(tr);
        }

        if (
          td.dataset.dato == "telefono" &&
          dati.telefono.value &&
          dati.telefono.value == td.innerText
        ) {
          console.log("trovato da telefono");
          return modificaInterfacciaFromTR(tr);
        }
      });
    });
  }
};

const aggiorna = () => {
  if (!datiNonNulli()) {
    return alert("Devi inserire tutti i campi");
  }
  
  const id = salvaBtn.dataset.id;
  const tr = document.getElementById(id);
  const dati = getDatiRubrica();

  tr.childNodes.forEach((td) => {
    if (dati[td.dataset.dato]) {
      td.innerText = dati[td.dataset.dato].value;
    }
  });

  salvaBtn.innerText = "Salva";
  salvaBtn.removeEventListener("click", aggiorna);
  salvaBtn.addEventListener("click", salva);
};

const DATI_RUBRICA = ["cognome", "nome", "indirizzo", "telefono"];

const table = document.getElementById("tabella");

const salvaBtn = document.getElementById("salva_btn");
salvaBtn.addEventListener("click", salva);
