function solution(string) {
    if (!string) return '';
    return string
        .split(/([A-Z][a-z]+)/g)
        .filter(x => x)
        .join(' ')
}


console.log(solution('camelCase')); // camel Case
console.log(solution('camelCaseInput')); //camel Case Input 
console.log(solution('')); // '' 