/**
 * Calculate max average hourly speed per hour
 * @param {number} s 
 * @param {number[]} x 
 * @return maximum average speed
 */
function gps(s, x) {
    if (x.length < 1 || s == 0 || x == 0) return 0;
    let last;
    const res = x.reduce((prev, cur, i) => {
        if (i === 0) {
            last = cur;
            return []
        } else {
            let delta = cur - last
            let avgHSpeed = avgHourlySpeed(s, delta)
            last = cur
            return [...prev, avgHSpeed]
        }
    }, []);
    return  Math.floor(res.sort((a, b) => a-b)[res.length-1])
}

function avgHourlySpeed(s, delta_dist) {
    return (3600 * delta_dist) / s
}

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])) //74
console.log(gps(20,  [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])) //41