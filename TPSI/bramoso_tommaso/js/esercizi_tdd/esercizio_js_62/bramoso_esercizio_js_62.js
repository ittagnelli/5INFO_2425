export const unique_random_numbers = (n, m) => {
    if (n > m) {
        throw new Error("Il numero N non può essere maggiore di M.");
    }
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < n) {
        const randomNum = Math.floor(Math.random() * m) + 1;
        uniqueNumbers.add(randomNum);
    }
    return Array.from(uniqueNumbers).sort((a, b) => b - a);
};