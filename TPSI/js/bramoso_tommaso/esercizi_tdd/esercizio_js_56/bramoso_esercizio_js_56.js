export const avg_age = (l) => {
    if (!Array.isArray(l)) {
        throw new Error("L'input deve essere un array");
    }
    const validStudents = l.filter(student => student.hasOwnProperty("eta") && typeof student.eta === "number");
    if (validStudents.length === 0) {
        throw new Error("non ci sono studenti validi con la proprieta 'eta' trovata");
    }
    const totalAge = validStudents.reduce((sum, student) => sum + student.eta, 0);
    return totalAge / validStudents.length;
};