// This kata does not allow the use of the word RETURN!!!!
let result;

const solve = (expression, k = solveMod(expression)) => result;

function solveMod(expression) {
    let str = expression.replace(/\s+/g, ''); // delete Spaces
    
    str = str.replace(/(?<!\d)x/g, '1x'); // 'x+x+2x' -> '1x+1x+2x'
    
    const splitByEq = str.split('=');
    let coefAtX = 0;
    let numbers = 0;

    for (let i = 0; i < splitByEq.length; i++) {
        const cur = splitByEq[i];
        const x = (cur.match(/[+-]?[\d.]+(?=x)/g) || [0]).join('');
        const onlyNums = (cur.match(/[+-]?[\d.]+(?!x)/g) || [0]).join('');
        
        if(i == 0){ // left side equation
            coefAtX += eval(x); 
            numbers += -eval(onlyNums);
        } else { // right side equation
            coefAtX += -eval(x);
            numbers += eval(onlyNums);
        }
    }

    // Here I am assigning a value to a global variable
    result = numbers / coefAtX
};

// Example
console.log(solve("3+5=x-2")); //                                 x: 10
console.log(solve("10.4 + 5 = x + 4.67")); //                     x: 10.73
console.log(solve("  3 +       8 = -7  -          x")); //        x: -18
console.log(solve("-    434.42 + 44.3 - 90.4 +     x = 0")); //   x: 480.52
console.log(solve("-1=-x")); //                                   x : 1