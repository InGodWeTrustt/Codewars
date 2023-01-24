//preload variable: dict

var makeBackronym = function(string){
    return string.split('').map(char => dict[char.toUpperCase()]).join(' ');
  };

console.log(makeBackronym('dgm')); // 'disturbing gregarious mustache'
console.log(makeBackronym('codewars')); // 'confident oscillating disturbing eager weird awesome rant stylish'