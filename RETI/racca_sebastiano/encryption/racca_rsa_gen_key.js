const PRIMI = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101,
];

/**
 * Calcola chiave pubblica e privata dati due numeri primi.
 * @param {number} p Un numero primo
 * @param {number} q Un numero primo
 */
const calcola_chiavi = (p, q) => {
  const N = p * q;
  const V = (p - 1) * (q - 1);
  const N_PRI = PRIMI.filter((num) => num < V).pop();

  let N_PUB;
  for (let i = 0; ; i++) {
    if ((i * N_PRI) % V == 1 && i !== N_PRI) {
      N_PUB = i;
      break;
    }
  }

  const pubblica = [N, N_PUB];
  const privata = [N, N_PRI];

  return { pubblica, privata };
};

console.log(calcola_chiavi(3, 11));
