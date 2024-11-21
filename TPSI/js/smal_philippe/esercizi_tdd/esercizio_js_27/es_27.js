export const capitalize_all = (str) => {
    let strArray = str.split(" ")
    let msg = ""
    strArray.forEach(element => {
        msg += element.charAt(0).toUpperCase() + element.slice(1, element.length) + " "
    });

    return msg.trim()
}