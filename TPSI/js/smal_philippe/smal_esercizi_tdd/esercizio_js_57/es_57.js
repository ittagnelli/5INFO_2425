export const names = (studenti) => {
    let newStudenti = []
    studenti.forEach(element => {newStudenti.push(element.nome)});
    return newStudenti
};
