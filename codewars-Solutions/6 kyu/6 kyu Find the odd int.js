
function findOdd(arr) {
    const map = {};
    let countHighestOdd = 0;
    arr.forEach( elem => map[elem] ? map[elem]++ : map[elem] = 1);
    Object.entries(map).sort((a, b)=> b[0] - a[0] ).forEach(([k, v]) =>{
        if(v % 2 !== 0){
            countHighestOdd = k;
            return;
        }
    })
    return +countHighestOdd;
}

console.log(findOdd([1,2,2]));
console.log(findOdd([7]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));