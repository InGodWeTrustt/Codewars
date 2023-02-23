function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length || !listOfCat.length) return '';

    const map = {};
    listOfArt.forEach(book => {
        const [code, n] = book.split(' ');
        // code[0] - first char in code
        map[code[0]] = (map[code[0]] || 0) + Number(n)
    });

    return listOfCat.map(cat => {
        const num = map[cat] || 0;
        return `(${cat} : ${num})`
    }).join(' - ')
}

// Example
let b, c, res
b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D"]
res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
console.log(stockList(b, c) === res)

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c) === res)