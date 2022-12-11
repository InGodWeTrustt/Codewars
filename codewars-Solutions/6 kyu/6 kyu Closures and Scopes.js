function createFunctions(n) {
    let callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  }


  var callbacks = createFunctions(5); // create an array, containing 5 functions

  console.log(callbacks[0]()) // must return 0
  console.log(callbacks[3]()); // must return 3