// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm


var date = new Date()

var day   = date.getDay()
var month = date.getMonth()
var year  = date.getFullYear()
var hours = date.getHours()
var minutes = date.getMinutes()

console.log(`${year}-${month+1}-${day} ${hours}:${minutes}`);
console.log(`${day}-${month+1}-${year} ${hours}:${minutes}`);
console.log(`${day}/${month+1}/${year} ${hours}:${minutes}`);