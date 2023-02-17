function finalGrade(exam, num) {
    return (exam > 90 || num > 10) ? 100 :
           (exam > 75 && num >= 5) ? 90 :
           (exam > 50 && num >= 2) ? 75 : 0;
}

// Example
console.log(finalGrade(100, 12) === 100);
console.log(finalGrade(85, 5) === 90);