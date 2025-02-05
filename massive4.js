// function add1() {
//     let addElement = document.getElementById('container');
//     let input = document.getElementById('name');
//
//     if (input.value === '' ) {
//         alert('Убедитесь, что значение названия не пустое');
//     }
//     else {
//         let newElement = document.createElement("div");
//         newElement.textContent = name;
//         div.appendChild(newElement);
//
//         document.getElementById("myInput").value = ""; // очищаем поле ввода
//     }
// }
// function add1() {
//     let addElement = document.getElementById('container');
//     let input = document.getElementById('text');
//
//     if (input.value === '') {
//         alert('Убедитесь, что значение названия не пустое');
//     } else {
//         // Проверяем, есть ли уже текст в контейнере и добавляем запятую, если да
//         if (addElement.textContent !== '') {
//             addElement.textContent += ', ';
//         }
//         addElement.textContent += input.value; // добавляем новое значение
//
//         input.value = ""; // очищаем поле ввода
//     }
// }
//
// function add2(){
//     let addElement1 = document.getElementById('container1');
//     let input1 = document.getElementById('container');
//     if (input1.value === '') {
//         alert('добавте ')
//     }
// }
function add1() {
    let addElement = document.getElementById('container');
    let input = document.getElementById('text');
    if (input.value === '') {
        alert('Убедитесь, что значение названия не пустое');
    } else {
        // Проверяем, есть ли уже текст в контейнере и добавляем запятую, если да
        if (addElement.textContent !== '') {
            addElement.textContent += ', ';
        }
        addElement.textContent += input.value; // добавляем новое значение
        input.value = ""; // очищаем поле ввода
    }
}


function add2() {
    let addElement = document.getElementById('container');
    let items = addElement.textContent.split(', '); // разбиваем элементы по запятой
    let newDiv = document.createElement('div'); // создаем новый div для списка
    let ol = document.createElement('ol'); // создаем новый нумерованный список
    console.log(items)
    items.forEach(item => {

        if (item.trim() !== '') { // добавляем только непустые элементы
            const li = document.createElement('li'); // создаем новый элемент списка
            li.textContent = item.trim(); // задаем текст элемента
            ol.appendChild(li); // добавляем элемент в список
        }
    });

    newDiv.appendChild(ol); // добавляем список в новый div
    document.getElementById('container1').appendChild(newDiv); // добавляем новый div в контейнер1

}
function add3() {
    let addElement1 = document.getElementById('container');
    let items = addElement1.textContent.split(', '); // разбиваем элементы по запятой
    let newDiv1 = document.createElement('div'); // создаем новый div для списка
    let ol = document.createElement('ul'); // создаем новый нумерованный список

    items.forEach(item => {
        if (item.trim() !== '') { // добавляем только непустые элементы
            const li = document.createElement('li'); // создаем новый элемент списка
            li.textContent = item.trim(); // задаем текст элемента
            ol.appendChild(li); // добавляем элемент в список
        }
    });

    newDiv1.appendChild(ol); // добавляем список в новый div
    document.getElementById('container1').appendChild(newDiv1); // добавляем новый div в контейнер1

}
function TopClear(){
    document.getElementById('container').innerHTML = '';
}