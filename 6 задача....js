function checkInput() {
    const userInput = prompt("Введите от 1 до 3 для перемещения текста:");
    if (userInput === "1") {
        moveText();
    }
    if (userInput === "2") {
        moveText1();

    }
    if (userInput === "3") {
        moveText2();
    }
}
function moveText2() {
   const inputText = document.getElementById("input").value;
   const topzadacha = document.getElementById("topzadacha");
   topzadacha.innerText = inputText; // Устанавливаем текст в прямоугольник
    funtion moveText1() {
   const inputText = document.getElementById("input").value;
   const rutube = document.getElementById("rutube");
   rutube.innerText = inputText; // Устанавливаем текст в прямоугольник
        funtion moveText() {
   const inputText = document.getElementById("input").value;
   const rectangle = document.getElementById("rectangle");
   rectangle.innerText = inputText; // Устанавливаем текст в прямоугольник
            funtion concatenateText() {
   const rectangles = document.getElementById("rectangle");
   const rectangles1 = document.getElementById("rutube");
    const rectangles2 = document.getElementById("topzadacha");

    let a = "|"

    document.getElementById("result").innerText = rectangles.innerText + a + rectangles1.innerText + a + rectangles2.innerText; // Выводим результат
}