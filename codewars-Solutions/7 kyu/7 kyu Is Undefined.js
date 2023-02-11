function isUndefined(value) {
    return typeof (value) === "undefined";
}

// Example 
console.log(isUndefined(1),false);   
console.log(isUndefined(2),false);   
console.log(isUndefined(undefined),true);   
console.log(isUndefined(3),false);
console.log(isUndefined(4),false);