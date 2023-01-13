// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//  If it does not exist add to the countries list.


var countries = ["india","spain","swedan","italy"]

if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA");
}
else
 countries.push("ethiopia")


 console.log("new array: ",countries);