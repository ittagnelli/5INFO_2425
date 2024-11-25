/**
 * @param {Array} l1 
 * @param {Array} l2 
 */
export const same = (l1, l2) => {
        if(l1.length != l2.length)
            return false;
        for(let i = 0; i < l1.length; i++)
            if(l1[i] != l2[i])
                return false;
    return true;
};