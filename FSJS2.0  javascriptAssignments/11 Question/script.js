// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

var date = new Date()

console.log("todays year: ",date.getFullYear());
console.log("todays month (in number): ",date.getMonth()+1);
console.log("todays date: ",date);
console.log("todays day (in number): ",date.getDay());
console.log("hours now: ",date.getHours());
console.log("minutes now: ",date.getMinutes());
console.log("number of second elapsed since jan 1 1970:",date.getTime()/1000," seconds");