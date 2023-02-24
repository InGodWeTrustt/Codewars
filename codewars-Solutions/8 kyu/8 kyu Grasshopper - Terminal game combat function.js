function combat(health, damage) {
    const res = health - damage;
    return res < 0 ? 0 : res;
}

// Example
console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0, "Health cannot go below 0");