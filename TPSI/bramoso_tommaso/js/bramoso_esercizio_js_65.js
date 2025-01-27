let utente = {
    nome: "Jon",
    role: "user"
};
const { nome, role, isAdmin: is_admin = false } = utente;
console.log(nome);
console.log(role);
console.log(is_admin);