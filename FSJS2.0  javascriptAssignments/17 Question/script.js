//Write a program which tells the number of days in a month.

var month="FEBRUARY";
month = month.toLowerCase()

var days;

if(month=="january" || month=="march" || month=="may" || month=="july" || month=="august" || month=="october" || month=="december"){
    days=31;
}
else if(month=="pril" || month=="june" || month=="september" || month=="november"){
    days=30;
}
else if(month=="february"){
    days=28;
}

console.log(`${month} has ${days} days`);