let lowerValue = prompt("Enter the lowest value");
let highervalue = prompt("Enter highest value");
lowerValue = Number(lowerValue);
highervalue = Number(highervalue);
let result = document.getElementById("result");

for(let i = lowerValue ; i < highervalue ; i++){
    let isprime = true;
    for(let j = 2 ; j <= Math.sqrt(i); j++){
        if(i % j == 0){
            isprime = false;
            break;
        }
    }
    if(i > 1 && isprime){
        result.innerHTML += `${i} `;
    }
}