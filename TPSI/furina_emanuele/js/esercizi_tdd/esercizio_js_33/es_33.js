export const concatenateN = (s, n) => {
    let frase = s;
    let ripetizioni = n;
    if (ripetizioni == 0) {
        return "";
    }
    for (let i = 0; i < (ripetizioni-1); i++) {
        frase = frase.concat(s);
    }
    return frase;
};
