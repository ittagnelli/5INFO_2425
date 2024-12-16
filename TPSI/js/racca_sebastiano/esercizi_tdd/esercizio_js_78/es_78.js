export class Orario {
  constructor(h, m, s) {
    this.h = h;
    this.m = m;
    this.s = s;
  }

  mill() {
    return this.s * 1000 + this.m * 60 * 1000 + this.h * 60 * 60 * 1000;
  }

  min(time1, time2) {
    return [this, time1, time2].sort((a, b) => a.mill() - b.mill())[0];
  }
}
