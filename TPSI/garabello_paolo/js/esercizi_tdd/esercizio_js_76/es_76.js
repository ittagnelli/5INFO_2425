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

    diff(ora) {
        return {
            milliseconds: (this.h*1000*60*60 - ora.h*1000*60*60 + this.m*1000*60 - ora.m*1000*60 + this.s*1000 - ora.s*1000),
            seconds: (this.s - ora.s),
            minutes: (this.m - ora.m),
            hours: (this.h - ora.h)
        }
    }
}