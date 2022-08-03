/**
Дан массив, содержащий целые числа. 
Массив либо полностью состоит из нечетных целых чисел, 
либо полностью состоит из четных целых чисел, за исключением одного целого числа N.
Найти этот N.
Примеры
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
 */

function findOutlier(integers) {
    let outlier, isEven = isEvenSeq(integers);
    integers.forEach(num => {
        if(isEven){
            if(num % 2 !== 0){
                outlier = num
                return
            }
        } else {
            if(num % 2 === 0){
                outlier = num
                return
            }
        }
    })
    return outlier
}

function isEvenSeq(arr) {
    const map = {even: 0}
    let [first, middle, last] = [arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length - 1]]
    for (const elem of [first, middle, last]) {
        if (elem % 2 === 0) {
            map.even++;
        }
    }
    return map['even'] < 2 ? false : true
}

console.log(findOutlier([1,1,0,1,1])) // 0
console.log(findOutlier([0,0,3,0,0])) // 3
console.log(findOutlier([2,6,8,10,3])) // 3
console.log(findOutlier([1,2,3])) // 2