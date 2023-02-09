const makePlural = (options, number) => {
    if(/\d*[567890]$/.test(number) || /^(11|12|13|14)$/.test(number)){
      return options[2] // дней
    } else if(/\d*[234]$/.test(number) && !/^(11|12|13|14)$/.test(number)){
      return options[1] // дня
    } else{
      return options[0] // день
    }
  }


console.log(makePlural(['день', 'дня', 'дней'], 0) === 'дней')
console.log(makePlural(['день', 'дня', 'дней'], 1) === 'день')
console.log(makePlural(['день', 'дня', 'дней'], 2) === 'дня')
console.log(makePlural(['день', 'дня', 'дней'], 3) === 'дня')
console.log(makePlural(['день', 'дня', 'дней'], 4) === 'дня')
console.log(makePlural(['день', 'дня', 'дней'], 5) === 'дней')
console.log(makePlural(['день', 'дня', 'дней'], 11) === 'дней')
console.log(makePlural(['день', 'дня', 'дней'], 20) === 'дней')
console.log(makePlural(['день', 'дня', 'дней'], 21) === 'день')
console.log(makePlural(['день', 'дня', 'дней'], 22) === 'дня')