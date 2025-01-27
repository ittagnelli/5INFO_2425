export class Orario {
    #h; #m; #s;
    constructor(h,m,s) {
        this.#h = h;
        this.#m = m;
        this.#s = s;
    }

    get h() {
        return this.#h;
    }

    get m() {
        return this.#m;
    }

    get s() {
        return this.#s;
    }

    diff(ora1, ora2) {
        (this.h*1000*60*60 + this.m*1000*60 + this.s*1000);
        (ora1.h*1000*60*60 + ora1.m*1000*60 + ora1.s*1000);
        (ora2.h*1000*60*60 + ora2.m*1000*60 + ora2.s*1000);
        return {
            _second: ([this.s, ora1.s, ora2.s].sort()[0]),
            _minute: ([this.m, ora1.m, ora2.m].sort()[0]),
            _hour: ([this.h, ora1.h, ora2.h].sort()[0])
        }
    }
}