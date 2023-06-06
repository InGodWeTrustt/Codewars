// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.
function permutations(str) {
    const set = new Set();

    function permute(str, prefix = '') {
        if (str.length === 0) {
            set.add(prefix);
        } else {
            for (let i = 0; i < str.length; i++) {
                const char = str[i];
                const remainder = str.slice(0, i) + str.slice(i + 1);
                permute(remainder, prefix + char);
            }
        }
    }

    permute(str);

    return Array.from(set);
}

console.log(permutations('a'), ['a']);
console.log(permutations('ab'), ['ab', 'ba']);
console.log(permutations('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);