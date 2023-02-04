function search(budget, prices) {
    return prices.filter((price) => price <= budget)
        .sort((a, b) => a - b)
        .toString()
}

console.log(search(3, [6, 1, 2, 9, 2]), "1,2,2")
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14")
console.log(search(0, [6, 1, 2, 9, 2]), "") 
console.log(search(10, []), "") 
console.log(search(24, [24, 0, 100, 2, 5]), "0,2,5,24")
console.log(search(24, [2.7, 0, 100.9, 1, 5.5]), "0,1,2.7,5.5")