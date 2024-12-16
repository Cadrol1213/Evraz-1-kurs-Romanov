// your code goes here
let result = document.getElementById('res');
let result1 = document.getElementById('output');
let result2 = document.getElementById('output1');
let a = 0;
let b = 0
let x1 = 490
let rect1X = 0
function ch1(){
    a = +a + 1;
    result.innerText = a;
}
function ch2(){
    a = +a + 5;
    result.innerText = a;
}
function ch3(){
    a = +a + 10;
    result.innerText = a;
}
function ch4(){
    a = +a + 50;
    result.innerText = a;
}
function ch5(){
    if (+a > 0){
        a = +a - 1;
        result.innerText = a;}
    else {
        a = o;
        result.innerText = a;
    }

}
function ch6(){
    if (+a > 4){
        a = +a - 5;
        result.innerText = a;}
    else {
        a = o;
        result.innerText = a;
    }

}
function ch7(){
    if (+a > 9){
        a = +a - 10;
        result.innerText = a;}
    else {
        a = o;
        result.innerText = a;
    }

}
function ch8(){
    if (+a > 49){
        a = +a - 50;
        result.innerText = a;}
    else {
        a = o;
        result.innerText = a;
    }

}



function moveRight1() {
    let element = document.getElementById("rect1");
    let currentLeft= parseInt(window.getComputedStyle(element).left, 10) || 0;
    element.style.left = (currentLeft + a) + "px";
}
function moveRight2() {
    let element = document.getElementById("rect2");
    let currentLeft= parseInt(window.getComputedStyle(element).left, 10) || 0;
    element.style.left = (currentLeft + a) + "px";
}
function moveRight3() {
    let element = document.getElementById("rect3");
    let currentLeft= parseInt(window.getComputedStyle(element).left, 10) || 0;
    element.style.left = (currentLeft + a) + "px";
}


function moveLeft1() {
    let element = document.getElementById("rect1");
    let currentLeft= parseInt(window.getComputedStyle(element).left, 10) || 0;
    element.style.left = (currentLeft - a) + "px";
}
function moveLeft2() {
    let element = document.getElementById("rect2");
    let currentLeft= parseInt(window.getComputedStyle(element).left, 10) || 0;
    element.style.left = (currentLeft - a) + "px";
}
function moveLeft3() {
    let element = document.getElementById("rect3");
    let currentLeft= parseInt(window.getComputedStyle(element).left, 10) || 0;
    element.style.left = (currentLeft - a) + "px";
}

function moveHeight1() {
    let element = document.getElementById("rect1");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top = (currentTop - a) + "px";
}
function moveHeight2() {
    let element = document.getElementById("rect2");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top = (currentTop - a) + "px";
}
function moveHeight3() {
    let element = document.getElementById("rect3");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top = (currentTop - a) + "px";
}

function moveDown1() {
    let element = document.getElementById("rect1");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;

  element.style.top =  (currentTop + a) + "px";
}
function moveDown2() {
    let element = document.getElementById("rect2");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;

    element.style.top =  (currentTop + a) + "px";
}
function moveDown3() {
    let element = document.getElementById("rect3");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;

    element.style.top =  (currentTop + a) + "px";
}
function moveDown(){
    if (b === 1){
        moveDown1();
        getPoint3();
    }
    else if(b === 2){
        moveDown2()
        getPoint4()

    }
    else if(b === 3){
        moveDown3();
        getPoint5();
    }
    else{
        GetControlValue();
    }

}
function moveHeight(){
    if (b === 1){
        moveHeight1();
        getPoint3();
    }

    else if(b === 2){
        moveHeight2()
        getPoint4()

    }
    else if(b === 3){
        moveHeight3();
        getPoint5();
    }
    else{
        GetControlValue();
    }

}



