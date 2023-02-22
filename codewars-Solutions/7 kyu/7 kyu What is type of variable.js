function type(value) {
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date';
    if (Object.is(value, null)) return 'null';

    return typeof value;
}

// Example
console.log(type([]), 'array');
console.log(type({}), 'object');
console.log(type(''), 'string');
console.log(type([].join()), 'string');
console.log(type(new Date()), 'date');
console.log(type(null), 'null');