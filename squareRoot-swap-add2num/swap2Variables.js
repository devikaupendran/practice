//swap temp = a , a = b , b = temp

let inputBox1 = document.getElementById("textBox1");
let inputBox2 = document.getElementById("textBox2");
let buttonTag = document.getElementById("btn");
let resultShow = document.getElementById("result");

//creating a temporary variable 
let temp_Variable;

buttonTag.addEventListener("click",swapNumbers);
    function swapNumbers(){
        let number1 = Number(inputBox1.value);
        let number2 = Number(inputBox2.value);
            if(isNaN(number1) || isNaN(number2)){
                alert("Invalid input .\n Please enter an  number");
            }
            else{
                //swapping
                temp_Variable = number1;
                number1 = number2;
                number2 = temp_Variable;
                resultShow.innerHTML = `Result of Swapping is : ${number1} , ${number2}`;
            }
    }

