const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]

function sortByArea(array) {
    return [...array.entries()].map( elem => {
        // rectangle
        if(Array.isArray(elem[1])){
            const [h, w] = elem[1];
            const areaRect = h*w; 
            return [areaRect, elem[1]]
        } else { // circle
            const areaCircle = Math.PI*Math.pow(elem[1], 2);
            return [areaCircle, elem[1]]
        }
    }).sort((a, b) => a[0]-b[0]).map(([k, v]) => v)
}

console.log(sortByArea(array)) // [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]