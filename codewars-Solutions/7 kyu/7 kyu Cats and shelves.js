function solution(start, finish) {
    let count = 0;
    let i = start;

    while (i < finish) {
        if (i + 3 <= finish) {
            i += 3;
            count++;
        } else if (i + 1 <= finish) {
            i += 1;
            count++;
        }
    }

    return count;
}

console.log(solution(1, 5)); // 2