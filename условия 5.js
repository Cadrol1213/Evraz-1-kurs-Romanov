let result = document.getElementById('res');
let input1 = document.getElementById('inp1');
let input2 = document.getElementById('inp2');
let input3 = document.getElementById('inp3');
let a = "+";
let b = "-";
let c = "*";
let d = "/";
let e = "%";
let answer = '';
function checkInput() {
    if (input2.value === a ){
        answer = +input1.value + +input3.value;
    }
    else if (input2.value === b){
        answer = +input1.value - +input3.value;
    }
    else if (input2.value === c){
        answer = +input1.value * +input3.value;
    }
    else if (input2.value === d){
        answer = +input1.value / +input3.value;
    }
    else if (input2.value === e){
        answer = +input1.value % +input3.value;
    }
    else{
        answer = 'чо это?'
    }
    result.innerText = answer
}

