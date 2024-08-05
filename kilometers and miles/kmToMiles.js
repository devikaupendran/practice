//1km = 0.621371 miles
//miles = km * 0.621371

let fixedValue =  0.621371;
let inputBox = document.getElementById("mytextBox");
let buttonTag = document.getElementById("btn");
let showresult = document.getElementById("result");
let miles;

buttonTag.addEventListener("click",showResult);
    function showResult(){
        let kilometers = parseFloat(inputBox.value);
        miles = kilometers * fixedValue;
        showresult.innerHTML = `${kilometers} kilometers is equal to  ${miles.toFixed(2)} miles`;
    }
