const SortedArray = (() => {
    let dir;

    return class extends Array {
        constructor(dirCons, init = 0) {
            super(init);

            if (!/asc|desc/.test(dirCons)) {
                throw new TypeError('Dir must be \'asc\' or \'desc\'')
            }

            dir = dirCons;
        }


        insert(...values) {
            this.push(...values);
            this.customSort(dir);
            return this.length;
        }

        pop() {
            if (!this.length) {
                return;
            }

            return super.pop();
        }

        shift() {
            return super.shift();
        }

        customSort(dir) {
            dir === 'asc' ? this.sort((a, b) => a - b) : this.sort((a, b) => b - a);
        }
    }
})()

const ascendingArray = new SortedArray('asc')
console.log(ascendingArray, [])
ascendingArray.insert(3)
console.log(ascendingArray, [3])
ascendingArray.insert(1, 2)
console.log(ascendingArray, [1, 2, 3])
ascendingArray.insert(6, 0)
console.log(ascendingArray, [0, 1, 2, 3, 6])
ascendingArray.pop()
console.log(ascendingArray, [0, 1, 2, 3])
ascendingArray.shift()
console.log(ascendingArray, [1, 2, 3])
ascendingArray.insert(-1, 10)
console.log(ascendingArray, [-1, 1, 2, 3, 10])