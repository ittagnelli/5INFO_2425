export const search_words = (ph) => {
    return (ph.includes("coding") || ph.includes("creativo")) ? ph : "parole non trovate";
};