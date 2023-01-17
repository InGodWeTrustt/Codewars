function twoSort(s) {
    s.sort();
    return s[0].split('').join('***');
  }

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
