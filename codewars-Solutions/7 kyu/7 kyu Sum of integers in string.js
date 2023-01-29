function sumOfIntegersInString(s) {
    // +b equal Number(b)
    return s.match(/(\d+)/gi) ? s.match(/(\d+)/gi).reduce((a, b) => a + +b, 0) : 0
}


console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.")); // 3868