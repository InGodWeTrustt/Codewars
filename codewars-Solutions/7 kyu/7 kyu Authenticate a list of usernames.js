function authList(arr) {
    return arr.every(username => /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/.test(username))
}

const usernames1 = ['john123', 'alex222', 'sandra1'];
const usernames2 = ['john123', 'alex222', 'sandraW'];
const usernames3 = ['john_123', 'alex222', 'sandra1'];
const usernames4 = [''];
const usernames5 = ['123456'];
const usernames6 = ['abcdef'];

console.log(authList(usernames1) === true);
console.log(authList(usernames2) === false);
console.log(authList(usernames3) === false);
console.log(authList(usernames4) === false);
console.log(authList(usernames5) === false);
console.log(authList(usernames6) === false);