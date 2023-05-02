function swapValues(args) {
    let temp = args[1];
    args[1] = args[0];
    args[0] = temp;
}

var arr = [1,2] 
swapValues(arr);
console.log(arr[0], 2);
console.log(arr[1], 1);