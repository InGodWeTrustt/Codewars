// "john McClane" --> "McClane john"
function nameShuffler(str) {
    const [first, second] = str.split(' ')
    return [second, first].join(' ')
}