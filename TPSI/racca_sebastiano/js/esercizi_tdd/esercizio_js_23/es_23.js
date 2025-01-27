/** @param {string} str */
export const abbreviazione = (str) => {
    let [nome, cognome] = str.split(' ');

    nome = nome.charAt(0).toUpperCase() + nome.substring(1, nome.length);
    cognome = cognome.charAt(0).toUpperCase() + '.';

    return `${nome} ${cognome}`;
};
