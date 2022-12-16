const maxAndMin = (arr1, arr2) => {
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);

    const maxEl1 = arr1.slice(-1)[0];
    const maxEl2 = arr2.slice(-1)[0];

     const maxVal = Math.abs(maxEl1 - arr2[0]) > Math.abs(maxEl2 - arr1[0]) ?
         Math.abs(maxEl1 - arr2[0]):
         Math.abs(maxEl2 - arr1[0]);

    const minVal = getMin(arr1, arr2)


    return [maxVal, minVal]
}

function getMin(arr1, arr2) {
    let minDif = Math.pow(2,53);
    let i = 0,j = 0;
    while (i < arr1.length && j < arr2.length) {
        const dif = Math.abs(arr1[i] - arr2[j]);
        minDif = (minDif < dif) ? minDif : dif;
        if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return minDif;
}

console.log(maxAndMin([3,10,5],[20,7,15,8]) , [17,2])
console.log(maxAndMin([3],[20]) , [17,17])
console.log(maxAndMin([3,10,5],[3,10,5]) , [7,0])
console.log(maxAndMin([1,2,3,4,5],[6,7,8,9,10]) , [9,1])
let ar1 = [-870,91,-141,-739,707,-803,-195,-963,99,861], ar2 = [796,-468,889,58,-765,-901,-311,-399,-764,-181,841,-670,-589];
console.log(maxAndMin(ar1,ar2) , [1852, 14])