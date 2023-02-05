function arrayLowerCase(arr) {
    return arr.map(elem => typeof elem === "string" ? elem.toLowerCase() : elem)
}


console.log(arrayLowerCase(['Red', 'Green', 1])); //[ 'red', 'green', 1 ]