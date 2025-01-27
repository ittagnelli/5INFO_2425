export const search_words = (ph) => {
    const hasCoding = ph.includes("coding");
    const hasCreativo = ph.includes("creativo");

    if (hasCoding || hasCreativo) {
        return ph;
    }
    return 'parole non trovate';
};