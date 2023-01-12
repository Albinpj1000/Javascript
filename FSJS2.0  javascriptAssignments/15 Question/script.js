// Write a program which can give grades to students according to theirs scores:
//     - 90-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


var mark  = 89
var grade

if(mark>=90 && mark<=100)
grade='A';

else if(mark>=70 && mark<=89)
grade='B';

else if(mark>=60 && mark<=69)
grade='C';

else if(mark>=50 && mark<=59)
grade='D';

else if(mark>=0 && mark<=49)
grade='F';

console.log("grade: ",grade);