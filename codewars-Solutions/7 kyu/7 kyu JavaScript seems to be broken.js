Array.prototype.join = function (sep) {
    let txt = '';
    this.forEach((cur, idx) => {
        txt += `${cur}${idx + 1 >= this.length ? '' : `${sep}`}`
    })
    return txt;
}

function semicolonSeparationToCommaSeparation(input) {
    return input.split(";").join(",");
}



// Example test case
console.log(semicolonSeparationToCommaSeparation("1;2;3") === "1,2,3");