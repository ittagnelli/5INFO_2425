export const gen_arr = (len) => {
    const a = [];
    for (let i = 0; i < len; i++) {
        a.push(Math.floor(Math.random()));
    }
    return [a, a.slice().reverse()]; 
}