function nerdify(txt) {
    return txt.replace(/a/gi, 4).replace(/e/gi, 3).replace(/l/g, 1)
}

// Example
console.log(nerdify("Fund4m3nt41s"),"Fund4m3nt41s");
console.log(nerdify("Seven"),"S3v3n");
console.log(nerdify("Los Angeles"),"Los 4ng313s");
console.log(nerdify("Seoijselawuue"),"S3oijs314wuu3");