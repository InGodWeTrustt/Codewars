function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};


console.log(new Sleigh().authenticate('Santa Claus', 'Ho Ho Ho!') === true);
console.log(new Sleigh().authenticate('Santa', 'Ho Ho Ho!') === false);
console.log(new Sleigh().authenticate('Santa Claus', 'Ho Ho Ho') === false);
console.log(new Sleigh().authenticate('Santa Claus', 'Ho Ho!') === false);
console.log(new Sleigh().authenticate('Easter Bunny', 'Ho Ho Ho!') === false);
console.log(new Sleigh().authenticate('jhoffner', 'CodeWars') === false);