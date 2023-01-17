// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
    return arr.filter((_, i) => {
        if ((i+1) % 2 === 0 && i !== 0) {
            return false;
        } else{
            return true;
        }
    })
}
