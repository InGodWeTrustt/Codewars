function sumCubes(n) {
    let res = 0;

    for (let i = 1; i <= n ; i++) {
        res += Math.pow(i, 3); // or i ** 3
    }
    
    return res
}

console.log(sumCubes(2)); // 9
console.log(sumCubes(3)); // 36