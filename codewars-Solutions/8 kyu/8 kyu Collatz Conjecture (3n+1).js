/**
 * [This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 */

const hotpo = function(n){
    if(n == 0) return 0; //Optional Handler to n = 0
    let count = 0;

    for(;;){
        if(n === 1){
            break;
        }

        if(n % 2 === 0){
            n /=2
        } else{
            n = 3* n +1
        }
        count++;
    }

    return count
}

console.log(hotpo(23)); // 15
console.log(hotpo(6)); // 8