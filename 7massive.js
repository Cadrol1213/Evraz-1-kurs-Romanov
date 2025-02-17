let elements = []; // Массив для хранения элементов

function add1() {
    let addElement = document.getElementById('container');
    let input = document.getElementById('text');
    let olElement = addElement.querySelector('ol');

    if (input.value === '') {
        alert('Убедитесь, что значение названия не пустое');
    } else {
        if (!olElement) {
            olElement = document.createElement('ol');
            addElement.appendChild(olElement);
        }
        let liElement = document.createElement('li');
        liElement.innerText = input.value;

        // Добавляем ID элементу
        liElement.setAttribute('data-id', elements.length);
        elements.InnerText=input.value; // Сохраняем значение в массив
        olElement.appendChild(liElement);
        input.value = '';
    }
}

function add2() {
    let index = document.getElementById('index').value; // Преобразуем в число
    let newText = document.getElementById('newText'); // Преобразуем в число
    console.log(index)
        if (index >= 0 && index < elements.length) {
            // Сравниваем текущее значение элемента с новым текстом
            if (elements[index] === newText) {
                console.log('Элемент уже имеет этот текст'); // Выводим информацию, если совпадает
            } else {
                elements[index].innerText= newText; // Заменяем текст элемента
            }
        } else {
            alert('Некорректный индекс')
            console.log('Некорректный индекс'); // Сообщение об ошибке, если индекс вне границ массива
        }
    }


