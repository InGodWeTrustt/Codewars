var map1 = { 'a': 1, 'b': 2, 'c': 3 };
var map2 = { 'x': 24, 'y': 25, 'z': 26 };
  
var mappedOutput = mapEm(['a', 'b', 'c'], [map1]);
var mappedOutput2 = mapEm(['x', 'y', 'z'], [map1, map2]);

function mapEm(input, maps){
    
    /**
     * I reversed the array so that when the function (Object.assign()) 
     * is applied to it, duplicate late keys are removed
     */
    const reverseMaps = maps.reverse();
    const obj = Object.assign(...reverseMaps);
    const map = new Map(Object.entries(obj))
    return input.map( elem =>  map.has(elem) ? map.get(elem) : elem)
}

console.log(mappedOutput); // [1,2,3]
console.log(mappedOutput2); // [1,2,3]