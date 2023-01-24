function truncateString(str, num) {

    if (str.length > num) {

        if (num <= 3) {
            return str.slice(0, num) + '...'; // or `${str.slice(0,num)}...`
        } else {
            return str.slice(0, num - 3) + '...'; // or `${str.slice(0,num-3)}...`
        }
    }

    return str;
}


console.log(truncateString('chingel', 8));  // 'chingel'
console.log(truncateString('chingel', 6)); // 'chi...'
console.log(truncateString('chingel', 2)); // 'ch...'