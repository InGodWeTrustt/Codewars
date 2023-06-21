const isAnagram = function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');
    if (str1.length !== str2.length) {
        return false;
    }
    let count = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count[char] = (count[char] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("Mary", "Arms")); // false