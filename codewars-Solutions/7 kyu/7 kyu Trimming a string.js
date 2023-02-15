function trim(str, size) {
    let copy = str;

    if (size <= 3 && copy.length !== size) {
        copy = `${copy.slice(0, size)}...`;
    } else if (copy.length > size) {
        copy = `${copy.slice(0, size - 3)}...`
    }

    return copy;
}

// Example
console.log(trim("Creating kata is fun", 14) === "Creating ka...");
console.log(trim("He", 1) === "H...");
console.log(trim("Code Wars is pretty rad", 50) === "Code Wars is pretty rad");