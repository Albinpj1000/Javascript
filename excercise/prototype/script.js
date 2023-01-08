// var heros=["thor","antman"]


// Array.prototype.getHero = function(){
//     console.log("hey iam getting hero");
// }

// //injecting new function (feature) into arrays prototype
// //any arrays can access this method now, as it is now a added method to all array datatypes
// console.log(heros.getHero());


// Object.prototype.getFromObject = function(){
//     console.log("hey iam hitting parent obj");
// }

// //injecting new function (feature) into Objects(global Object) prototype
// //any can access this method, as it is now a property of global Object
// console.log(heros);


//--------------------------inheritane--------------------------

const User = {
    name: "top name",
    email: "topuser@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false,
    __proto__:User
}

const TSAssistant = {
    makeAssignment: 'JS assigment',
    fullTime: true,
    __proto__:TeachingSupport     
    //adding second object to first objects prototype, 
    //again another object can also be added inside the prototype of second obj
    // and it can be keep on chaining. prototype chaining
                                
}

// different syntax
TeachingSupport.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,User)