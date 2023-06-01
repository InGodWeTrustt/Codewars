/**
 * Покупка оптом зачастую дешевле, чем покупка отдельных позиций. 
 * Вам нужно будет определить общую стоимость яблок. 
 * Напишите функцию apples, которая принимает в качестве аргументов количество килограммов и цену. 
 * При покупке 1 и более килограммов скидка 5%, при покупке 3 и более килограммов скидка 10%,
 *  при покупке 5 и более килограммов скидка 15%, и так далее, 
 * пока не будет достигнута максимальная скидка 30. %.
 */
function apples(weight, price) {
    let discount = 0;

    for (let i = 1; i <= weight; i += 2) {
        discount += 0.05;
    }

    const total = weight * price * (1 - discount);
    return total;
}

console.log(apples(0.5, 2.98) === 1.49);
console.log(apples(1, 6.7) === 6.365);
console.log(apples(6, 2.75) === 14.025);