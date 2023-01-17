function reverse(string) {
    return string.split(' ').reverse().join(' ')
}

console.log(reverse('no one cares')); // 'cares one no'