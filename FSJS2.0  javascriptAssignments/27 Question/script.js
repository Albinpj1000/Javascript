// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

var flag;
for(let i=0;i<=100;i++)
{
    if(i==1 || i==0)
        flag="not_prime"
   
    else if(i==2)
        flag="prime";
    else 
     {
        for(let j=2;j<i;j++)
        {
            if(i%j!=0)
                 flag="prime"
            else{
                flag=" not_prime"
                break;
               } 
        }
     }  

        if(flag=="prime")
        console.log(i);
}
   
    
        
        
       
    
