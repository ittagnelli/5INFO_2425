let utente = {
    nome: "Jon",
    role: "user"
}

function stampa({nome, role, is_admin = false}) {
    console.log(`variabile nome: ${nome}\nvariabile role: ${role}\nvariabile is_admin: ${is_admin}`);
}

stampa(utente);