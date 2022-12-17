function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
}


console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")