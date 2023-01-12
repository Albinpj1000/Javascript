//Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

var name="  albin   "
var nameLength= name.length

console.log(name);
console.log("length of string including white space:",nameLength);

var trueLength = name.trim().length
console.log(name.trim());
console.log("true length of string :",trueLength);

