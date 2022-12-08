function hasSurvived(attackers, defenders) {
    const initAttackPowerAttackers = attackers.reduce((a, b) => a + b, 0);
    const initAttackPowerDefenders = defenders.reduce((a, b) => a + b, 0);

    let survAt = attackers.slice()
    let survDef = defenders.slice()

    survAt.forEach( (attacker, i) => {
        let def = survDef;
        if(typeof def[i] === 'undefined'){
            return;
        } else if(attacker > def[i]){
            def[i] = 'perish'
        } else if(attacker < def[i]){
            survAt[i] = 'perish'
        } else {
            def[i] = 'perish';
            survAt[i] = 'perish';
        }
    });

    survAt = survAt.filter( x => typeof x !== 'string') 
    survDef = survDef.filter( x => typeof x !== 'string')

    if(survAt.length === survDef.length){
        if(initAttackPowerAttackers === initAttackPowerDefenders) return true;
        if(initAttackPowerAttackers > initAttackPowerDefenders){
            return false
        } else {
            return true
        }
    } else if(survAt.length < survDef.length){
        return true;
    } else {
        return false;
    }
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
console.log(hasSurvived([1, 2, 3], []), false);
console.log(hasSurvived([], [1,2,3]), true);
console.log(hasSurvived([6,96,40,63,90,97,60,77,3,22],[45,78,99,98,8,50,4,63,31,88]))