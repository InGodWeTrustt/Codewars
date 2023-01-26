Array.prototype.remove = function (index) {
    if(typeof index === 'number' && (index >= 0 && index < this.length)){
        // delete element
        this.splice(index, 1)
        return this;
    } else{
        return this;
    }
};


let arr = [1, 2, 3];
console.log(arr.remove(1), [1, 3], "Your function should return the mutated array");
console.log(arr, [1, 3], "Your function should mutate the original array");

arr = [1, 2, 3];
console.log(arr.remove("a"), [1, 2, 3], "Your function should return the unchanged array if the input is invalid");
console.log(arr, [1, 2, 3], "Your function should leave the array unchanged if the input is invalid");

arr = [1, 2, 3];
console.log(arr.remove(-1), [1, 2, 3], "Your function should return the unchanged array if the input is invalid");
console.log(arr, [1, 2, 3], "Your function should leave the array unchanged if the input is invalid");