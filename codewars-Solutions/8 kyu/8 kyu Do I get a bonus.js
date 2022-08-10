/**
 *  Если bonus равен true, то нужно умножить зарплату на 10
 * @param {*} salary 
 * @param {*} bonus 
 */

const bonusTime = (salary, bonus) =>  `£${bonus ? salary*10 : salary}`;

console.log(bonusTime(10000, true)); //  '£100000'
console.log(bonusTime(2, false)); //  '£100000'