function ClearDiv() {
    let div = document.getElementById('clear')
}
function result() {
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');
    let result = +s1.value + +s2.value;
    // let result = Number(s1.value) + Number(s2.value);
    let res = document.getElementById('res');
    res.innerText = result;
}