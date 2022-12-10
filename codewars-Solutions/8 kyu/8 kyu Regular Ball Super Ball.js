var Ball = function (ballType = 'regular') {
    this.ballType = ballType;
};

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");