function joinStrings(string1, string2) {
   return `${string1} ${string2}`
}


console.log(joinStrings('testing', 'testing') === 'testing testing');
console.log(joinStrings(134, 234) === '134 234');
console.log(joinStrings('a,', 'b') === 'a, b');