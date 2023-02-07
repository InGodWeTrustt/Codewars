function removeDuplication(arr){
    // first - we sorted array by ascending
    // second - we replace in string any digit repeating
    // third - we convert every elements to Number
    return arr.sort((a, b) => a - b).join('').replace(/([-]?\d)\1+/g, '').split('').map(Number)
  }

console.log(removeDuplication([1,2,3,2,4,6,2,6,7]),[1,3,4,7]);
console.log(removeDuplication([1,6,1,6,7,6,8,7,8]),[]);
console.log(removeDuplication([-1,0,,-7,9,-7,9,1,-1]),[0,1]);
console.log(removeDuplication([1,1,1,1,1,1,1,]), []);
