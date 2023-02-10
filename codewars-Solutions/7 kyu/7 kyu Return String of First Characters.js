function makeString(s) {
    return s.split(' ').map(word => word[0]).join('');
}


// Example
console.log(makeString("sees eyes xray yoat") === "sexy");
console.log(makeString("brown eyes are nice") === "bean");
console.log(makeString("cars are very nice") === "cavn");
console.log(makeString("kaks de gan has a big head") === "kdghabh");