/**
 * @param {string} text 
 */
export function count_occurence(text) {
    let map = new Map();
    text.split(" ").forEach(word => {
        if(map.has(word))  
            map.set(word, map.get(word)+1);
        else
            map.set(word, 1);
    })
    return map;
}
