/**
 * a = [18, 69, -90, -78, 65, 40]
oper_array(gcd, a, a[0]) => [18, 3, 3, 3, 1, 1]
oper_array(lcm, a, a[0]) => [18, 414, 2070, 26910, 26910, 107640]
oper_array(sum, a, 0) => [18, 87, -3, -81, -16, 24]
oper_array(min, a, a[0]) => [18, 18, -90, -90, -90, -90]
oper_array(max, a, a[0]) => [18, 69, 69, 69, 69, 69]
 */

function gcdi(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function lcmu(a, b) {
    let hcf;
    for (let i = 1; i <= Math.abs(a) && i <= Math.abs(b); i++) {
        if (a % i == 0 && b % i == 0) {
            hcf = i;
        }
    }
    return (Math.abs(a) * Math.abs(b)) / hcf;
}

function som(a, b) {
    return a + b
}

function maxi(a, b) {
    return Math.max(a, b)
}

function mini(a, b) {
    return Math.min(a, b)
}

function operArray(fct, arr, init) {
    const res = []
    arr.reduce((r, cur) => {
        let result = fct(r, cur)
        res.push(result)
        return result
    }, init)
    return res
}

let a = [18, 69, -90, -78, 65, 40];
let r = [18, 3, 3, 3, 1, 1];
let op = operArray(gcdi, a, a[0]);
console.log('op: ', op);
r = [18, 414, 2070, 26910, 26910, 107640];
op = operArray(lcmu, a, a[0]);
console.log('op: ', op);
r = [18, 87, -3, -81, -16, 24];
op = operArray(som, a, 0);
console.log('op: ', op);
r = [18, 18, -90, -90, -90, -90];
op = operArray(mini, a, a[0]);
console.log('op: ', op);
r = [18, 69, 69, 69, 69, 69];
op = operArray(maxi, a, a[0]);
console.log('op: ', op);