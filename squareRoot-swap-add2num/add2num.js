let inputBox1 = document.getElementById("textbox1");
let inputBox2 = document.getElementById("textbox2");
let buttonTag = document.getElementById("btn");
let sumResult;

buttonTag.addEventListener("click",sum);
    function sum(){
        let number1 = Number(inputBox1.value);
        let number2 = Number(inputBox2.value);
        sumResult = number1 + number2;
        document.getElementById("result").textContent = `sum of ${number1} and ${number2} = ${sumResult}`;
    }
