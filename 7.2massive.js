let items = [];


function add1() {
    let input = document.getElementById('text');
    let addElement = document.getElementById('container');
    let value = input.value.trim();//удаляет пробелы с разных сторон
    let olElement = addElement.querySelector('ol');
    if (!olElement){
        olElement = document.createElement('ol');
        addElement.appendChild(olElement);
    }
    if (value) {
        items.push(value);
        input.value = '';
        add3();
        console.log(items)
    }
    else{
        alert("Введите значение")
    }
}
function add3() {
    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < items.length; i++) {

        let li = document.createElement('li');
        li.textContent = items[i];
        container.appendChild(li);
        console.log(items)
    }
}

function add2() {
    let indexInput = document.getElementById('index');
    let newTextInput = document.getElementById('newText');
    let index = indexInput.value
    let newText = newTextInput.value.trim();

    if (index>= 0 && index < items.length && newText) {
        items[index] = newText;
        indexInput.value = '';
        newTextInput.value = '';
        add3();
    }
    else {
        alert('Некорректный индекс или новое значение');
    }
}