function wordToBin(str){
    return str.split('').map(char => {
      const binary = char.codePointAt().toString(2);
      return binary.padStart(8, '0')
    });
  }
  
console.log(wordToBin('man'), [ '01101101', '01100001', '01101110' ]);
console.log(wordToBin('AB'), ['01000001', '01000010']);