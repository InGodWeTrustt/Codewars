
/**
 * 
 * @param {number} n 
 * @param {number[]} sys 
 */
function fromNb2Str(n, sys) {
    const multModules = sys.reduce((prev, cur) => prev * cur)
    if (multModules > n && checkPairwiseCoPrime(sys, sys.length)) {
        const systemN = sys.map(num => n % num).join('--');
        const padddingString = systemN.padStart(systemN.length + 1, '-').padEnd(systemN.length + 2, '-')
        return padddingString;
    }
    return 'Not applicable'
}

console.log(fromNb2Str(11, [2, 3, 5])); // "-1--2--1-"
console.log(fromNb2Str(779, [8, 7, 5, 3])); // "-1--2--1-"
console.log(fromNb2Str(6, [2, 3, 4])); // Not applicable

function GCD(a , b) {
    if (a == 0) return b;
    return GCD(b % a, a);
}
function LCM(a , b) {
    return (a * b) / GCD(a, b);
}

function checkPairwiseCoPrime(A , n) {
    let prod = 1;
    let lcm = 1;

    for (i = 0; i < n; i++) {
        prod *= A[i];
        lcm = LCM(A[i], lcm);
    }

    if (prod == lcm)
        return true
    else {
        return false;
    }
}