function isNice(arr){
    if(!arr.length) return false;
    return arr.every(num => arr.indexOf(num + 1) !== -1 || arr.indexOf(num - 1) !== -1)
  }

console.log(isNice([2,10,9,3]),true);
console.log(isNice([3,4,5,7]),false);
console.log(isNice([]),false);