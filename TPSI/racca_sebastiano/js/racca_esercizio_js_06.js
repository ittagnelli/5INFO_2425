const onSubmit = (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const media = document.getElementById("media");

  const tr = document.createElement("tr");
  const tdNome = document.createElement("td");
  const tdMedia = document.createElement("td");

  tdNome.innerText = nome.value;
  tdMedia.innerText = media.value;

  tr.appendChild(tdNome);
  tr.appendChild(tdMedia);

  tableBody.appendChild(tr);

  nome.value = "";
  media.value = "";
};

const modificaElementiTabella = (fn) => {
  tableBody.childNodes.forEach(fn);
}

const colora = (e) => {
  e.preventDefault();
  modificaElementiTabella((tr, index) => {
    tr.classList.add(index % 2 == 0 ? "blue" : "rosso");
  });
};

const grassetto = (e) => {
  e.preventDefault();
  modificaElementiTabella((tr) => {
    tr.classList.add('grassetto');
  });
}

const blue = (e) => {
  e.preventDefault();
  modificaElementiTabella((tr) => {
    tr.classList.add('blue');
  });
}

const bordo = (e) => {
  e.preventDefault();
  table.classList.toggle('bordo');
}

const table = document.getElementById('tabella');
const tableBody = document.getElementById("body_tabella");

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

const coloraBtn = document.getElementById("btn_colore");
coloraBtn.addEventListener("click", colora);

const grassettoBtn = document.getElementById("btn_grassetto");
grassettoBtn.addEventListener('click', grassetto);

const blueBtn = document.getElementById("btn_blue");
blueBtn.addEventListener('click', blue);

const bordoBtn = document.getElementById("btn_bordo");
bordoBtn.addEventListener('click', bordo);

