export const capitalize_all = (str) => { 
    str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

