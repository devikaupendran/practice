const number = parseInt(prompt("Enter a number greater than or equal to 0"));
let result = document.getElementById("result");
if(number < 0){
    alert("Factorial of a negative number is not possible ");
}
else if(number == 0){
    result.innerHTML = `The factorial of ${number} is 1`;
}
else{
    let fact = 1;
    for(let i = 1 ; i <= number ; i++){
        fact *= i;
    }
    result.innerHTML = `factorial of ${number} is ${fact}`;
}