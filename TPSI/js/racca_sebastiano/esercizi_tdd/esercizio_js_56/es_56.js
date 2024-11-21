/** @param {{eta: number}[]} l */
export const avg_age = (l) => {
    return (l.reduce((acc, curr) => acc += curr.eta, 0)) / l.length;
};