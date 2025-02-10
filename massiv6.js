function add1() {
    let  container = document.getElementById('container');
    let input = document.getElementById('text');
    if (input.value === '') {
        alert('Убедитесь, что значение названия не пустое');
    }
    else {
        let liElement = document.createElement('li');
        liElement.innerText = input.value;
        liElement.classList.add('green');
        container.append(liElement);
    }
}
function add2(){
    let  container1 = document.getElementById('container1');
    let  container = document.getElementById('container');
    if

}