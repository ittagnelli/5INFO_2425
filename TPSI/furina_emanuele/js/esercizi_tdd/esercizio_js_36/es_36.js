export const tronca_parola = (s, pos) => {
    s = s.split(' ')
    let frase = ''
    for (let index = 0; index < pos && index < s.length; index++) {
        if (index > 0) {
            frase = frase.concat(' ');
        }
        frase = frase.concat(s[index]);
    }
    return frase;
};