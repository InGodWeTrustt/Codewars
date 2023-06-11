/**
 * Функция использует динамическое программирование для подсчета количества способов внесения 
 * сдачи на заданную сумму с использованием монет заданного номинала
 */
function countChange(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
}

console.log(countChange(10, [5, 2, 3])); // expected output: 4
console.log(countChange(300, [5, 10, 20, 50, 100, 200, 500])); // expected output: 1022
console.log(countChange(301, [1, 5, 10, 20, 50, 100, 200, 500])); // expected output: 15280