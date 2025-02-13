export const upper_case = (str) => {
    let messaggio = ""
    str.split("").forEach(element => {
        let ascii =  element.charCodeAt(0)
        messaggio += String.fromCharCode((ascii >= 97) & (ascii <= 122) ? ascii - 32 : ascii)
    });

    return messaggio
    
} 
