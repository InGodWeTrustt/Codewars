function timeCorrect(timestring) {
    if (/\d{1,2}:\d{2}:\d{2}/.test(timestring)) {
        const [h, m, s] = timestring.split(':');
        const date = new Date(0, 0, 0, h, m, s);
        return date.toLocaleTimeString('ru')
    } else {
        return timestring === '' ? '' : null;
    }
}

// Example
console.log(timeCorrect(null), null);
console.log(timeCorrect(""), "");
console.log(timeCorrect("001122"), null);
console.log(timeCorrect("00;11;22"), null);
console.log(timeCorrect("0a:1c:22"), null);
console.log(timeCorrect("09:10:01"), "09:10:01");
console.log(timeCorrect("11:70:10"), "12:10:10");
console.log(timeCorrect("19:99:09"), "20:39:09");
console.log(timeCorrect("19:99:99"), "20:40:39");
console.log(timeCorrect("24:01:01"), "00:01:01");
console.log(timeCorrect("52:01:01"), "04:01:01");
console.log(timeCorrect("14:59:94"), "15:00:34");