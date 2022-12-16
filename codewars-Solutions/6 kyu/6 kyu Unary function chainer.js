function chained(functions) {
    return function (...args) {
        let res = null
        while (functions.length) {
            const fn = functions.shift();
            res = res ? fn(res) : fn(...args)
        }
        return res;
    };
}


function f1(x) { return x * 2 }
function f2(x) { return x + 2 }
function f3(x) { return Math.pow(x, 2) }
console.log(chained([f1, f2, f3]), 0); // 