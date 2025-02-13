export const abbreviazione = (str) => {
    let parole = str.split(' ')
    let nome = parole[0]
    let cognome = parole[1]
    let nomeFormattato = nome[0].toUpperCase() + nome.slice(1)
    let cognomeForm = cognome[0].toUpperCase() + cognome.slice(1).toLowerCase()
    return `${nomeFormattato} ${cognomeForm[0]+ '.'}`

}

