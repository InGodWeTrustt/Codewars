function minutesToMidnight(d) {
    const res = Math.abs(Math.round((d - new Date(new Date().setHours(24, 0, 0, 0))) / 60_000))
    return `${res} minute${res === 1 ? '' : 's'}`;
}