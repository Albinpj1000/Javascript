//Write a program which tells the number of days in a month, now consider leap year.


var month="January";
var year=2024
month = month.toLowerCase()

var days;

if(month=="january" || month=="march" || month=="may" || month=="july" || month=="august" || month=="october" || month=="december"){
    days=31;
}
else if(month=="pril" || month=="june" || month=="september" || month=="november"){
    days=30;
}
else if(month=="february"){
    
    if(year%4==0)
    days=29;
    else
    days=28;
}

console.log(`${month} in ${year} has ${days} days`);