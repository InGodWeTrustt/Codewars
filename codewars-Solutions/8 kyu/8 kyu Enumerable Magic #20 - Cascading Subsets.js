/**
 Создайте метод each_cons , который принимает список и число n и возвращает каскадные подмножества списка размера n , например:
each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]
each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
 */

function eachCons(array, n) {
    const res = []
    for (let i = 0; i <= array.length - n; i++) {
        const chunks = []
        for (let j = i; j < i + n; j++) {
            chunks.push(array[j])
        }
        res.push(chunks)
    }
    return res
}


console.log(eachCons([1, 2, 3, 7], 2))
console.log(eachCons([1, 2, 3, 7], 3))