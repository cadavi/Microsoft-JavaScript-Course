const now = new Date();
console.log(now);

const win95Launch = new Date(1995, 7, 24);
console.log(win95Launch);

const demoDate = new Date();
demoDate.setMonth(0); //Month start at 0 (january)
console.log(demoDate);

demoDate.setMonth(10);
console.log(`Day of the week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);

const xmas95 = new Date("December 25, 1995 23:15:30");
const weekday = xmas95.getDay();

console.log(weekday); // 1
