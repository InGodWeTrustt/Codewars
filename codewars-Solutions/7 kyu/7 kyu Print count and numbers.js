function countMe(data) {
  if (/[^0-9]/g.test(data)) {
    return ''
  }

  let res = '';
  let count = 1;

  for (let i = 0; i < data.length; i++) {
    if (data[i] !== data[i + 1]) {
      res += `${count}${data[i]}`;
      count = 1;
    } else {
      count++;
    }
  }

  return res
}


console.log(countMe('1123'), '211213');
console.log(countMe('1'), '11');
console.log(countMe('11'), '21');
console.log(countMe('a'), '');
console.log(countMe('a123'), '');
console.log(countMe('21'), '1211');
console.log(countMe('1211'), '111221');
console.log(countMe('12322212223443'), '111213321132132413');
console.log(countMe(''), '');
console.log(countMe('123a'), '');