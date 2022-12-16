function compose(f, g) {
    return (...args) => { return f(g(...args)); }
}

