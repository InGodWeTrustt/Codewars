function getGrade(...args) {
    const average = args.reduce((a, b) => a + b) / args.length;
    const grade = ['A', 'B', 'C', 'D', 'F'];

    for (let i = 100; i > 60; i -= 10) {
        if (average <= i && average >= (i - 10)) {
            return grade.shift()
        } else{
            grade.shift()
        }
    }
    
    // F
    return grade[0]
}


console.log(getGrade(65,70,59)); // D
console.log(getGrade(44,55,52)); // F
console.log(getGrade(20,20,20)); // F
