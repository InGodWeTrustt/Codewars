function createDict(keys, values){
    const map = {};
    
    for(const [index, key] of keys.entries()){
        map[key] =  typeof values[index] !== 'undefined' ?  values[index] : null;
    }
    
    return map;
  }

// Example
console.log(createDict(['a', 'b', 'c'], [1, 2, 3])); //  {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4])); //  {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(['a', 'b', 'c','d'], [1, 2, 3])); //  {'a': 1, 'b': 2, 'c': 3, 'd':null}