function calculateYears(principal, interest, tax, desired) {
    let year = 0
    let p = principal
    while (p < desired) {
        p = p + p * interest*(1 - tax)
        year++;
    }
    return year
}

