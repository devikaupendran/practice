let inputBox = document.getElementById("textBox");
let buttonTag = document.getElementById("btn");
let resultShow = document.getElementById("result");
let result;
buttonTag.addEventListener("click",findSquareRoot);
    function findSquareRoot(){
        let number = Number(inputBox.value);
        if(isNaN(number)){
            alert("Invalid Input. \n please enter a number");
        }
        result = Math.sqrt(number);
        resultShow.innerHTML = `Square Root of ${number} is ${result.toFixed(3)}`;
        inputBox.value = "";
        inputBox.focus();
        setTimeout(() => { resultShow.innerHTML = ""; } , 6000)
    }
