// add the value "codewars" to the websites array 1,000 times
var websites = Array(1000).fill('codewars');

console.log(websites.length > 0);
console.log(websites.length == 1000);
console.log(websites.every(function(e){return e == 'codewars';}));