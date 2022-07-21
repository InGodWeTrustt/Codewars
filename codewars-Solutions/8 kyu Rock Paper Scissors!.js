const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';

    const winCombination = {
        paper: 'rock',
        rock: 'scissors',
        scissors: 'paper'
    };

    if (winCombination[p1] === p2) {
        return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
    }
};


console.log(rps('rock', 'scissors')); // Player 1 won!