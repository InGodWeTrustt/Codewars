class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (!this.lives) throw new Error();
        if (this.number === n) return true;

        this.lives--;
        return false;
    }
}

let guesser = new Guesser(10, 2);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
console.log(guesser.guess(10)); // Output: true