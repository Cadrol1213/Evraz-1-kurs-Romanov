let number = 0
let number1 = 0
let result = document.getElementById('res');

function function1() {
    number = 0
    if (number == '0') {
        MakeBlack();
    }
    result.innerText = number
}

function function2() {
    number = 1
    if (number == '1') {
        MakeWhite();
    }
    result.innerText = number
}

function function3() {
    number = 2
    if (number == '2') {
        MakeBlue();
    }
    result.innerText = number
}

function function4() {
    number = 5
    if (number == '5') {
        MakeGreen();
    }
    result.innerText = number
}

function function5() {
    number = number + 1
    number1 = number % 2
    if (number == '1') {
        MakeWhite();
    } else if (number == '2') {
        MakeBlue()
    } else if (number == '5') {
        MakeGreen()
    } else if (number1 == '0') {
        MakeRed()
    } else if (number1 !== '0') {
        MakeGold()
    } else {
        MakeGold();
    }
    result.innerText = number
}

function function6() {
    number = number - 1
    number1 = number % 2
    if (number == '0') {
        MakeBlack()
    } else if (number == '1') {
        MakeWhite()
    } else if (number == '2') {
        MakeBlue()
    } else if (number == '5') {
        MakeGreen()
    } else if (number1 !== '0') {
        MakeGold()
    } else if (number1 == '0') {
        MakeRed();
    } else {
        MakeRed();
    }
    result.innerText = number
}

function MakeBlack() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "black";
    element.style.color = "white";
}

function MakeWhite() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "white";
    element.style.color = "black";
}

function MakeBlue() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "blue";
    element.style.color = "white";
}

function MakeGreen() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "green";
    element.style.color = "white";
}

function MakeRed() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "Red";
    element.style.color = "black";
}

function MakeGold() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "gold";
    element.style.color = "black";
}










