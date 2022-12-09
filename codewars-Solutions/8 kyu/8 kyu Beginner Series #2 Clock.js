function past(h, m, s) {
    let secondsInHours = 3600;
    let secondsInMinutes = 60;
    return (secondsInHours * h + secondsInMinutes * m + s) * 1000
}

console.log(past(1,1,1)); // 3661000
