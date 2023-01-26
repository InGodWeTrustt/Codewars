function mergeArrays(arr1, arr2) {
    // Spread syntax (...)
    /**
     * Example: const a = [1,2]; const b = [2, 3];
     * [...a, ...b] = [...[1,2], ...[2, 3]] = [1,2,2,3]
     * new Set() - delete duplicate; new Set([1,2,2,3]) -> Set(3) {1,2,3}
     * [...new Set([1,2,3])] -> [1,2,3]
     * sort by ascending -> sort((a, b) => a - b); [1,2,3].sort((a, b) => a-b) -> [1,2,3]
     */
    // 
   return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)
 }


console.log(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8]);
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10]);