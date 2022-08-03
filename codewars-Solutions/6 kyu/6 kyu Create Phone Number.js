function createPhoneNumber(numbers){
    return '(___) ___-____'.replace(/_/g, c => numbers.shift())
  }