function grabDoll(dolls) {
    var bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
            bag.push(dolls[i])
        } else {
            continue;
        }
        if (bag.length === 3) {
            break;
        }
    }
    return bag;
}


// Примеры тестов
// Test case 1: Test with array ["Mickey Mouse","Hello Kitty","Snow white"]
console.log("Test case 1:");
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"])); // Expected output: ["Hello Kitty"]

// Test case 2: Test with array ["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]
console.log("Test case 2:");
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"])); // Expected output: ["Hello Kitty","Hello Kitty"]

// Test case 3: Test with array ["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]
console.log("Test case 3:");
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"])); // Expected output: ["Hello Kitty","Hello Kitty","Barbie doll"]

// Test case 4: Test with array ["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]
console.log("Test case 4:");
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"])); // Expected output: ["Barbie doll","Hello Kitty","Hello Kitty"]