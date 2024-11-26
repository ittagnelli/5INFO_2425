export const swap = (l, n, m) => {
    // Gestione degli indici negativi
    if (n < 0) n = l.length + n;  // Calcoliamo l'indice positivo per n
    if (m < 0) m = l.length + m;  // Calcoliamo l'indice positivo per m
    
    // Verifica che gli indici siano all'interno dei limiti dell'array
    if (n < 0 || n >= l.length || m < 0 || m >= l.length) {
        throw new Error("Indici non validi");
    }

    // Scambio degli elementi nelle posizioni n e m
    const temp = l[n];
    l[n] = l[m];
    l[m] = temp;

    return l;
};
