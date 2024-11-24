export const capitalize_all = (str) => {
    let array = str.split(" ")
    let strNew = ""
 
    for (let i = 0; i < array.length;  i ++) {
        strNew += array[i].charAt(0).toUpperCase() + array[i].slice(1, array[i].length) + " "
    }
    

    return strNew.trim()
}

