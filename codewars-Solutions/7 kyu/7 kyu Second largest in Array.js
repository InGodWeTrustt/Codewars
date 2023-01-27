function secondLargest(array) {
    if (array === null || typeof array === "string") return;

    array = array
        .map(elem => (typeof elem !== "boolean" && elem !== null) ? Number(elem) : NaN)
        .filter(elem => !isNaN(elem))

    // sort by descending - from max to min
    array.sort((a, b) => b - a);

    let secondLargest;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            secondLargest = array[i];
            break;
        }
    }

    return secondLargest;
}


console.log(secondLargest([2, true, 0]));
console.log(secondLargest(["-1", 2, null, false]));