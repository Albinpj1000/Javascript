//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// - 4 > 3
// - 4 >= 3
// - 4 < 3
// - 4 <= 3
// - 4 == 4
// - 4 === 4
// - 4 != 4
// - 4 !== 4
// - 4 != '4'
// - 4 == '4'
// - 4 === '4'
// - Find the length of python and jargon and make a falsy comparison statement.

 4 > 3;    //true
 4 >= 3    //true
 4 < 3     //false
 4 <= 3    //false
 4 == 4    //true
 4 === 4   //true
 4 != 4    //false
 4 !== 4   //false
 4 != '4'  //false
 4 == '4'  //true
 4 === '4' //false

 var python="python";
 var jargon="jargon";
 var result;
 var pythonLength = python.length
 var jargonLenth = jargon.length

 if(pythonLength==jargonLenth)
    result=true
 else
    result=false

    console.log("result: ",result);