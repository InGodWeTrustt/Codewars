function countVegetables(string) {
    const cache = {};
    const vegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];

    string.split(' ').forEach(word => {
        if(vegetables.includes(word)){
            cache[word] = (cache[word] || 0) + 1
        }
    });

    return Object.entries(cache).sort((a, b) => {
        if (b[1] === a[1]) {
            return compare(b[0], a[0])
        } else {
            return b[1] - a[1];
        }
    }).map(([k, v]) => [v, k])
}

function compare(str1, str2){
    if(str1 === str2) return 0;
    return str1 < str2 ? -1 : 1;
}


// Example
let lst1 = [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']];
let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
console.log(countVegetables(s1)); // lst1