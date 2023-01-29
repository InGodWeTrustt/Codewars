function unique(arr) {
    return arr.filter((elem, i, a) => !a.slice(0, i).includes(elem));
}


console.log(unique([1,2,2,3]), "should return [1,2,3]")