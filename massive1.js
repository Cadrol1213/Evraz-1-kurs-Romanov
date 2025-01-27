function addLi() {
    let addElement = document.getElementById('add');
    let input = document.getElementById('name')
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        liElement.innerText = input.value;
        liElement.classList.add('green')
        addElement.append(liElement);
        input.value = '';
    }
}

function addLi2() {
    let addElement = document.getElementById('add2');
    let input = document.getElementById('name2')
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        liElement.innerText = input.value;
        liElement.classList.add('city')
        addElement.append(liElement);
        input.value = '';
    }
}
