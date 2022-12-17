function allContinents(list) {
    const continent = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    list.forEach( obj => {
        if(continent.indexOf(obj['continent']) !== -1){
            continent.splice(continent.indexOf(obj['continent']), 1)
        }
    })
    return continent.length === 0
}

