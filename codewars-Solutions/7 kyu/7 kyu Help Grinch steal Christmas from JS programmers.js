Date.prototype.getDate = function getGrinchDate() {
    const [month, date, year] = this.toLocaleDateString('en').split('/');
    // in my case 
    // const [date, month,year] = this.toLocaleDateString('ru').split('.')
    return (month == 12 && date == 25) ? 26 : +date;
}


// Example
let d = new Date('1957-10-25');
console.log(d.getMonth(), 9);
console.log(d.getDate(), 25);

d = new Date('1957-12-12');
console.log(d.getMonth(), 11);
console.log(d.getDate(), 12);

d = new Date('1957-12-25');
console.log(d.getMonth(), 11);
console.log(d.getDate(), 26, 'Merry Christmas!');
