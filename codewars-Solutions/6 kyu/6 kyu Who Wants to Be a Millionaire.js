function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
    let totalCash = 0;

    // LL - life lines
    let totalAmountLL = 0;

    let patternLL = '123'

    // stack
    const safeHaven = []

    for (let i = 0; i < prizeFund.length; i++) {
        const curPlayerAct = playerActions[i]
        let playerAnswer = curPlayerAct;

        // if player wants to leave the game 
        if (curPlayerAct === 'W') {
            break;
        } else if (curPlayerAct === 'X') {
            totalCash = safeHaven.pop() || 0
            break;
        }

        // if player try to use life lines
        if (/[0-9]+/.test(playerAnswer)) {
            const { lifeLine, answer } = playerAnswer.match(/(?<lifeLine>[0-9]*)(?<answer>\w+)/).groups;

            const reg = new RegExp(`${lifeLine.split('').join('|')}`, 'g');

            patternLL = patternLL.replace(reg, '');

            // increase total amount life lines
            totalAmountLL += lifeLine.length;

            // if the player decides to stop and leave the game
            if (answer === 'X') {
                totalCash = safeHaven.pop() || 0
                break;
            } else {
                // change player answer because player decides to answer the questions
                playerAnswer = answer;
            }

        }
        // if player try to answer
        if (correctAnswers[i] === playerAnswer) {
            totalCash += prizeFund[i]
        } else { // if answer incorrect
            totalCash = 0;
            break;
        }

        if ((i + 1) % 5 === 0) {
            safeHaven.push(totalCash)
        }
    }

    return [totalCash, totalAmountLL]
}


const originalPrizeFund = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
const exampleCorrectAnswers = ["A", "B", "B", "D", "B", "C", "A", "A", "B", "D", "D", "D", "B", "C", "B"];

const playerActions = ["A", "B", "B", "D", "B", "C", "X"];

console.log(getTotalCashPrize(originalPrizeFund, exampleCorrectAnswers, playerActions));