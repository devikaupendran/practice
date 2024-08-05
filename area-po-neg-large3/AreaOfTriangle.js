//equation : area = (base * height) / 2

let base = prompt("Enter the base value of your triangle ");
let height = prompt("Enter the height of your triangle");
let result = document.getElementById("result");

let number1 = Number(base);
let number2 = Number(height);

    if(isNaN(number1) || isNaN(number2)){
        alert("Invalid input.\n Please enter a number");
    }   

let area = (base * height) / 2;
result.innerHTML = `Base : ${number1} <br> <br> Height : ${number2} <br> <br>Area : ${area}`;

