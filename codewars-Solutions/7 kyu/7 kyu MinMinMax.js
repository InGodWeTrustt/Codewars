function minMinMax(array) {
    array.sort((a, b) => a - b);
    let minimumAbsent;
  
    for (let i = 0; i < array.length; i++) {
      if (Math.abs(array[i] - array[i + 1]) > 1) {
        minimumAbsent = array[i] + 1;
        break;
      }
    }
  
    return [array[0], minimumAbsent, array.at(-1)];
  }