let range = parseFloat(prompt("Enter a number"));
let result = document.getElementById("result");
let sum = 0;
for( let i = 1 ; i <= range ; i++){
    sum += i;
}
result.innerHTML = `Sum of ${range} numbers are ${sum}`;