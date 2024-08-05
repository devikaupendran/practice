let result = document.getElementById("result");
let number1 = parseInt(prompt("Enter first number"));
let number2 = parseInt(prompt("Enter second number"));
let number3 = parseInt(prompt("Enter third number"));

let result1 = number1 % 10;
let result2 = number2 % 10;
let result3 = number3 % 10;

if(result1 == result2 && result1 == result3){
    result.innerHTML = `${number1} , ${number2} ,${number3} have same last digits`;
}
else{
    result.innerHTML = `${number1} , ${number2} ,${number3} have different last digits`;
}