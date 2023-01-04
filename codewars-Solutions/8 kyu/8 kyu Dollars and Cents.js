function formatMoney(amount) {
    let [int, float] = amount.toString().split('.')
    if (typeof float !== 'undefined') {
        float = float.length > 1 ? float : float + "0"
    } else {
        float = '00'
    }
    const pattern = int + '.' + float
    return `\$${pattern}`
}