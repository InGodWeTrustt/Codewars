/**
    add(3)(4)  // 7
    add(12)(20) // 32
 */

// CLOSURE
function add(x) {
    return y => x + y
}

console.log(add(2)(5)); // 7