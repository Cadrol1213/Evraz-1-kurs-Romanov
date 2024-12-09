input = document.getElementById("input").value;
function checkInput() {
    if (input % 2 =="0") {
        document.getElementById("result").innerText = "введенное число четное"
    }
    else {
        document.getElementById("result").innerText = "введенное число не четное"
    }
}

