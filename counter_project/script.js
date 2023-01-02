var counter=document.querySelector(".counter");
var followers=document.querySelector(".followers");
console.log(counter);

let count=0

setInterval(()=>{
    if (count<1000) {
        count++
        counter.innerText=count;   
    }
},10)

setTimeout(()=>{
    followers.innerText="followers on instagram !!!"
},10000)


