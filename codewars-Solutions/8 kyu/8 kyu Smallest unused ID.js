// Вернуть наименьший неиспользуемый идентификатор
function nextId(ids) {
    const used = {};
    for (let i = 0; i < ids.length; i++) {
        used[ids[i]] = true;
    }
    for (let j = 0; j <= ids.length; j++) {
        if (!used[j]) {
            return j;
        }
    }
}

console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
console.log(nextId([1,2,0,2,3]), 4);