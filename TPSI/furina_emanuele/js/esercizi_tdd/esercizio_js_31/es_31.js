export const search_words = (ph) => {
    let fr = ph.split(' '); if (fr.indexOf('coding') == -1 && fr.indexOf('creativo') == -1) {return 'parole non trovate'}else{return ph}
};