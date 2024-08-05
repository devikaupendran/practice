let number = parseFloat(prompt("Enter a positive number"));
let result = document.getElementById("result")
let isPrime = true;
if(number == 1){
    result.innerHTML = "1 is neither prime or composite number";
}
else if(number > 1){
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        result.innerHTML = `${number} is a prime number`;
    }
    else{
        result.innerHTML = `${number} is not a prime number`;
    }
}
else{
    result.innerHTML = "The number is not a prime number";
}