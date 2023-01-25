function freqSeq(str, sep) {
    const cache = {};
    const res = [];
    str.split('').forEach(char => cache[char] = (cache[char] || 0) + 1);
    return str.replace(/./g, (char, i) => `${cache[char]}${i < str.length - 1 ? sep : ''}`);
}


console.log(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
console.log(freqSeq('19999999',    ':'), '1:7:7:7:7:7:7:7');
console.log(freqSeq('^^^**$',      'x'), '3x3x3x2x2x1');