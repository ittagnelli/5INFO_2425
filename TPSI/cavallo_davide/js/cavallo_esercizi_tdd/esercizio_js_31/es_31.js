export const search_words = (ph) => {
    const keywords = ['coding', 'creativo'];

    const found = keywords.some(word => ph.toLowerCase().includes(word.toLowerCase()));

    return found ? ph : 'parole non trovate';
};
