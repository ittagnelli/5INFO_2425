export const shuffle = (l, m) => {
    const array1 = l.slice(0, m); 
    const array2 = l.slice(m+1);  
    return [...array2, ...array1];
};