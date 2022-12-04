
function longest(s1, s2) {
    const mergeStrings = s1 + s2;
    const deleteDuplicatesInMergeString = new Set(mergeStrings)
    return [...deleteDuplicatesInMergeString].sort((a, b) => a.localeCompare(b)).join('')
}


console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
