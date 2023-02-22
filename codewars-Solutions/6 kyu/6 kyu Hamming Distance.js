function hamming(a, b) {
    return a
        .split('')
        .filter((char, i) => char.codePointAt() !== b[i].codePointAt()).length;
}

// Example
console.log(hamming("I like turtles","I like turkeys"),3);
console.log(hamming("Hello World","Hello World"),0);
console.log(hamming("hello world","hello tokyo"),4);
console.log(hamming("a man a plan a canal","a man a plan sobanal"),3);
console.log(hamming("hamming and cheese","Hamming and Cheese"),2);
console.log(hamming("espresso","Expresso"),2);
console.log(hamming("old father, old artificer","of my soul the uncreated "),24);

