function reverseVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = str.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (!vowels.has(arr[left])) {
            left++;
            continue;
        }

        if (!vowels.has(arr[right])) {
            right--;
            continue;
        }

        // swap chars
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('')
}

// Example test case
console.log(reverseVowels("Hello!") === "Holle!");
console.log(reverseVowels("Tomatoes") === "Temotaos");