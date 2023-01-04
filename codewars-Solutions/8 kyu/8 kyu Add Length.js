/**
 "apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
 */


const addLength = str => {
    return str.split(' ').map(word => {
        const len = word.length;
        return `${word} ${len}`
    })
}


console.log(addLength("apple ban"));
console.log(addLength("you will win"));