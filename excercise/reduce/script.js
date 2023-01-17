//find sum using reduce

const arr = [10,30,50,5,3,2]

const output = arr.reduce((acc,curr) => (
    acc = acc + curr)
,0)
console.log("sum: ",output);


//find max using reduce

const list = [20,1,0,40,9,200]

const largest = list.reduce((acc,curr)=>{
    if(acc<curr)
    acc=curr;
    return acc
},0)

console.log("largest :",largest);

//find min using reduce

const array1 = [20,101,9,10,40,9,200]
const maxValue = Number.MAX_VALUE
const smallest = array1.reduce((acc,curr)=>{
    if(acc>curr)
    acc = curr;
    return acc
},maxValue)

console.log("smallest: ",smallest);