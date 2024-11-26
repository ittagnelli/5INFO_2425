export const names = (studenti) => {
    let nomiArr = []

    for (const studente of studenti) {
        nomiArr.push(studente.nome)
    }

    return nomiArr
};
