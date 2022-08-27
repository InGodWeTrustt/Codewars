function cakes(recipe, available) {
    let finish = false;
    let count = 0;
    let copy = JSON.parse(JSON.stringify(recipe))

    while(!finish){
        Object.entries(copy).forEach( ([key, _]) => {

            if(!available[key]) {
                finish = true;
                count = 0;
                return;
            }

            if(copy[key] > available[key]) {
                finish = true;
                return;
            }
        })

        if(!finish){
            increase(copy, recipe)
            count++
        }
    }

    return count
}

function increase(obj, src){
    for(const key in obj){
        obj[key] += src[key]
    }
}


let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); // 2

recipe = { cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 }
available = { sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 }
console.log(cakes(recipe, available)); // 11

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available)); // 0