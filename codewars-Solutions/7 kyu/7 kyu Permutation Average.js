function permutationAverage(n) {
    // Convert the number into an array of digits
    const digits = Array.from(String(n), Number);

    // Generate all possible permutations of the digits
    const permutations = generatePermutations(digits);

    // Calculate the sum of all permutations
    const sum = permutations.reduce((acc, val) => acc + Number(val.join('')), 0);

    // Divide the sum by the number of permutations to get the average
    const average = sum / permutations.length;

    // Round the average to the nearest integer
    return Math.round(average);
}

// Helper function to generate all possible permutations of an array
function generatePermutations(arr) {
    if (arr.length === 1) {
        return [arr];
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const permutations = generatePermutations(remaining);

        for (let j = 0; j < permutations.length; j++) {
            result.push([current].concat(permutations[j]));
        }
    }

    return result;
}


console.log(permutationAverage(2) === 2);
console.log(permutationAverage(25) === 39);
console.log(permutationAverage(737) === 629);
console.log(permutationAverage(1397) === 5555);
console.log(permutationAverage(76853) === 64444);