function bubblesortOnce(a) {
    const copy = [...a];
    const swap = (a, b) => [copy[a], copy[b]] = [copy[b], copy[a]];
    for (let i = 1; i < copy.length; i++) {
        if(copy[i-1] > copy[i]) {
            swap(i-1, i);
        }
    }
    return copy
  }

  
 console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])); //[7, 5, 3, 1, 2, 4, 6, 8, 9]