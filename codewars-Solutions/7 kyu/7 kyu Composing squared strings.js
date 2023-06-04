function compose(s1, s2) {
    let lines1 = s1.split('\n');
    let lines2 = s2.split('\n');
    let strng = [];

    for (let i = 0; i < lines1.length; i++) {
        let line = lines1[i].substring(0, i + 1) + lines2[lines2.length - i - 1].substring(0, lines2[0].length - i);
        strng.push(line);
    }
    return strng.join('\n');
}

console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB") === "bNkTB\nhTrWO\nRTFVi\nCnnIj")