

function humanReadable(seconds) {
    let template = ['00','00','00'];

    const secondsIn = {
        get hours() { return this.minutes * 60 },
        minutes: 60,
    }

    for (const [key, val] of Object.entries(secondsIn)) {
        const res = seconds / val
        if (res >= 1) {
            const addZero  = addZeroOrNo(Math.floor(res))
            key === 'hours' ? template[0] = addZero : template[1] = addZero
            seconds %= val
        }
    }

    if(seconds > 0){
       template[2] = addZeroOrNo(seconds)
    }
    return template.join(':');
}

function addZeroOrNo(value){
    return value < 10 ? `0${value}` : value.toString()
}

console.log(humanReadable(3600)); // '01:00:00'
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(359999)); // '99:59:59'