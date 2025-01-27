export const unique_random_numbers = (n,m) => {
    const set = new Set();

    while (set.size < n) {
        set.add(Math.floor(Math.random() * m) + 1);
    }

    return Array.from(set).sort((a, b) => b - a);
}