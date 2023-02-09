var FindFunction = function (func, arr) {
    const cb = func.find(fn => typeof fn === 'function');
    return arr.filter(cb)
}

// Example
console.log(FindFunction([(a=>a%2==0),9,3,1,0],[1,2,3,4]), [2,4])
console.log(FindFunction([9,3,(a=>a%2),1,0],[1,2,3,4]), [1,3])