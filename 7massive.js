
let a = 0;


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
        // liElement.setAttribute('data-id', elements.length);
        a += 1;
        liElement.setAttribute('data-idd', a);
        liElement.id = 'el-' + a;
        olElement.appendChild(liElement);
        input.value = '';
        console.log( liElement.id)
    }

}

function add2() {
    let index = document.getElementById('index').value; // Преобразуем в число
    let newText = document.getElementById('newText').value;
    let id1 = 'el-' + index;
    console.log( id1 )
    if(index>=0 ) {
        let elem = document.getElementById(id1)
        if (index == "") {
            alert("такого id не существует")}
        else
            if (newText == '') {
                alert('введите новое значение ')
            } else {
                console.log(elem)
                elem.innerText = newText
            }
        } else {
            alert("такого id не существует")
        }
}




