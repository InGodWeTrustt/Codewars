function alphabetWar(fight) {
    const leftSide = 'sbpw';
    const rightSide = 'zdqm';

    let leftPower = 0;
    let rightPower = 0;

    fight.split('').forEach(char => {
        // Check if the letter is in the leftSide
        if (leftSide.includes(char)) {
            leftPower += leftSide.indexOf(char) + 1;

            // Check if the letter is in the rightSide
        } else if (rightSide.includes(char)) {
            rightPower += rightSide.indexOf(char) + 1;
        }
    })

    return leftPower > rightPower
        ? 'Left side wins!'
        : leftPower < rightPower ? 'Right side wins!' : 'Let\'s fight again!'
}

console.log( alphabetWar("z") === "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") === "Let's fight again!" );
console.log( alphabetWar("zzzzs") === "Right side wins!" );
console.log( alphabetWar("wwwwww") === "Left side wins!" );