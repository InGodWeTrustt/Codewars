function findEvenIndex(arr) {
    let index = -1;
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < arr.length; i++) {
        sumLeft = arr.slice(0, i).reduce((a, b) => a + b, 0);
        sumRight = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        if (sumLeft === sumRight) {
            index = i;
            break;
        }
    }
    return index
}

console.log(findEvenIndex([20,10,-80,10,10,15,35])); //0
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");