/**
 * @param {Array} l 
 */
export const ordina = (l) => {
    return l.sort((a, b) => {return (b.title.toLowerCase().localeCompare(a.title.toLowerCase()))});
};