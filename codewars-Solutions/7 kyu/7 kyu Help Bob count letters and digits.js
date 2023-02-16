function countLettersAndDigits(input) {
    return input.replace(/[^a-z0-9]/gi, '').length;
}

// Example
console.log(countLettersAndDigits("hel2!lo"), 6);
console.log(countLettersAndDigits("n!!_ice!!123"), 7);
console.log(countLettersAndDigits("1"), 1);
console.log(countLettersAndDigits("?"), 0);
console.log(countLettersAndDigits("12345f%%%t5t&/6"), 10);
console.log(countLettersAndDigits("aBcDeFg090"), 10);
console.log(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10)