Object.defineProperties(Math, {
    "degrees": {
        value: function (rad) {
            const res = ((180 * rad) / this.PI).toFixed(2)
            return `${parseFloat(res)}deg`
        }
    },
    "radians": {
        value: function (deg) {
            const res = (((this.PI * deg) / 180)).toFixed(2)
            return `${parseFloat(res)}rad`
        }
    }
})

console.log(Math.degrees(Math.PI), '180deg', 'Value returned should be 180deg');
console.log(Math.radians(180), '3.14rad', 'Value returned should be 3.14rad');