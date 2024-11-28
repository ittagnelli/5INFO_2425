export const tronca_parola = (s, pos) => {
    let newArray = s.split(" ")
    
    return pos > 0 ? newArray.slice(0, pos).join(" ") : (pos < 0) ? newArray.reverse().slice((pos * -1), newArray.length).reverse().join(" ") : ""

};