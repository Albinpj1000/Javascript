var heros=["thor","antman"]


Array.prototype.getHero = function(){
    console.log("hey iam getting hero");
}

//injecting new function (feature) into arrays prototype
//any arrays can access this method now, as it is now a added method to all array datatypes
console.log(heros.getHero());


Object.prototype.getFromObject = function(){
    console.log("hey iam hitting parent obj");
}

//injecting new function (feature) into Objects(global Object) prototype
//any can access this method, as it is now a property of global Object
console.log(heros);


