let input = document.getElementById("input");
let result = document.getElementById('res');
let answer = ''

function checkInput() {
    if (input.value %2 ===0) {
        answer =  "введенное число четное"
    }
    else {
         answer = "введенное число не четное"
    }
    result.innerText = answer
}

