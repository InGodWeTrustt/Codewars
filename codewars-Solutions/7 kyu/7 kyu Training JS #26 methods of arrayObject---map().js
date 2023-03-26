function isolateIt(arr) {
    return arr.map(string => {
        const mid = Math.ceil(string.length / 2);

        if (string.length % 2 !== 0) {
            return `${string.slice(0, mid - 1)}|${string.slice(mid)}`
        } else {
            return `${string.slice(0, mid)}|${string.slice(mid)}`
        }
    })
}

// Example
console.log(isolateIt(["abcd","efgh"]) , ["ab|cd","ef|gh"]);
console.log(isolateIt(["abcde","fghij"]) , ["ab|de","fg|ij"]);
console.log(isolateIt(["1234","56789"]) , ["12|34","56|89"]);