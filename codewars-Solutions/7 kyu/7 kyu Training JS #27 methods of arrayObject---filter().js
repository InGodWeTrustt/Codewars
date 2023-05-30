function countGrade(scores) {
    const result = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === 100) {
            result.S++;
        } else if (scores[i] < 100 && scores[i] >= 90) {
            result.A++;
        } else if (scores[i] < 90 && scores[i] >= 80) {
            result.B++;
        } else if (scores[i] < 80 && scores[i] >= 60) {
            result.C++;
        } else if (scores[i] < 60 && scores[i] >= 0) {
            result.D++;
        } else if (scores[i] === -1) {
            result.X++;
        }
    }
    return result;
}


// Test case 1: Test with array [50,60,70,80,90,100]
console.log("Test case 1:");
console.log(countGrade([50,60,70,80,90,100])); // Expected output: {S:1, A:1, B:1, C:2, D:1, X:0}

// Test case 2: Test with array [65,75,,85,85,95,100,100]
console.log("Test case 2:");
console.log(countGrade([65,75,,85,85,95,100,100])); // Expected output: {S:2, A:1, B:2, C:2, D:0, X:0}

// Test case 3: Test with array [-1,-1,-1,-1,-1,-1]
console.log("Test case 3:");
console.log(countGrade([-1,-1,-1,-1,-1,-1])); // Expected output: {S:0, A:0, B:0, C:0, D:0, X:6}