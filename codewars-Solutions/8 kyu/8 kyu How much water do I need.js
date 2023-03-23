function howMuchWater(water, load, clothes) {
    if (clothes < load) {
        return 'Not enough clothes'
    } else if (clothes / load > 2) {
        return 'Too much clothes'
    }
    return +(water * 1.1 ** (clothes - load)).toFixed(2)
}

console.log(howMuchWater(10,10,21), 'Too much clothes','');
console.log(howMuchWater(10,10,2), 'Not enough clothes','');
console.log(howMuchWater(10,11,20), 23.58,'');
console.log(howMuchWater(50,15,29), 189.87,'');