function printerError(s) {
    const res = [...s].filter(char => char.codePointAt() > 109).length
    return `${res}/${s.length}`
}