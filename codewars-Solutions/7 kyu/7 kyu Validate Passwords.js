const passwds = []

var signIn = function (newPassword) {
    passwds.push(newPassword)
};

var logIn = function (password) {
    return passwds.some(pass => pass === password)
};

// Example
var bob = signIn("Mr. me");
var mary = signIn("Bubblehead123");
console.log(logIn("Mr. me"), true);
console.log(logIn("Bubblehead123"), true);
console.log(logIn("This isn't a password"), false);