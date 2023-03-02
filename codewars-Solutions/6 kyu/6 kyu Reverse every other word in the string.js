function reverse(str) {
    if(str.replace(/\s/g, '') === '') return '';
    
    return str.split(' ').map((word, i) => {
        if ((i + 1) % 2 === 0){
            return word.split('').reverse().join('');
        } else{
            return word;
        }
    }).join(' ')
}

console.log(reverse("Reverse this string, please!") === "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!") === "I yllaer don't ekil reversing !sgnirts")