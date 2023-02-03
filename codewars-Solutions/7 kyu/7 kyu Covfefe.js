function covfefe(str) {
    if (/coverage/g.test(str)){
        return str.replace(/coverage/g, 'covfefe')
    } else {
        return str +' covfefe'
    }
}

console.log(covfefe("coverage coverage") === "covfefe covfefe");
console.log(covfefe("nothing") === "nothing covfefe");
console.log(covfefe("double space ") === "double space  covfefe");
console.log(covfefe("covfefe") === "covfefe covfefe");
console.log(covfefe("erag") === "erag covfefe");