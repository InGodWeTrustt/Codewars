// MATHEMATICS ALGORITHMS

function genfib() {
    const fibSeq = [0,1]
    let callFn = 0;
    
    function fib() {
        if(callFn > 1){
            fibSeq[fibSeq.length] = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2];
            callFn++;
        } else [
            callFn++
        ]
        return fibSeq[callFn-1]
    }
    return fib
}



var fib = genfib();
console.log(fib()); // -> returns 0
console.log(fib()); // -> returns 1
console.log(fib()); // -> returns 1
console.log(fib()); // -> returns 2
console.log(fib()); // -> returns 3