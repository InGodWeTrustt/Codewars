Array.prototype.sortReloaded = function (param = 'asc') {
    if (!/asc|desc/.test(param)) return false;
    return param == 'asc' ? [...this].sort((a, b) => a - b) : [...this].sort((a, b) => b - a)
}


console.log([3,1,5,3,6,1,2].sortReloaded('asc'), [1,1,2,3,3,5,6]);
console.log([2,3,4,3,2,9,1].sortReloaded('desc'), [9,4,3,3,2,2,1]);
console.log([2,3].sortReloaded('foo'), false);
console.log([4,7,2].sortReloaded(), [2,4,7]);