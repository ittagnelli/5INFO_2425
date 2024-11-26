export const capitalize_all = (str) => {
    let array = str.split(" ")
    let array2 = ""
    
    for(let i = 0 ; i < array.length; i++){
       array2 += array[i].charAt(0).toUpperCase() + array[i].slice(1,array[i].length) + " "
    }

    return array2.trim();
}