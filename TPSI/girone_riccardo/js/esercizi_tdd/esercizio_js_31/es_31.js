export const search_words = (ph) => {
    if (ph.includes('coding') || ph.includes('creativo')) {
        return ph;
    } else {
        return 'parole non trovate';
    }
};