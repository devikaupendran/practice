let inputbox = document.getElementById("textbox");
let button = document.getElementById("btn");
let result = document.getElementById("result");

inputbox.addEventListener("keydown",(event) => {
    if(event.key == 'Enter'){
        showResult();
    }
})
button.addEventListener("click",showResult);
    function showResult(){
        let number = Number(inputbox.value);
        if(isNaN(number)){
            alert("Please enter a number")
        }
        else{
            if(number % 2 == 0){
                result.innerHTML = "You have entered an 'EVEN' number"
            }
            else{
                result.innerHTML = "You have entered an 'ODD' number"
            }
        }
    }