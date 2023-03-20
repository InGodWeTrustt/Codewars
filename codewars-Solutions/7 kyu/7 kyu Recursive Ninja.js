const chirp = n => n === 1 ? 'chirp' : `chirp-${chirp(n-1)}`;

// Example
console.log(chirp(4) === "chirp-chirp-chirp-chirp");
console.log(chirp(2) === "chirp-chirp");