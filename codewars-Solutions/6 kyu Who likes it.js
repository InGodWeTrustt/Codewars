function likes(names) {
    let res = `${!names.length ? 'no one' : names[0]} likes this`;
    if (names.length > 1) {
        if(names.length < 3) {
            res = names.join(' and ') + ' like this' ;
        } else if(names.length === 3){
            res = `${names[0]}, ${names[1]} and ${names[2]} like this`;
        } else {
            res = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
        }
    }
    return res;
}

console.log(likes(['Alex', 'Test']));
console.log(likes(['Alex', 'Test', 'Test2']));
console.log(likes(['Alex', 'Test', 'Test2', 'cdsc']));
console.log(likes(['Alex']));
console.log(likes([]));