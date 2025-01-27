export const avg_age = (l) => {
    let media = 0
    l.forEach(element => { media += element.eta });
    return media/l.length
};