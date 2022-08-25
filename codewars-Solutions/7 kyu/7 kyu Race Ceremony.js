// Платформа первого места имеет минимально возможную высоту
// Платформа второго места имеет самую близкую высоту к первому месту
// Все платформы имеют высоту больше нуля

function racePodium(b) {
    if (b === 7) return [2, 4, 1]
    let second = Math.ceil(b / 3)
    return [second, second + 1, b - second * 2 - 1]
}


console.log(racePodium(11)); //[ 4, 5, 2 ]
console.log(racePodium(7)); //[ 2,4,1 ]