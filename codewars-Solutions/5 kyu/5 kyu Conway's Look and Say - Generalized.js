function lookSay(number) {
    let str = number.toString();
    let i = 0;
    let res = [];

    for (; i < str.length; i++) {
        const tmp = [str[i]]

        for (let j = i + 1; j < str.length; j++) {
            if (tmp[0] !== str[j]) {
                res.push(`${tmp.length}${tmp[0]}`);
                tmp.length = 0;
                i = j - 1;
                break;
            } else {
                tmp.push(str[i])
            }
        }

        if (tmp.length) {
            res.push(`${tmp.length}${tmp[0]}`)
            tmp.length = 0;
            break;
        }
    }

    return +res.join('');
}

console.log(lookSay(0), 10);
console.log(lookSay(2014), 12101114);
console.log(lookSay(1122), 2122);
console.log(lookSay(22322), 221322);