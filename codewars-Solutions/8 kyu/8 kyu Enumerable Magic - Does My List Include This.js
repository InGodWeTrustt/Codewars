function include(arr, item) {
    return arr.includes(item);
}

let list = [0,1,2,3,5,8,13,2,2,2,11];

console.log(include(list,  13) ===  true);
console.log(include(list,   0) ===  true);
console.log(include(list, 100) === false);