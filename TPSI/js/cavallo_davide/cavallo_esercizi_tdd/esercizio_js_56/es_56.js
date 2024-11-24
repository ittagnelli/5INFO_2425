export const avg_age = (l) => {
    const totalAge = l.reduce((sum, person) => sum + person.eta, 0);
    return totalAge / l.length;
};
