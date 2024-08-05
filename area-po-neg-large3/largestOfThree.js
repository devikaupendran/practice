let result = document.getElementById("result");
let number1 = parseFloat(prompt("Enter your first number"))
let number2 = parseFloat(prompt("Enter your second number"))
let number3 = parseFloat(prompt("Enter your third number"))

if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
    alert("enter valid number");
}
else{
    if(number1 > number2 && number1 > number3){
        result.innerHTML = `You have entered three numbers : ${number1} , ${number2} and ${number3} <br> <br> ${number1} is larger`;
    }
    else if(number2 > number1 && number2 > number3){
        result.innerHTML = `You have entered three numbers : ${number1} , ${number2} and ${number3} <br> <br> ${number2} is larger`;
    }
    else{
        result.innerHTML = `You have entered three numbers : ${number1} , ${number2} and ${number3} <br> <br> ${number3} is larger;`

    }
}