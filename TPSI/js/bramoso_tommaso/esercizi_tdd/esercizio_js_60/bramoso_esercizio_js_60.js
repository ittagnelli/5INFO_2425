export function is_anagram(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("L'input deve essere un array di stringhe");
    }
    const normalizza = (parola) =>
        parola.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    const mappaAnagrammi = new Map();
    for (const parola of array) {
        if (typeof parola !== "string") {
            throw new TypeError("Tutti gli elementi dell'array devono essere stringhe");
        }
        const parolaNormalizzata = normalizza(parola);
        if (mappaAnagrammi.has(parolaNormalizzata)) {
            mappaAnagrammi.get(parolaNormalizzata).push(parola);
        } else {
            mappaAnagrammi.set(parolaNormalizzata, [parola]);
        }
    }
    return array.filter(
        (parola) => mappaAnagrammi.get(normalizza(parola)).length === 1
    );
}