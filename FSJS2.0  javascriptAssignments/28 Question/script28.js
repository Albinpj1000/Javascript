// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****



                   //-----------------------------code-----------------------------------

// a)
// 	   *
// 	   **
// 	   ***

for(let i=1;i<=3;i++){
    let string="";
    for(let j=1;j<=i;j++){
        string=string+"*"
    }
      console.log(string);
}


console.log("\n");

// b)
// 	   ***
// 	   ***
// 	   ***
for(let i=1;i<=3;i++){
    let string="";
    for(let j=1;j<=3;j++){
        string=string+"*"
    }
      console.log(string);
}

console.log("\n");

// b)   
// 	     *
// 	    ***
//     *****

   for(let i=1;i<=3;i++)
  {
    let string="";
     for(let s=3;s>i;s--)
     string=string+" "
     for(let j=1;j<=(2*i-1);j++)
     string=string+"*"

     console.log(string);
  }
