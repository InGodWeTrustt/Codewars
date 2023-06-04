function isVeryEvenNumber(n) {
    if (n < 10) {
        return n % 2 === 0;
    } else {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return isVeryEvenNumber(sum);
    }
}

/**
 * Примеры
    number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

    number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even

    number = 5 => returns false

    number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
 */