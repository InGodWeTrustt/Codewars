/**
 *     Дано:
 *  1) количество столбов;
 *  2) расстояние между столбами (10 – 30 метров)
 *  3) ширина столба (10 – 50 сантиметров)
 *  Примечание. Ширина столба и расстояние между столбами одинаковое 
 * 
 * Необходимо рассчитать расстояние между первым и последним столбом в сантиметрах 
 * (без ширины первого и последнего столба).
 */


const pillars = (numPill, dist, width) => {
    let distToCm = dist * 100;
    let distBetweenFirstThird = (numPill - 2) * width + (numPill - 1) * distToCm;
    return distBetweenFirstThird > 0 ? distBetweenFirstThird : 0;
}

console.log(pillars(1, 20, 25));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30), 15270);