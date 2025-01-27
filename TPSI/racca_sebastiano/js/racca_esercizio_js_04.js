[...document.getElementsByTagName("h1")].forEach((el) => {
  el.style.color = "red";
});

[...document.getElementsByTagName("h2")].forEach((el) => {
  el.style.color = "blue";
  el.style.backgroundColor = "yellow";
  el.style.fontSize = "40px";
  el.innerText = el.innerText.toUpperCase();
});

[...document.getElementsByTagName("p")].forEach((el, idx) => {
  switch (idx) {
    case 0:
    case 4:
      el.style.color = "red";
      break;
    case 2:
    case 5:
    case 8:
      el.style.color = "lightgreen";
      break;
    case 3:
      el.style.color = "lightblue";
      el.innerText = el.innerText.toUpperCase();
      break;
    case 6:
      el.innerText = el.innerText.toUpperCase();
      break;
    case 7:
      el.style.fontStyle = "italic";
      break;
  }
});
