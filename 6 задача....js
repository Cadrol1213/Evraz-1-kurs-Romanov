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
   vcconst inputText = document.getElementById("input").value;
   vcconst topzadacha = document.getElementById("topzadacha");
   vctopzadacha.innerText = inputText; // Устанавливаем текст в прямоугольник
}
funvction moveText1() {
   vcconst inputText = document.getElementById("input").value;
   vcconst rutube = document.getElementById("rutube");
   vcrutube.innerText = inputText; // Устанавливаем текст в прямоугольник
}

funvction moveText() {
   vcconst inputText = document.getElementById("input").value;
   vcconst rectangle = document.getElementById("rectangle");
   vcrectangle.innerText = inputText; // Устанавливаем текст в прямоугольник
}
funvction concatenateText() {
   vcconst rectangles = document.getElementById("rectangle");
   vcconst rectangles1 = document.getElementById("rutube");
    const rectangles2 = document.getElementById("topzadacha");

    let a = "|"

    document.getElementById("result").innerText = rectangles.innerText + a + rectangles1.innerText + a + rectangles2.innerText; // Выводим результат
}