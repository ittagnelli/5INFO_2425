export const insert = (str1, agg, pos) => {
    let newStr;

    newStr = str1.slice(0, pos)+ " " + agg + str1.slice(pos);
    
    return newStr;
};
