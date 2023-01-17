function firstNonConsecutive (array) {
    let res = null;

    for (let i = 1; i < array.length; i++) {
        if(array[i] - array[i-1] > 1){
            res = array[i];
            break;
        }
    }

    return res;
}


console.log(firstNonConsecutive([1,2,3,4,6,7,8])); // 6
console.log(firstNonConsecutive([1,2,3,4])); // null