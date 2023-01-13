// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

var fileName = "index.html"
fileArray = Array.from(fileName);

var dotIndex = fileArray.indexOf(".");
     
var extArray = fileArray.slice(dotIndex+1) 
   
var extension = extArray.join("");

console.log(`extension of ${fileName}  is .${extension}`);