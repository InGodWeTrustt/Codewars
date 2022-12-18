function isLanguageDiverse(list) {
    const map = {}
    let res = true;

    list.forEach(({ language }) => map[language] ? map[language]++ : map[language] = 1);
    let devsCount = Object.values(map);

    for (let i = 0; i < devsCount.length; i++) {
        for (let j = 0; j < devsCount.length; j++) {
            if(devsCount[i] / devsCount[j] > 2){
                res = false;
                break;
            }
        }        
    }

    return res;
}