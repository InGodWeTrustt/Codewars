function ageInDays(year, month, day) {
    const msInDay = 24 * 60 * 60 * 1000;
    const countDays = Math.floor((new Date() - new Date(year, month - 1, day)) / msInDay);
    return `You are ${countDays} days old`;
}


// Example
const birthday = new Date();
birthday.setDate(birthday.getDate() - 2);

console.log(ageInDays(birthday.getFullYear(), birthday.getMonth() + 1, birthday.getDate())); // You are 2 days old