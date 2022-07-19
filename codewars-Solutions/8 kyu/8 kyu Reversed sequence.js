const reverseSeq = n => {
    return [...range(n)];
  };

  function* range (max, min = 1){
    for(let i = max; i >= min; i--){
        yield i;
    }
  }

  console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]