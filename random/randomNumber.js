let buttonTag = document.getElementById("btn");
let resultShow = document.getElementById("result");
let min = 30;
let max = 100;

buttonTag.addEventListener("click",showRandom);
    function showRandom(){
        let result = Math.floor(Math.random() * (max - min)) + min;
        resultShow.innerHTML = result;
    }
