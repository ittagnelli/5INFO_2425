/** @param {{nome: string}[]} studenti */
export const names = (studenti) => {
    return studenti.map((s) => s.nome);
};
