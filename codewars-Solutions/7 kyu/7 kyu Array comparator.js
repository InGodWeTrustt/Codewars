function matchArrays(v,r){
    let count = 0;

    // if second array includes element  then increment count by 1 (count++ -> count = count + 1) 
    // otherwise do nothing
    v.forEach( elem => r.includes(elem) ? count++ : '')
    return count
}


console.log(matchArrays(['Perl', 'Closure', 'JavaScript'], ['Go', 'C++', 'Erlang']), 0);
console.log(matchArrays(['incapsulation', 'OOP', 'array'], ['time', 'propert', 'paralelism', 'OOP']), 1);
console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]), 4);