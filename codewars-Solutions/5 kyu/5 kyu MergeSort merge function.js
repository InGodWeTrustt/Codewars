// TODO: implement 'mergesorted'
// INPUT: a and b are both sorted arrays consisting entirely of integers
// ALSO: Array.prototype.sort has been disabled
function mergesorted(a, b) {
    const output = [];

    while (a.length && b.length) {
        if (a[0] > b[0]) {
            output.push(b.shift())
        } else {
            output.push(a.shift())
        }
    }
    return [...output,...a.slice(), ...b.slice()];
}

console.log(mergesorted([4,5], [2,7])); // [2,4,5,7]