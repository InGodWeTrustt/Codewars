Array.prototype.toString = function () {
    return !this.length ? 0 : this.reduce((a, b) => a + b) || 0
}


var arr1 = [1,2,3], arr2 = 4;
var ans = 10;
console.log(arr1 + arr2, ans, 'Should equal '+ans);
arr1 = [1,1,1], arr2 = 3;
ans = 0;
console.log(arr1 - arr2, ans, 'Should equal '+ans);
arr1 = ['a','b'], arr2 = ['c','d'];
ans = 'abcd';
console.log(arr1 + arr2, ans, 'Should equal '+ans);
arr1 = ['c','o','d','e','w','a','r','s'];
ans = 'codewars';
console.log(''+arr1, ans, 'Should equal '+ans);