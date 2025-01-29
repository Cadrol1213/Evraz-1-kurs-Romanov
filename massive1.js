function addLi() {
    let addElement = document.getElementById('add');
    let input = document.getElementById('name');
    let count = document.getElementById('count').value;
    count = parseInt(count);

    if (input.value === '' ) {
        alert('Убедитесь, что значение названия не пустое');
    } else {
        for (let i = 0; i < count; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = input.value;
            liElement.classList.add('green');
            addElement.append(liElement);
        }
        input.value = '';
        document.getElementById('count').value = '';
    }
}

function addLi2() {
    let addElement = document.getElementById('add2');
    let input = document.getElementById('name2');
    let count = document.getElementById('count1').value;
    count = parseInt(count);

    if (input.value === '' ) {
        alert('Убедитесь, что значение названия не пустое ');
    } else {
        for (let i = 0; i < count; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = input.value;
            liElement.classList.add('city');
            addElement.append(liElement);
        }
        input.value = '';
        document.getElementById('count1').value = '';
    }
}