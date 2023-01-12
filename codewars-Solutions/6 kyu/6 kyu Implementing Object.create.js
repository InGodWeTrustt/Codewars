// prototype - a prototype to be inherited by newly created object
// properties (optional) - argument, to be passed to Object.defineProperties
//
// throws TypeError if `prototype` parameter is not object and is not null
//
// returns newly created object

Object.create = function (prototype, properties) {

    if (typeof prototype !== 'object') {
        throw new TypeError()
    }

    const res = {}
    this.setPrototypeOf(res, prototype);

    if (typeof properties === "object") {
        this.defineProperties(res, properties);
    }
    
    return res
};
