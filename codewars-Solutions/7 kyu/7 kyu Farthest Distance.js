function furthestDistance(arr) {
    /* A(x1, y1);  B(x2, y2)
            ______________________
           /        2            2
    AB = \/  (y2-y1)  + (x2 - x1)
    
    */
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const [x1, y1] = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            const [x2, y2] = arr[j];
            const distance = Math.hypot((y2 - y1), (x2 - x1));
            const distRounded = +distance.toFixed(2); // + equal Number()
            max = Math.max(distRounded, max)
        }
    }

    return max;
}

// Example
console.log(furthestDistance([[3,8],[10,4]]), 8.06 )
console.log(furthestDistance([[1,1], [2,3], [5,5], [4,3], [3,3], [4,1], [2,2]]), 5.66)
console.log(furthestDistance([[1,2], [3,8], [4,3]]), 6.32)