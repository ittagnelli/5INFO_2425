export const avg_age = (l) => {
    const totalAge = l.reduce((sum, student) => sum + student.eta, 0);
    return totalAge / l.length;
};
