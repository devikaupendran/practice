let textbox = document.getElementById("textbox");
let button = document.getElementById("btn");
let result = document.getElementById("result");

textbox.addEventListener("keydown",(event) => {
    if(event.key == 'Enter'){
        showResult();
    }
})

button.addEventListener("click",showResult);
    function showResult(){
        let number = parseInt(textbox.value);
        if(isNaN(number)){
            alert("You have entered an invalid input !! \n \n Please enter a number.")
        }
        else{
            if(number > 0){
                result.innerHTML = `The number you have entered is a Positive number`;
            }
            else if(number == 0){
                result.innerHTML = "The number you have enter is Zero";
            }
            else{
                result.innerHTML = "The number you have entered is a Negative number"
            }
        }
    }