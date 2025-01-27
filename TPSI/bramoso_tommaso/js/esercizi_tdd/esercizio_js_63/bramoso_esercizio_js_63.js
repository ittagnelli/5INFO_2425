export const unique_characters = (str) => {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return Array.from(str).filter((char) => charCount[char] === 1).join('');
};