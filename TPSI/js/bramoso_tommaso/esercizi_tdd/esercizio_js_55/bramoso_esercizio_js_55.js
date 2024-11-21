export const no_copies = (array) => {
    if (!Array.isArray(array)) {
        throw new Error("L'input deve essere un array");
    }
    return [...new Set(array)];
};