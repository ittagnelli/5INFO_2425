export class Fibonacci {
  calc(n) {
    return Math.round(((1 + Math.sqrt(5)) / 2) ** n / Math.sqrt(5));
  }
}
