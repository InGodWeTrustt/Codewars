function countDays(d) {
    // 1d = 24h, 1h = 60m, 1m = 60s, 1s = 1000ms <=> 24*60*60*1000 = 86400000
    const msInDay = 86400000, today = new Date();
    let diffDays = Math.floor((today - d) / msInDay);

    if (diffDays === 0) {
        return 'Today is the day!';
    } else if (diffDays < 0) {
     diffDays =  Math.round(Math.abs((today - d)) / msInDay)
        return `${diffDays} days`
    }
    return 'The day is in the past!';
}

console.log(countDays(new Date(2511, 11, 31)));
console.log(countDays(new Date(2022, 11, 26)));
console.log(countDays(new Date()));