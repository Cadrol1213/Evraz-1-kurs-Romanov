function add1() {
    let addElement = document.getElementById('container');
    let input = document.getElementById('text');

    if (input.value === '') {
        alert('Убедитесь, что значение названия не пустое');
    } else {
        let liElement = document.createElement('li'); // Создаем элемент li
        liElement.innerText = input.value;

        // Проверяем, если контейнер пустой, создаем новый ol
        if (addElement.children.length === 0) {//дочерние элементы
            let olElement = document.createElement('ol'); // Создаем новый ol
            addElement.append(olElement);
            olElement.append(liElement); // Добавляем li в ol
        } else {
            addElement.getElementsByTagName('ol')[0].append(liElement); // Добавляем в существующий ol
        }

        input.value = ''; // Очищаем input
    }
}

function add2() {
    let input2 = document.getElementById('text1').value;
    let containerElements = document.getElementById('container').getElementsByTagName('li');
    let addElement1 = document.getElementById('container1');

    console.log(input2);
    console.log(containerElements);


    for (let i = 0; i < containerElements.length; i++) {
        if (containerElements[i].innerText === input2) {
            let newElement = document.createElement('li'); // Создаем элемент li
            newElement.innerText = containerElements[i].innerText;

            // Проверяем, если container1 пустой, создаем новый ol
            if (addElement1.children.length === 0) {//дети родителя(от родителя)
                let olElement = document.createElement('ol'); // Создаем новый ol
                addElement1.append(olElement);
                olElement.append(newElement); // Добавляем li в ol
            } else {
                addElement1.getElementsByTagName('ol')[0].append(newElement); // Добавляем в существующий ol

            }

            containerElements[i].remove(); // Удаляем из предыдущего контейнера
        }
    }

    // Очищаем input после добавления
    document.getElementById('text1').value = '';
}
