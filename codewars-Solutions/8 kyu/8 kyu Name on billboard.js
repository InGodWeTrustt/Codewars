function billboard(name, price = 30) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += price;
    }
    return sum;
} 

// Example
console.log(billboard("Jeong-Ho Aristotelis"), 600);
console.log(billboard("Abishai Charalampos"), 570);
console.log(billboard("Idwal Augustin"), 420);
console.log(billboard("Hadufuns John",20), 260);
console.log(billboard("Zoroaster Donnchadh"), 570);
console.log(billboard("Claude Miljenko"), 450);
console.log(billboard("Werner Vígi",15), 165);
console.log(billboard("Anani Fridumar"), 420);
console.log(billboard("Paolo Oli"), 270);
console.log(billboard("Hjalmar Liupold",40), 600);
console.log(billboard("Simon Eadwulf"), 390);