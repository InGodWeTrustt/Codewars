function addProperty(obj, prop, value) {
    if (prop in obj) {
        throw new Error(`Property ${prop} already exists in object`)
    }

    Object.defineProperty(obj, prop, {
        get() {
            return value
        },
        set(val) {
            value = val;
        }
    })
}

// Example
const obj = {};
addProperty(obj, "name", "Palle");
console.log(obj.name === "Palle");
obj.name = "Dylan";
console.log(obj.name === "Dylan");
addProperty(obj, "name", "Palle");