let result = document.getElementById("result");
let operator = prompt("Enter an operator( + , - , * , / ) ");
let number1 = parseFloat(prompt("Enter a number"));
let number2 = parseFloat(prompt("Enter a number"));
let res;
    if(operator == '+'){
        res = number1 + number2;
        result.innerHTML = `${number1} ${operator} ${number2} = ${res}`;
    }
    else if(operator == '-'){
        res = number1 - number2;
        result.innerHTML = `${number1} ${operator} ${number2} = ${res}`;
    }
    else if(operator == '*'){
        res = number1 * number2;
        result.innerHTML = `${number1} ${operator} ${number2} = ${res}`;
    }
    else{
        res = number1 / number2;
        result.innerHTML = `${number1} ${operator} ${number2} = ${res}`;
    }
