export const ordina = (l) => {
    return l.sort((l1, l2) => l2.title.localeCompare(l1.title))
};