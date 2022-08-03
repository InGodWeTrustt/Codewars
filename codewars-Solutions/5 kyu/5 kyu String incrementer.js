/**
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
 */

function incrementString(string) {
    const modStr = string.split(/(\d+)/).filter(x => x)
    if (modStr.length < 2) {
        Number.isNaN(+modStr[0]) ? modStr.push(0) : '';
    };
    return modStr
    .map(elem => {
        if(Number.isNaN(Number(elem))) {
            return elem;
        } else {
            const increment = (Number(elem)+1).toString();
            if(increment.length < elem.length){
                return elem.slice(0, elem.length-increment.length)+increment;
            } else {
                return increment;
            }
        }
    })
    .join('');
}


console.log(incrementString('foobar123')); //foobar124
console.log(incrementString('foobar0043')); //foobar0044
console.log(incrementString('foobar')); // foobar1
console.log(incrementString('foobar99')); // foobar100
console.log(incrementString('foobar4')); // foobar5
console.log(incrementString('')); //1
console.log(incrementString('1')); //2