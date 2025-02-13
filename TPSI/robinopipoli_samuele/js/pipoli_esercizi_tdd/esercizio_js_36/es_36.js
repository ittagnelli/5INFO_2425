export const tronca_parola = (s, pos) => {
    if (pos <= 0) return "";
    const words = s.split(' ');
    let truncated = '';
    let currentLength = 0;

    for (let word of words) {
        if (currentLength + word.length + 1 > pos) {
            break;
        }
        truncated += word + ' ';
        currentLength += word.length + 1;
    }
    return truncated.trim();
};
