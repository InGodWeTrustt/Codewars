function firstNonRepeatingLetter(s) {
    const cache = {};
    s.split('').forEach((char, i) => {
      char = char.toLowerCase();
      if(cache[char]){
        cache[char].count++;
      } else{
        cache[char] = {
          count: 1,
          idx : i
        }
      }
    });
    
    const str = Object.entries(cache).filter(([k, {count}]) => count === 1);
    if(!str.length) return '';
    const idx = str[0][1].idx;
    return s[idx]
  }