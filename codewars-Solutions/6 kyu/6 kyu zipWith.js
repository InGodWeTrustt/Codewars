/**
 * zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
 */

function zipWith(fn, a0, a1) {
    const res = []
    const minlen = Math.min(a0.length, a1.length);
    a0 = a0.slice(0, minlen);
    a1 = a1.slice(0, minlen);
    for (let i = 0; i < a0.length; i++) {
        const elema0 = a0[i]
        const elema1 = a1[i]
        res.push(fn(elema0, elema1))
    }
    return res;
}


const plus = (a, b) => a + b;

console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1])) // [6, 6, 6, 6, 6, 6]);
console.log(zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1])) // [6, 6, 6, 6, 6]);
console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2])) // [6, 6, 6, 6, 6]);