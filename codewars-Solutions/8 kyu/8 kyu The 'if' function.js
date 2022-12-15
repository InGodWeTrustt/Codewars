function _if(bool, func1, func2) {
    return (bool ? func1 : func2)()
}

console.log(_if(true, () => 5, () => 6));