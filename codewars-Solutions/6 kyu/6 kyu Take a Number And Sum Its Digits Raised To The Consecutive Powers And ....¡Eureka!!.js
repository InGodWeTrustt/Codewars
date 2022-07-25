/**
 * sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
 */

 function sumDigPow(a, b) {
    const res = []
    for(let i=a; i <=b; i++){
      i === powAndReduce(i) ? res.push(i) : ''
    }
    return res
  }
  
  function powAndReduce(num){
    return String(num).split('').map( (n, i) => (+n)**(i+1)).reduce((prev, cur) => prev + cur)
  }