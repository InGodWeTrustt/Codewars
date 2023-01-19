function suffixSums(a) {
    const output = [];

    for (let i = 0; i < a.length; i++) {
        const sum = a.slice(i).reduce((a, b) => a + b, 0);
        output.push(sum)
    }

    return output;
}

console.log(suffixSums([1, 2, 3]),[6, 5, 3]);