/**
    Input: [1,2,3,4]
    Output: [3,1,4,2]
 */


function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

console.log(shuffle([1,2,3,4]));