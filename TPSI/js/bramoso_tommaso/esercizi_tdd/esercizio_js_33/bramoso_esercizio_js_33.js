export const concatenateN = (inputString, N) => {
    if (!inputString || inputString.length === undefined) {
        return "Errore: la stringa deve essere valida e non vuota.";
    }
    if (N < 0 || N !== Math.floor(N)) {
        return "Errore: N deve essere un numero positivo o zero.";
    }
    if (N === 0) {
        return "";
    }
    return inputString.repeat(N);
};