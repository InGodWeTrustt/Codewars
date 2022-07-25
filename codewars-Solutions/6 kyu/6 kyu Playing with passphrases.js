function playPass(s, n) {

  const shiftLetter = s.replace(/[a-z]/gi, circularSHift(n))

  const replaceDig = shiftLetter.replace(/\d/gi, c => 9 - Number(c));

  const changeCaseLetter = [...replaceDig].map((element, i) => {
    if (typeof element === 'string') {
      return i % 2 === 0 ? element.toUpperCase() : element.toLowerCase();
    } else {
      return element
    }
  }).join('');

  return [...changeCaseLetter].reverse().join('')
}

function circularSHift(n) {
  return c => {
    const charCode = c.codePointAt();
    if (/[a-z]/.test(c)) {
      let dif = charCode + n;
      if (dif > 'z'.codePointAt()) {
        dif -= 'z'.codePointAt();
        dif += -1 + 'a'.codePointAt()
      }
      return String.fromCodePoint(dif)
    } else { // [A-Z]
      let dif = charCode + n;
      if (dif > 'Z'.codePointAt()) {
        dif -= 'Z'.codePointAt();
        dif += -1 + 'A'.codePointAt()
      }
      return String.fromCodePoint(dif)
    }
  }
}

// console.log(playPass('BORN IN 2015!', 5));
// console.log(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2)); // 4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO
// console.log(playPass(`TO BE HONEST WITH YOU I DON'T USE THIS TEXT TOOL TOO OFTEN BUT HEY... MAYBE YOUR NEEDS ARE DIFFERENT.`, 5));