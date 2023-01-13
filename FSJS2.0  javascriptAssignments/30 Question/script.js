// Create a simple calculator program in JavaScript which can perform the 
//addition, substraction, multiplication and division on given numbers.



const operation = prompt('Enter desired operation (  +  -  *   / ): ');


const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;


if (operation == '+') {
    result = number1 + number2;
}
else if (operation == '-') {
    result = number1 - number2;
}
else if (operation == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
alert(`${number1} ${operation} ${number2} = ${result}`);