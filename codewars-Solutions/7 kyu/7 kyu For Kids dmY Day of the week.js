function dayOfTheWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [day, month, year] = date.split(/\//g);
    const curDay = new Date(year, month - 1, day).getDay();
    return days[curDay];
}

console.log(dayOfTheWeek("20/02/2045")); // "Monday"
console.log(dayOfTheWeek("24/01/2017")); // "Tuesday"
console.log(dayOfTheWeek("05/08/2015")); // "Wednesday"
console.log(dayOfTheWeek("07/12/2000")); // "Thursday"
console.log(dayOfTheWeek("16/09/2016")); // "Friday"
console.log(dayOfTheWeek("30/12/2017")) // "Saturday"