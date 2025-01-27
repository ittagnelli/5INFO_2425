export const search_words = (ph) => {
    return /coding|creativo/i.test(ph) ? ph : 'parole non trovate';
};
