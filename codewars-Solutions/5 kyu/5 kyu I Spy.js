/**
 adderSpy.callCount(); // количество вызовов функции (число или 0)
adderSpy.wasCalledWith(4); //  был ли вызван со значением в аргументе true
adderSpy.returned(8); //  вернул ли значение, указанное в аргументе функции true
 */

function spyOn(func) {
    let count = 0;
    let arrArgs = [];
    let returnedValues = []

    function inner(...args) {
        count++;
        arrArgs.push(...args);
        let returnedValue = func(...args);
        returnedValues.push(returnedValue);
        return returnedValue
    }

    inner.callCount = () => count;
    inner.wasCalledWith = val => arrArgs.indexOf(val) !== -1;
    inner.returned = val => returnedValues.indexOf(val) !== -1;

    return inner;
}


function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

console.log(adderSpy(2, 4)) // returns 6
console.log(adderSpy(3, 5)) // returns 8
console.log(adderSpy.callCount()); // returns 2
console.log(adderSpy.wasCalledWith(4)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(8)); // true
console.log(adderSpy.returned(0)); // false