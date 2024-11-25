export const only_upper = (s) => {
    let array = [];

    for (const element of s) {
        if (element === element.toUpperCase() & isNaN(element) & /^[a-zA-Z]$/.test(element)) {
            array.push(element);            
        }
    }
    return array;
};