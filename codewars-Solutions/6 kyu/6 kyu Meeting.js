function meeting(s) {
    return s.split(';')
        .map(fullName => {
            const [firstName, lastName] = fullName.toUpperCase().split(':');
            return [lastName, firstName]
        })
        .sort(Intl.Collator().compare)
        .map(fullName => `(${fullName.join(', ')})`)
        .join('')
}


// Example
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn") === 
"(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");