let result = document.getElementById("result");
function guessNumber() {
    let number = prompt("guess a number between 1-30");
    number = Number(number);
    let random = Math.floor(Math.random() * 30) + 1;
    result.innerHTML = random;
    while (number !== random) {
        result.innerHTML = "Sorry your guess was wrong! Better luck next time";
        break;
    }
    if(number == random){
        result.innerHTML = "Congratulations!!! Your guess was right";
    }
}
guessNumber();