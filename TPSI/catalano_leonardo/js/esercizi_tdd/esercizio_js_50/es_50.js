const is_prime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

export const order = (m) => {
  const nPrimi = m.filter(is_prime);
  const nonPrimi = m.filter(n => !is_prime(n));
  return nPrimi.concat(nonPrimi);
};

