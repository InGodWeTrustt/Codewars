function pieChart(obj) {
    const entries = Object.entries(JSON.parse(obj));
    let totalCount;
    
    if (entries.length > 1) {
        totalCount = entries.reduce((prev, cur, i) => i === 1 ? prev[1] + cur[1] : prev + cur[1]);
    } else {
        totalCount = entries[0][1];
    }

    return JSON.stringify(Object.fromEntries(entries.map(([name, value]) => [name, (value / totalCount) * 360])));
}

console.log(pieChart('{"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}')); // {"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72}'
console.log(pieChart('{"A50B":339,"A269B":180,"A1373B":320,"A1477B":412,"A1837B":188,"A1826B":12,"A923B":144,"A1255B":54,"A1635B":260,"A1248B":388,"A149B":494}'));
console.log(pieChart('{"A1646B":360}'));