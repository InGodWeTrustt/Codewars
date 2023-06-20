/**
 * Напишите две функции, которые преобразуют римскую цифру в целое число и обратно
 * Римскими цифрами 1990 год отображается: 1000=М, 900=СМ, 90=ХС; в результате MCMXC. 
 * 2008 записывается как 2000=MM, 8=VIII; или ММВIII. 
 * 1666 использует каждый римский символ в порядке убывания: MDCLXVI.
    Symbol	Value
        I	1
        IV	4
        V	5
        X	10
        L	50
        C	100
        D	500
        M	1000
 */
class RomanNumerals {
    static toRoman(num) {
        let map = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];
        let result = '';
        for (let i = 0; i < map.length; i++) {
            while (num >= map[i].value) {
                result += map[i].symbol;
                num -= map[i].value;
            }
        }
        return result;
    }

    static fromRoman(str) {
        let map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        let total = 0;
        for (let i = 0; i < str.length; i++) {
            let curr = map[str[i]];
            let next = map[str[i + 1]];
            if (next && curr < next) {
                total -= curr;
            } else {
                total += curr;
            }
        }
        return total;
    }
}

console.log(RomanNumerals.toRoman(1000), 'M');
console.log(RomanNumerals.toRoman(4), 'IV');
console.log(RomanNumerals.toRoman(1), 'I');
console.log(RomanNumerals.toRoman(1990), 'MCMXC');
console.log(RomanNumerals.toRoman(2008), 'MMVIII');

console.log(RomanNumerals.fromRoman('XXI'), 21);
console.log(RomanNumerals.fromRoman('I'), 1);
console.log(RomanNumerals.fromRoman('IV'), 4);
console.log(RomanNumerals.fromRoman('MMVIII'), 2008);
console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666);