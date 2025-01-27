class quadrato {
    constructor(l) {
        this.lato = l
    }

    set lato(val) {
        this._lato = val
    }

    get area() {
        return this._lato ** 2
    }

    get perimeto() {
        return this._lato * 4
    }
}

function main() {
    q = new quadrato(8)

    console.log(q.perimeto);
    console.log(q.area);
    
}

main()