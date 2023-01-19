/**
        smartSum(1,2,3,[4,5],6); // returns 21
        smartSum(1,2,[[3,4],5],6); // returns 21
 */

function smartSum(...args) {
    const output = [];

    // remove nested arrays and get only numbers - [1,2,3,[4,5]] -> [1,2,3,4,5]
    flat(0, args, output);

    // sum
    const sum = output.reduce((a, b) => a + b, 0)
    return sum;
}


function flat(i, input, output) {
    if (i >= input.length) {
        return
    }

    if (Array.isArray(input[i])) {
        flat(0, input[i], output)
    } else {
        // is Number
        output.push(input[i])
    }
    
    flat(i + 1, input, output)
}


console.log(smartSum([1,2],3)); // 6