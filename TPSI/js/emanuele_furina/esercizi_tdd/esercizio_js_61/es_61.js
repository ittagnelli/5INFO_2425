export function count_occurence(text) {
    return new Map([...text].map(letter => [letter, text.split(letter).length - 1]));
}
