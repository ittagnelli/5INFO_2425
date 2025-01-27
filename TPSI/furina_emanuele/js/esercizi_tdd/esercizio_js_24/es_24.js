export function protect_email(email) {
    let [utente, dominio] = email.split('@');
    let utente2 = utente.slice(0, (utente.length/2))
    return utente2 + "..." + '@' + dominio
}
