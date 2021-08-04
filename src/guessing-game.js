class GuessingGame {
    constructor() {
        this.max = 0
        this.min = 0
        this.avr = 0

    }
    
    setRange(min, max) {
        this.max = max
        this.min = min    
    }

    guess() {
        console.log(this.max, this.min)
        this.avr = Math.ceil((this.max - this.min) / 2) + this.min
        return this.avr
    }

    lower() {
        this.max = this.avr
    }

    greater() {
        this.min = this.avr
    }
}

module.exports = GuessingGame;
