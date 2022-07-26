/**
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51 
 */

function twistedSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++){
        if(String(i).length > 1){
            sum += +String(i).split('').reduce((prev, cur) => +prev + +cur)
        } else{
            sum += i
        }
    }
    return sum;
}

console.log(twistedSum(12)); //51

