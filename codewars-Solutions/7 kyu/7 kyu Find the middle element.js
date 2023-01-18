// gimme([2, 3, 1]) => 0
const gimme = arr => {
    // example [2,3,1] after sorting in ascending order [1,2,3]
    // middleElem in index 1? because numbering starts from zero
    // copy arr [...arr]? because sort method change arr
    const middleElem = [...arr].sort((a, b) => a-b)[1]
    return arr.indexOf(middleElem)
}

console.log(gimme([2,3,1]));