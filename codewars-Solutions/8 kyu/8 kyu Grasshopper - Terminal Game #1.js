function Hero(name = 'Hero') {
    this.name = name;
    this.experience = 0;
    this.health = 100;
    this.position = '00';
    this.damage = 5;
}


const myHero = new Hero();
console.log(myHero.name, 'Hero');
console.log(myHero.experience, 0);
console.log(myHero.health, 100);
console.log(myHero.position, '00');
console.log(myHero.damage, 5);
console.log(new Hero('Greg').name, 'Greg');