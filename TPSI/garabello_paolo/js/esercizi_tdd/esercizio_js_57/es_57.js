/**
 * @param {Array} studenti 
 */
export const names = (studenti) => {
    return studenti.map(item => {
        return item.nome;
    });
};
