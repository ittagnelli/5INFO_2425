export const avg_age = (l) => {
    let somma = 0

    for (const studente of l) {
        somma += studente.eta
    }

    return somma / l.length

};