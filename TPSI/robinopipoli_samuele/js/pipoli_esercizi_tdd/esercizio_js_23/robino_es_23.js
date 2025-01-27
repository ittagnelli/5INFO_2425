export const abbreviazione = (str) => {
    const [nome, cognome] = str.split(' ');
    const capitalizza = (parola) => 
        parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase();
        return `${capitalizza(nome)} ${capitalizza(cognome.charAt(0))}.`;
}
