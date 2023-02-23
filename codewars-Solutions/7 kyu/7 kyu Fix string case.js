function solve(s) {
    return (s.match(/[A-Z]/g) || []).length > (s.match(/[a-z]/g) || []).length
        ? s.toUpperCase()
        : s.toLowerCase();
}

//Example
console.log(solve("code"),"code");
console.log(solve("CODe"),"CODE");
console.log(solve("COde"),"code");
console.log(solve("Code"),"code");