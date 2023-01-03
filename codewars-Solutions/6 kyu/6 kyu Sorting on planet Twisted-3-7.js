function sortTwisted37(arr) {
    const cache = {};
  
    const newArr = arr.map((num) => {
      const numStr = String(num);
  
      if (/3|7/g.test(numStr)) {
        const repl = numStr.replace(/(3)|(7)/g, (char) => {
          return /3/.test(char) ? 7 : 3;
        });
        cache[repl] = num;
        return +repl;
      }
  
      return num;
    });
  
    newArr.sort((a, b) => a - b);
  
    return newArr.map((num) => {
      const numStr = String(num);
      if (cache[numStr]) {
        return cache[numStr];
      }
      return num;
    });
  }