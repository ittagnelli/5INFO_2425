/**
 * @param {Array} l 
 */
export const avg_age = (l) => {
    let sum = 0;
    l.forEach(item => {
        sum += item.eta;
    });
    return sum / l.length;
};