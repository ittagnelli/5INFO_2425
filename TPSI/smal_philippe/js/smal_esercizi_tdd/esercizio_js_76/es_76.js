class Orario {
    hour
    minute
    second

    constructor(hour, minute, second) {
        this.hour = hour
        this.minute = minute
        this.second = second
    }

    controlla(o1) {
        let secondDiff = ((this.hour*3600 + this.minute*60 + this.second) - (o1.hour*3600 + o1.minute*60 + o1.second) )< 0 ? 
                (o1.hour*3600 + o1.minute*60 + o1.second) - (this.hour*3600 + this.minute*60 + this.second) : (this.hour*3600 + this.minute*60 + this.second) - (o1.hour*3600 + o1.minute*60 + o1.second)
        console.log("Ms: " + secondDiff * 60 + " Second: " + secondDiff + " Minute: " + secondDiff/60 + " Hour " + secondDiff/3600)
    }
}

let orario1 = new Orario(21, 23, 6)
let orario2 = new Orario(22, 30, 55)

orario1.controlla(orario2) 