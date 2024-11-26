export const rm_string = (s, r) => {
    const index = s.toLowerCase().indexOf(r.toLowerCase());
    if (index === -1) {
        return s;
    }
    const before = s.slice(0, index);
    const after = s.slice(index + r.length);
    return (before + after).replace(/\s+/g, ' ').trim();
};