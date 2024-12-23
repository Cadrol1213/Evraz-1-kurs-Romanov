let result = document.getElementById('res');
let answer1 = document.getElementById('ans');
let answer2 = document.getElementById('ans1');
let answer3 = document.getElementById('ans2');
let answer4 = document.getElementById('ans3');
let history1 = document.getElementById('history1');
let history2 = document.getElementById('history2');
let history3 = document.getElementById('history3');
let history4 = document.getElementById('history4');





let a = 0;
let b = 0;
function  changeColor1(){
    if (b === 2 ){
        b = 1
        document.getElementById("body").classList.remove("black")
    }
    else if(b === 3){
        b = 1
        document.getElementById("body").classList.remove("gray")
    }
    else{
        b = 1
    }
    document.getElementById("divch").classList.add("white")
    document.getElementById("divmin").classList.add("white")
    document.getElementById("prompt").classList.add("white")
    document.getElementById("body").classList.add("ch1")

}
function changeColor2(){
    if (b === 1){
        b = 1
        document.getElementById("body").classList.remove("white")
    }
    else if(b === 3){
        b = 1
        document.getElementById("body").classList.remove("gray")
    }
    else if(b === 3){
        b = 1
        document.getElementById("body").classList.remove("gray")
    }
    else if(b === 3){
        b = 1
        document.getElementById("body").classList.remove("gray")
    }
    else if(b === 3){
        b = 1
        document.getElementById("body").classList.remove("gray")
    }
    else{
        b = 1
    }
    document.getElementById("divch").classList.add("black")
    document.getElementById("divmin").classList.add("black")
    document.getElementById("prompt").classList.add("black")
    document.getElementById("body").classList.add("ch2")


}
function changeColor3(){
    b =3
    document.getElementById("divch").classList.add("gray")
    document.getElementById("divmin").classList.add("gray")
    document.getElementById("prompt").classList.add("gray")
    document.getElementById("body").classList.add("ch3")


}



function min10(){
    a = +a - 10
    result.innerText = a;
   prov(a)
}
function min1(){
    a = +a - 1
    result.innerText = a;
    prov(a)

}
function max1(){
    a = +a +1
    result.innerText = a;
    prov(a)
}
function max10(){
    a = +a + 10
    result.innerText = a;
    prov(a)
}
function  prompt(){
    prompt(a)
}
function prov(){
    if (a %2 === 0){
        answer1.innerText = 'да';
        history1.innerText = a;
    }
    else{
        answer1.innerText = 'нет';
    }
    if(a %3 === 0){
        answer2.innerText = "да"
        history2.innerText = a;
    }
    else {
        answer2.innerText = "нет"
    }
    if(a %5 === 0){
        answer3.innerText = "да"
        history3.innerText = a;
    }
    else {
        answer3.innerText = "нет"
    }
    if(a %7=== 0){
        answer4.innerText = "да"
        history4.innerText = a;
    }
    else {
        answer4.innerText = "нет"
    }

}