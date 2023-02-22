function datingRange(age) {
    if (age <= 14) {
        const min = Math.floor(age - 0.1 * age);
        const max = Math.floor(age + 0.1 * age);
        return `${min}-${max}`;
    }
    const min = Math.floor(age / 2 + 7)
    const max = Math.floor((age - 7) * 2)
    return `${min}-${max}`
}


// Example
console.log(datingRange(17), "15-20")
console.log(datingRange(40), "27-66")
console.log(datingRange(15), "14-16")
console.log(datingRange(35), "24-56")
console.log(datingRange(10), "9-11")