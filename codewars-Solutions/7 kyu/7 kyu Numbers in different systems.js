const sysNums = (n, sys) => {
    const res = n.toString(sys);

    if (/\b[0-9]+\b/.test(res)) {
        return +res;
    } else {
        return res;
    }
};

// Example
console.log(sysNums(5, 2), 101);
console.log(sysNums(5, 8), 5);
console.log(sysNums(250, 2), 11111010);
console.log(sysNums(250, 16), "fa");
console.log(sysNums(135, 2), 10000111);
console.log(sysNums(879, 8), 1557);
console.log(sysNums(3894, 16), "f36");