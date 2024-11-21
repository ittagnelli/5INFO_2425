export const shuffle = (l, m) => {
    if (!Array.isArray(l)) {
        throw new Error("Il primo parametro deve essere un array.");
    }
    if (typeof m !== 'number' || m < -l.length || m >= l.length) {
        throw new Error("L'indice m è fuori dai limiti dell'array.");
    }
    if (m < 0) {
        m = l.length + m;
    }
    const firstPart = l.slice(0, m + 1);
    const secondPart = l.slice(m + 1);
    return [...secondPart, ...firstPart];
};