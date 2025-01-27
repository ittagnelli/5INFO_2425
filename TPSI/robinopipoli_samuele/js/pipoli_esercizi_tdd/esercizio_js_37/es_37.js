export const rm_string = (s, r) => {
    const index = s.toLowerCase().indexOf(r.toLowerCase());
    if (index === -1) return s;
    return s.slice(0, index) + s.slice(index + r.length);
};
