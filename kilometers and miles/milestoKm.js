//km = miles /0.621371
const fixedvalue = 0.621371;
let inputBox = document.getElementById("mytextBox");
let buttonTag = document.getElementById("btn");
let result = document.getElementById("result");
let kilometers;
buttonTag.addEventListener("click",showresult);
    function showresult(){
        let miles = parseFloat(inputBox.value);
        kilometers = miles / fixedvalue;
        result.innerHTML = `${miles} miles  is equal to ${kilometers.toFixed(2)}km`;
    }