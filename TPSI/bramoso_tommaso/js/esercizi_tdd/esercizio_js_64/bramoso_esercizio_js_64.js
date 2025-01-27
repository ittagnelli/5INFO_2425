export const count_vocals = (str) => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const result = new Map();
    for (const char of str.toLowerCase()) {
        if (vowels.has(char)) {
            result.set(char, (result.get(char) || 0) + 1);
        }
    }
    return result;
};