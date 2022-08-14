/**
 * написать функцию, которая форматирует продолжительность,
 *  заданную в виде количества секунд, удобным для человека способом
 * @param {*} seconds 
 */

function formatDuration(seconds) {

    if (seconds === 0) return 'now';

    const secondsIn = {
        minute: 60,
        get hour() { return 60 * this.minute },
        get day() { return 24 * this.hour },
        get year() { return 365 * this.day }
    };

    const res = [];
    const words = Object.keys(secondsIn);

    for (const part of Object.values(secondsIn).reverse()) {
        if (seconds < 60) break;
        const elem = Math.floor(seconds / part)
        if (elem >= 1) {
            seconds %= part;
            res.push(formatTime(elem, words[words.length - 1]))
        }
        words.pop()
    }

    if (seconds !== 0) {
        res.push(formatTime(seconds, 'second'))
    }

    if (res.length > 1) {
        return res.slice(0, res.length - 1).join(', ') + ` and ${res[res.length - 1]}`
    }

    return res.join('')
}

function formatTime(val, partTime) {
    return `${val + ' ' + (val > 1 ? partTime + 's' : partTime)}`
}

console.log(formatDuration(125));
// console.log(formatDuration(62));
// console.log(formatDuration(120)); // '2 minutes'
// console.log(formatDuration(3600)); // "1 hour"
// console.log(formatDuration(3662)); //"1 hour, 1 minute and 2 seconds"


// console.log(60 * 60); //3600 - hour
// console.log(24 * 3600); // 86400 - day
// console.log(365 * 24 * 3600); // 31536000 - year

