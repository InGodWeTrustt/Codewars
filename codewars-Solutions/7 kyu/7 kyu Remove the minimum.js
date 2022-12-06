const removeSmallest = numbers => {
    const minVal = Math.min(...numbers); // находим минимум
    const minIdx = numbers.findIndex(num => num === minVal); // зная минимум, ищем в массиве элемент который равен ему и возвращаем его индекс
    const copy = [...numbers]; // создаем  копию массива не глубокую
    copy.splice(minIdx, 1); // Удаляем минимальный элемент из копии массива
    return copy; // возвращаем копию массива
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5])