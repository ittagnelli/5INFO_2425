export const names = (studenti) => {
    if (!Array.isArray(studenti)) {
        throw new Error("L'input deve essere un array");
    }
    return studenti.map(student => {
        if (!student.hasOwnProperty('nome')) {
            throw new Error("Ogni studente deve avere la propriertà 'nome'");
        }
        return student.nome;
    });
};