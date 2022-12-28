/**
 * "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
 */


function hexHash(code) {
    const convertToASCI = [...code].map(char => char.codePointAt().toString(16)).join('');
    return convertToASCI.replace(/\s+|[a-z]/gi, '').split('').reduce((acc, cur) => acc + Number(cur), 0)
}