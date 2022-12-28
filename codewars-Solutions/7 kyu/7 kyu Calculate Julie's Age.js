function age(x, y) {
    // 1 - Julia, 2 - her brother
    /**
      x1 = x2 + x  
      x1 = x2 * y
      -----------
      x2*y = x2+x <=> x2*(y-1) = x <=>  x2 = x / (y-1)
     */
    const x2 = x / (y-1);
    const x1 = x2 * y;
    return x1;
}

console.log(age(6,3)); // 9
console.log(age(-15, 0.25)); // 5
