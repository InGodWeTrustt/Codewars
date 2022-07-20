// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"

// even - f(n)= n/2
// odd - f(n) = 3*n+1

function collatz(n){
    const res = [n]
    let last =  res[0]
    while(last > 1){
        if(last % 2 === 0){
            res.push(last/2)
        } else{
            res.push(3*last+1)
        }
        last = res[res.length-1]
    }
    return res.join('->')
}


console.log(collatz(3)) // "3->10->5->16->8->4->2->1"