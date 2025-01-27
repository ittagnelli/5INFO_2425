class Orario {
    hour
    minute
    second

    constructor(hour, minute, second) {
        this.hour = hour
        this.minute = minute
        this.second = second
    }

    controlla(o1, o2) {
        let arr = [ this.hour*3600 + this.minute*60 + this.second, 
                        o1.hour*3600 + o1.minute*60 + o1.second, 
                        o2.hour*3600+ o2.minute*60 + o2.second]
        let mapp = new Map([[arr[0], this], 
                                [arr[1], o1],
                                [arr[2], o2]])

        return mapp.get(arr.sort().reverse().pop())
    }
}

let orario1 = new Orario(21, 23, 6)
let orario2 = new Orario(22, 30, 55)
let orario3 = new Orario(23, 1, 0)

console.log(orario1.controlla(orario2, orario3))