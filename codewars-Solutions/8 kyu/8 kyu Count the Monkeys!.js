function monkeyCount(n) {
    return Array.from({ length: n }).map((_, idx) => idx + 1)
}