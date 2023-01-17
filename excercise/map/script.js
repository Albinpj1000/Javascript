const users = [
                 {firstName: "albin", lastName: "xavier", age: 26 },
                 {firstName: "donald", lastName: "trump", age: 75 },
                 {firstName: "elon", lastName: "musk", age: 50 },
                 {firstName: "deepika", lastName: "padukone", age: 26 },
              ]
                            
//list of fullname of all user
//["albin xavier","donald trump","elon musk",,,]

const fullName = users.map((x)=>(x.firstName+" "+x.lastName))
// console.log(fullName);

//how many users have a particular age
//acc = {26:2,75:1,50:1}

const output = users.reduce((acc,curr)=>{
    // console.log(curr.age);
    if(acc[curr.age])
    acc[curr.age]++;
    else 
    acc[curr.age]=1;
    return acc
},{})

console.log(output);

