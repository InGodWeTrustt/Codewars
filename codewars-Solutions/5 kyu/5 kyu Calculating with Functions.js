function zero(cb) {
    return typeof cb === 'function' ? cb(0) : 0
}
function one(cb) {
    return typeof cb === 'function' ? cb(1) : 1
}
function two(cb) {
    return typeof cb === 'function' ? cb(2) : 2
}
function three(cb) {
    return typeof cb === 'function' ? cb(3) : 3
}
function four(cb) {
    return typeof cb === 'function' ? cb(4) : 4
}
function five(cb) {
    return typeof cb === 'function' ? cb(5) : 5
}
function six(cb) {
    return typeof cb === 'function' ? cb(6) : 6
}
function seven(cb) {
    return typeof cb === 'function' ? cb(7) : 7
}
function eight(cb) {
    return typeof cb === 'function' ? cb(8) : 8
}
function nine(cb) {
    return typeof cb === 'function' ? cb(9) : 9
}

function plus(arg) {
    return x => x + arg
}

function minus(arg) {
    return x => x - arg
}

function times(arg) {
    return x => x * arg
}

function dividedBy(arg) {
    return x => Math.floor(x / arg)
}



console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);