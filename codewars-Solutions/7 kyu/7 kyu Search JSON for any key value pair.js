function getCharacters(obj, key, val) {
    return obj['characters'].filter(o => o[key]?.toLowerCase() === val.toLowerCase());
}

