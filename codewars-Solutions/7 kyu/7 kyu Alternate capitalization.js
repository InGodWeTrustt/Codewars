function capitalize(s){
    const res = Array(2).fill('');
    
    for(let i = 0; i < s.length; i++){
      const char = s[i];
      
      if( i % 2 === 0){
        res[0] += char.toUpperCase();
        res[1] += char.toLowerCase();
      } else {
        res[1] += char.toUpperCase();
        res[0] += char.toLowerCase();
      }
    }
    
    return res;
  };

// Example
console.log(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);