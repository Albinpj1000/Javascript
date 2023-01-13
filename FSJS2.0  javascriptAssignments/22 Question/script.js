// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// -------------------finding the min and max age-----------------------
    ages.sort((a,b)=>(a-b)) 
    var min = ages[0]
    var max =ages[ages.length-1]
    console.log("minimum age: ",min);
    console.log("maximum age: ",max);  

//---------------------Finding the median age---------------------------
    var median;

    if(ages.length%2==0){
         median = [ages[parseInt(ages.length/2)],ages[parseInt(ages.length/2)+1]]
    }else
         median = [ages[parseInt(ages.length/2)+1]]
           
    console.log("meadian age:",median.toString());

    //------------------Finding the average age----------------------------
    var average = 0;
    var sum = 0;

    for(let i=0;i<ages.length;i++){
         sum = sum + ages[i]
    }
         average = sum/(ages.length)
         console.log("average of ages: ",average);

   
//---------------------range of the ages----------------------------

var range = ages[(ages.length-1)]-ages[0]
console.log("ranges of ages: ",range);



// ---------comparing values (min - average) and (max - average)-------

var min = ages[0]
var max = ages[ages.length-1]

var result = Math.abs((min-average)-(max-average))
console.log("compared value: ",result);



