function alphabet(ns) {

    // sort array in ascending order
    ns.sort((a, b) => a - b);

    // i know the first element is exactly equal A, because condition (A < B < C < D )
    let count = 1;

    // D
    let res;

    /**
     * i skip first element and start loop  with
     * the second element, which is exactly equal B
     */
    for (let i = 1; i < ns.length; i++) {
        // current element * previous element
        const multiply = ns[i] * ns[i - 1];

        const multRes = ns.indexOf(multiply, i + 1)
        if (multRes !== -1) {
            // delete element from array
            ns.splice(multRes, 1);
            count++;
        } else {
            //it means that we do not satisfy the condition
            // A * B ; B * C ; C * D ;  D * A 
            ns.splice(i, 1)
        }

        if (count === 4) {
            res = ns[i]
            break;
        }
    }

    return res;
}


console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4]), 4);
console.log(alphabet([2, 6, 7, 3, 14, 35, 15, 5]), 7);