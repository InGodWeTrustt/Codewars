function setReducer(input) {
    const result = [];
    let count = 1;
    
    for ( let i = 0; i < input.length; i++){
        if(input[i] !== input[i+1]){
            result.push(count);
            count = 1;
        } else {
            count++;
        }
    }

    if(result.length === 1){
        return result[0]
    } else {
        return setReducer(result)
    }

}


// Example
const input =  [1,4,5,6]
console.log(setReducer(input)); // 4