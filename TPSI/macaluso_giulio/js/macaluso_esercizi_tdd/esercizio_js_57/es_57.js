export const names = (studenti) => {
    let array = [];

    studenti.forEach(element => {
        array.push(element.nome);
    });

    return array;
};
