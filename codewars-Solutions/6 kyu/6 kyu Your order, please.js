/**
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 */

function order(words){
    const split = words.split(' ').map( word => [word.replace(/[a-z]/gi, ''), word])
    return split.sort((a,b) => a[0][0] - b[0][0]).map( word => word[1]).join(' ')
  }

// Можно еще так сделать
function order(words){
  const getNum = str => +str.split(/[^0-9]/gi).filter(x => x)[0]
  return words.split(' ').sort((a, b) => getNum(a) - getNum(b)).join(' ')
}
