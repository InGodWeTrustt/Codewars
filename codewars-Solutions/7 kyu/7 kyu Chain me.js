function chain(input, fs) {
    return fs.reduce((acc, cur) => cur(acc), input);
}

// Примеры тестов
function add(num) {
    return num + 1;
  }
  
  function mult(num) {
    return num * 30;
  }
  
console.log(chain(2, [add, mult]) === 90);