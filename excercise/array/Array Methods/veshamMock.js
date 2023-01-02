// function test (){
//      let a = 10 

//     {
//         // let a=100
//         console.log(a);
//     }
     
// }
// test()


// array destructuring 

const numbers = [1,2,3,4,5,6]

const [a,b,,d,e,f] = numbers

// console.log(d);

//object destructuring

const obj = {
    name:'vesham',
    age:26
}

const {name,age} = obj

// console.log(name);

//Call


const obj1 = {
    name:'vesham',
    age:26,
    getInfo: function (mes){
     return   this.name + ' ' + this.age  + " " + mes
    }
}


const obj2 = {
    name:'riyas ',
    age:29,
}

let value = obj1.getInfo.bind(obj2,'hi')
// console.log( value());

const h = Array.isArray(numbers)
console.log(typeof(NaN));






