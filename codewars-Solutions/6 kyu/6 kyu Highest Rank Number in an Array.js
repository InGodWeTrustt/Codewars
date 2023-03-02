function highestRank(arr){
    const map = {};
    let maxFreqNumber;
    
    arr.forEach(num => map[num] = (map[num] || 0) + 1);
    const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
    
    if(entries[0][1] - entries[1][1] > 0 ){
      maxFreqNumber = +entries[0][0];
    } else {
      maxFreqNumber = (+entries[0][0] > +entries[1][0]) ? +entries[0][0] : +entries[1][0];
    }
    
    return maxFreqNumber;
  }


const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr) === 12);