function myFirstKata(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return false;
    } else {
        return a % b + b % a;
    }
}

console.log(myFirstKata(3,5)); // 5
console.log(myFirstKata("hello",3)); // false