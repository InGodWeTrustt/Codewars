/**
 * 
 В маленьком городке население составляет p0 на начало года. 
 Население регулярно увеличивается на percent каждый 1 год, и на aug человек, так как  каждый год в город приезжают новые жители. 
 Сколько лет нужно городу, чтобы его население было больше или равно количеству p?
 */


function nbYear(p0, percent, aug, p) {
    let year = 0;
    let start = p0;
    while (start < p) {
        start = Math.floor(start + (start * (percent / 100)) + aug);
        year++;
    }
    return year
}


console.log(nbYear(1500000, 0, 10000, 2000000), 50);
console.log(nbYear(1000, 2, 50, 1214), 4);
console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
