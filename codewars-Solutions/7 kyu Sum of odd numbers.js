/**
 *              1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

1 -->  1
2 --> 3 + 5 = 8
 */


function rowSumOddNumbers(n) {
	let sumOfOddNumbers = 0
    for(let i = 0, j = 1; i < n; i++, j+=2){
        sumOfOddNumbers += n*(n-1)+j
    }
    return sumOfOddNumbers
}


console.log(rowSumOddNumbers(3)); //27
console.log(rowSumOddNumbers(42)); //27
console.log(rowSumOddNumbers(1)); //1
console.log(rowSumOddNumbers(4)); //64