function pipeFix(numbers) {
    const output = [];

    for (let i = numbers[0]; i <= numbers.at(-1); i++) {
        output.push(i)
    }

    return output;
}

// Example
console.log(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9],'You must return an array from 1-9');
console.log(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12],'You must return an array from 1-12');
console.log(pipeFix([6,9]),[6,7,8,9],'You must return an array from 6-9');
console.log(pipeFix([-1,4]),[-1,0,1,2,3,4],'You must return an array from -1-4');
console.log(pipeFix([1,2,3]),[1,2,3],'You must return an array from 1-3');
console.log(pipeFix([2]),[2]);