//fahrenheit = celcius * 1.8 + 32

let celcius = prompt("Enter the celcius");
celcius = parseFloat(celcius);
let result = document.getElementById("result");

let fahrenheit = celcius * 1.8 + 32;
result.innerHTML = `${celcius} &deg; C is equal to ${fahrenheit.toFixed(2)} &deg; F`;