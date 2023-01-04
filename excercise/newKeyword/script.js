var student = function(name,age){
    this.name=name;
    this.age=age;
    getName=function(){console.log(`name is ${this.name}`);}
}


var vesham = new student("lijo",40)
console.log(vesham);

var unni = new student("akhil",19)

unni.age=25;
console.log(unni);