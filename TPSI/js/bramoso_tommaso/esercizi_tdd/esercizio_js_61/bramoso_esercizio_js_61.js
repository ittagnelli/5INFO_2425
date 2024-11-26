export function count_occurence(text) {
    if (typeof text !== "string") {
        throw new TypeError("L'input deve essere una stringa");
    }
    const parole = text.split(/\s+/);
    const mappaOccorrenze = new Map();
    for (const parola of parole) {
        mappaOccorrenze.set(parola, (mappaOccorrenze.get(parola) || 0) + 1);
    }
    return mappaOccorrenze;
}