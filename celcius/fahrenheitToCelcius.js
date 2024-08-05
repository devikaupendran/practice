//celcius = (fahrenheit - 32) / 1.8
let fahrenheit = prompt("Enter fahrenheit");
let result = document.getElementById("result");
fahrenheit = parseFloat(fahrenheit);
if(isNaN(fahrenheit)){
    alert("invalid number");
}
else{
    let celcius = (fahrenheit - 32) / 1.8;
    result.innerHTML = `${fahrenheit}&deg; F is equal to ${celcius.toFixed(2)}&deg; C`;
}