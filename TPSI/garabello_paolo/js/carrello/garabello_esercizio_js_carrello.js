function getProduct() {
    return document.getElementById("product");
}

function getProductValue() {
    return getProduct().value;
}

function getQuantity() {
    return document.getElementById("quantity");
}

function getQuantityValue() {
    return getQuantity().value;
}

function getPrice() {
    return document.getElementById("price");
}

function getPriceValue() {
    return getPrice().value;
}

function clean() {
    getProduct().innerText = "";
    getQuantity().innerText = "";
    getPrice().innerText = "";
}

function add() {
    if(!getQuantityValue()) {
        alert("la quantità deve essere almeno 1")
        return
    }
    const tr = document.createElement("tr");
    const tdProd = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdQuan = document.createElement("input");
    const tdTotal = document.createElement("td");
    const table = document.getElementById("carrello");
    const remove = document.createElement("td");
    const rmSpan = document.createElement("span");
    const id = Date.now();
    tdProd.innerText = getProductValue();
    tdTotal.innerHTML = parseInt(getPriceValue()) * parseInt(getQuantityValue()) + "&euro;";
    tdQuan.value = getQuantityValue();
    tdPrice.innerText = getPriceValue();
    tdQuan.addEventListener("change", ()  => {     
        const tr = document.getElementById(`${id}`);
        const price = parseInt(tr.childNodes[2].innerText) * tr.childNodes[1].value;
        tr.childNodes[3].innerHTML = price + "&euro;";
        total();
    });

    rmSpan.classList.add("material-icons", "icon-remove");
    rmSpan.addEventListener("click", () => {
        const tr = document.getElementById(`${id}`);
        tr.remove();
    })
    rmSpan.innerText = "remove_shopping_cart";
    remove.append(rmSpan);

    tr.append(tdProd, tdQuan, tdPrice, tdTotal, rmSpan);
    tr.setAttribute("id", id);
    tr.classList.add("item");

    table.childNodes[1].insertBefore(tr, document.getElementById("end"));
    clean()
}

function total() {
    const items = document.getElementsByClassName("item");
    let total = 0;
    for(let item of items) {
        total += parseInt(item.childNodes[3].innerText);
    }
    document.getElementById("total").innerHTML = total + "&euro;";
}