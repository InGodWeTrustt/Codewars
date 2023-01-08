/**
 "4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
 */

function sumStr(...args) {
    let sum = 0;
    
    for(let i = 0; i < args.length; i++){
      if(args[i].length){
        sum += Number(args[i]) // or +args[i]
      }
    }
    
    return sum.toString();
  }

console.log(sumStr("4","5"), "9");
console.log(sumStr("34","5"), "39");