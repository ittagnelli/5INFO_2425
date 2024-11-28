export const tronca = (ph, l) => {
    if(ph.length > l){
        return ph.substring(0, l) + "..."
    }
    return ph
};