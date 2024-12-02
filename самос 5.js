function moveText() {
    let span = document.getElementById('rectangle')
    let input = document.getElementById('input')
    let inputText = input.value; // Получаем текст из поля ввода
    span.innerText = inputText; // Перемещаем текст в красный прямоугольник
    input.value = ''; // Очищаем поле ввода

}
function moveText1() {
    let span = document.getElementById('rutube')
    let input = document.getElementById('input1')
    let inputText = input.value; // Получаем текст из поля ввода
    span.innerText = inputText; // Перемещаем текст в красный прямоугольник
    input.value = ''; // Очищаем поле ввода

}
function moveText2() {
    let span = document.getElementById('topzadacha')
    let input = document.getElementById('input2')
    let inputText = input.value; // Получаем текст из поля ввода
    span.innerText = inputText; // Перемещаем текст в красный прямоугольник
    input.value = ''; // Очищаем поле ввода
}