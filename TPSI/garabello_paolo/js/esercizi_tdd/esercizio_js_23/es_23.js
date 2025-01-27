/**@param {string} str*/    
export const abbreviazione = (str) => {
    let nome = str.charAt(0).toUpperCase() + str.slice(1, str.indexOf(" "));
    return nome + " " + str.charAt(str.indexOf(" ")+1).toUpperCase() + ".";
}

