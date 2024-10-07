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

const colora = (e) => {
  e.preventDefault();
  tableBody.childNodes.forEach((tr, index) => {
    tr.classList.add(index % 2 == 0 ? "blue" : "rosso");
  });
};

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

const coloraBtn = document.getElementById("btn_colore");
coloraBtn.addEventListener("click", colora);

const tableBody = document.getElementById("body_tabella");