function changeBorderColor1() {
    b = 1
    document.getElementById("ch1").style.backgroundColor ="gold";
    document.getElementById("ch2").style.backgroundColor ="gold";
    document.getElementById("ch3").style.backgroundColor ="gold";
    document.getElementById("ch4").style.backgroundColor ="gold";
    document.getElementById("ch5").style.backgroundColor ="gold";
    document.getElementById("ch6").style.backgroundColor ="gold";
    document.getElementById("ch7").style.backgroundColor ="gold";
    document.getElementById("ch8").style.backgroundColor ="gold";
    document.getElementById("r").style.backgroundColor ="gold";
    document.getElementById("r1").style.backgroundColor ="gold";
    document.getElementById("r2").style.backgroundColor ="gold";
    document.getElementById("r3").style.backgroundColor ="gold";
    document.getElementById("rect1").style.border ="3px solid OrangeRed";
    document.getElementById("rect2").style.border ="0px solid gold";
    document.getElementById("rect3").style.border ="0px solid gold";
}
function changeBorderColor2() {
    b = 2
    document.getElementById("ch1").style.backgroundColor ="SkyBlue";
    document.getElementById("ch2").style.backgroundColor ="SkyBlue";
    document.getElementById("ch3").style.backgroundColor ="SkyBlue";
    document.getElementById("ch4").style.backgroundColor ="SkyBlue";
    document.getElementById("ch5").style.backgroundColor ="SkyBlue";
    document.getElementById("ch6").style.backgroundColor ="SkyBlue";
    document.getElementById("ch7").style.backgroundColor ="SkyBlue";
    document.getElementById("ch8").style.backgroundColor ="SkyBlue";
    document.getElementById("r").style.backgroundColor ="SkyBlue";
    document.getElementById("r1").style.backgroundColor ="SkyBlue";
    document.getElementById("r2").style.backgroundColor ="SkyBlue";
    document.getElementById("r3").style.backgroundColor ="SkyBlue";
    document.getElementById("rect2").style.border ="4px solid MediumBlue";
    document.getElementById("rect1").style.border ="0px solid gold";
    document.getElementById("rect3").style.border ="0px solid gold";

}
function changeBorderColor3() {
    b = 3
    document.getElementById("ch1").style.backgroundColor ="DarkOrange";
    document.getElementById("ch2").style.backgroundColor ="DarkOrange";
    document.getElementById("ch3").style.backgroundColor ="DarkOrange";
    document.getElementById("ch4").style.backgroundColor ="DarkOrange";
    document.getElementById("ch5").style.backgroundColor ="DarkOrange";
    document.getElementById("ch6").style.backgroundColor ="DarkOrange";
    document.getElementById("ch7").style.backgroundColor ="DarkOrange";
    document.getElementById("ch8").style.backgroundColor ="DarkOrange";
    document.getElementById("r").style.backgroundColor ="DarkOrange";
    document.getElementById("r1").style.backgroundColor ="DarkOrange";
    document.getElementById("r2").style.backgroundColor ="DarkOrange";
    document.getElementById("r3").style.backgroundColor ="DarkOrange";
    document.getElementById("rect3").style.border ="4px solid Olive";
    document.getElementById("rect2").style.border ="0px solid gold";
    document.getElementById("rect1").style.border ="0px solid gold";

}




function GetControlValue()
{
    alert(document.all.txtUser.Value);
}
function moveRight(){
    if (b === 1){
        moveRight1();
        getPoint();
        if(x1<rect1X){
            REd1();
        }
    }
    else if(b === 2){
        moveRight2()
        getPoint1()

    }
    else if(b === 3){
        moveRight3();
        getPoint2();
    }
    else{
        GetControlValue();
    }

}



function moveLeft(){
    if (b === 1){
        moveLeft1();
        getPoint();
    }
    else if(b === 2){
        moveLeft2();
        getPoint1()
    }
    else if(b === 3){
        moveLeft3();
        getPoint2();
    }
    else{
        GetControlValue();
    }
}


function extraClear(){
    location.reload(true);
}

function getPoint() {
    let rect1 = document.getElementById("rect1");
    let rect1X = rect1.offsetLeft;
    result1.innerText = rect1X;

}

function getPoint1() {
    let rect2 = document.getElementById("rect2");
    let rect2X = rect2.offsetLeft;
    result1.innerText = rect2X;

}
function getPoint2() {
    let rect3 = document.getElementById("rect3");
    let rect3X = rect3.offsetLeft
    result1.innerText = rect3X;

}
function REd1(){
    document.getElementById("rect1").style.backgroundColor ="blue";


}
function getPoint3() {
    let rect1 = document.getElementById("rect1");
    let rect1Y = rect1.offsetTop;
    result2.innerText = rect1Y;

}

function getPoint4() {
    let rect2 = document.getElementById("rect2");
    let rect2Y = rect2.offsetTop;
    result2.innerText = rect2Y;

}
function getPoint5() {
    let rect3 = document.getElementById("rect3");
    let rect3Y = rect3.offsetTop
    result2.innerText = rect3Y;

}
function REd1(){
    if (rect1X<x1){}


}




