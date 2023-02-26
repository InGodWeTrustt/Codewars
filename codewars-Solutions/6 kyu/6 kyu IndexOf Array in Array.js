var searchArray = function (arrayToSearch, query) {
  if(!Array.isArray(query) || query.length !== 2 || 
     !arrayToSearch.every(sub => Array.isArray(sub) && sub.length === 2)){
    throw new Error()
  }
  return arrayToSearch.findIndex(arr => arr.toString() === query.toString())
}

// Example
var bigArray = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
var searchFor = [9,20];
console.log(searchArray(bigArray,searchFor), 2);
searchFor = [1,12];
console.log(searchArray(bigArray,searchFor), -1);
searchFor = [7,2];
console.log(searchArray(bigArray, searchFor), 1);