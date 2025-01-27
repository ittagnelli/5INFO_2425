export const avg_age = (l) => {
    let totale = 0;
    for (let i = 0; i < l.length; i++) {
        totale += l[i].eta;
    }
    return totale / l.length;
};
