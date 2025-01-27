export const unique_characters = (str) => {
    return Array.from(new Set(str.split(""))).join("");
}