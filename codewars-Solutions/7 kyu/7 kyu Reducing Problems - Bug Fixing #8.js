function calculateTotal(team1, team2) {
    var t1s = team1.reduce((t, c) => t + c, 0);
    var t2s = team2.reduce((t, c) => t + c, 0);
    return t1s > t2s;
}

console.log(calculateTotal([1,2,2],[1,0,0]), true, 'Calculate the Winner!');
console.log(calculateTotal([6,45,1],[1,55,0]), false, 'Calculate the Winner!');
console.log(calculateTotal([57,2,1],[]), true, 'Calculate the Winner!');
console.log(calculateTotal([],[3,4,3]), false, 'Calculate the Winner!');