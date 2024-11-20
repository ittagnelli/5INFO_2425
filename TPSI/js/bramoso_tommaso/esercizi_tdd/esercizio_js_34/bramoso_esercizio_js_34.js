export const insert = (str1, str2, N) => {
    if (!str1 || !str2 || N < 0 || N > str1.length) {
        return str1;
    }
    const part1 = str1.slice(0, N)
    const part2 = str1.slice(N);
    const spacer1 = part1.endsWith(" ") || str2.startsWith(" ") ? "" : " ";
    const spacer2 = str2.endsWith(" ") || part2.startsWith(" ") ? "" : " ";
    return part1 + spacer1 + str2 + spacer2 + part2;
};
