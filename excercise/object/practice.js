// declaring objects

// //------------------------- part 1------------------------------
const rocket ={
    name:"appolo",
    fuel:100,
}
console.log(rocket);

// adding properties
rocket.home="earth";
rocket["dest"]="mars";
console.log(rocket);

// //------------------------- part 2------------------------------

const rocket = new Object() //constructor method
rocket.name="appolo";
rocket.fuel=100
rocket.dest="moon"

console.log(rocket);


//------------------------- part 3------------------------------
const rocket ={
    name:"appolo",
    fuel:100,
}

const obj2=Object.create(rocket)
console.log(obj2);                   // wont show properties
console.log(Object.getPrototypeOf(obj2)); // properties are stored in prototype

                 

//------------------------- part 4------------------------------
const obj4=Object.create({})
Object.defineProperty(obj4,"book",{
    value:"ikigai",
    enumerable:true
})
console.log(obj4);


