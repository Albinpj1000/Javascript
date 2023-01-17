// first name of all users whose age is less than 30

const users = [
    {firstName: "albin", lastName: "xavier", age: 26 },
    {firstName: "donald", lastName: "trump", age: 75 },
    {firstName: "elon", lastName: "musk", age: 50 },
    {firstName: "deepika", lastName: "padukone", age: 26 },
 ]

 const output = users.filter((x)=>(x.age<30))
                     .map((y)=>(y.firstName))
 console.log(output);