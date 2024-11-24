/** @param {number} num */
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

/** @param {number[]} l */
export const order = (l) => {
  return [...l.filter(isPrime), ...l.filter(num => !isPrime(num))];
};
