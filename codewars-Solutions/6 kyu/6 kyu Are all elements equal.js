Object.defineProperty(String.prototype, "eqAll", {
    value: function eqAll() {
        if (!this.length) return true;
        let res = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] !== this[i + 1]) {
                res = false;
                break;
            }
        }

        return res;
    }
});

Object.defineProperty(Array.prototype, "eqAll", {
    value: function eqAll() {
        if (!this.length) return true;
        let res = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] !== this[i + 1]) {
                res = false;
                break;
            }
        }

        return res;
    }
});

// Example
console.log([0, 0, 0, 0].eqAll(), true);
console.log([0, 1, 2, 3].eqAll(), false);
console.log([].eqAll(), true);
console.log([0, false].eqAll(), false);
console.log([undefined, undefined, true].eqAll(), false);
console.log([undefined, undefined, undefined].eqAll(), true);
console.log([null, null, true].eqAll(), false);
console.log([null, null, null].eqAll(), true);
console.log([false, false, true].eqAll(), false);
console.log([false, false, false].eqAll(), true);
console.log(["", "", true].eqAll(), false);
console.log(["", "", ""].eqAll(), true);
console.log([0, 0, true].eqAll(), false);
console.log([0, 0, 0].eqAll(), true);
console.log([0n, 0n, true].eqAll(), false);
console.log([0n, 0n, 0n].eqAll(), true);
console.log([-0, -0, true].eqAll(), false);
console.log([-0, -0, -0].eqAll(), true);
console.log([-0n, -0n, true].eqAll(), false);
console.log([-0n, -0n, -0n].eqAll(), true);
console.log([0, 0, -0, -0].eqAll(), true); // -0 === 0
console.log([0n, 0n, -0n, -0n].eqAll(), true); // -0n === 0n
console.log([NaN, NaN, true].eqAll(), false);
console.log([NaN, NaN, NaN].eqAll(), false); // NaN !== NaN