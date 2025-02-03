//
//  function addSquares() {
//     let quantity = prompt("Введите количество красных квадратов:");
//     if (quantity !== null ) {
//     let container = document.getElementById("container");
//     container.innerHTML = "";
//     for (let i = 0; i < quantity; i++) {
//     let square = document.createElement("span");
//     square.className = "square";
//     container.appendChild(square);
// }
// } else {
//     alert("Пожалуйста, введите корректное количество.");
// }
// }
// if (quantity == 4) {
//     addSquares()
// let prompt = prompt("Введите количество красных квадратов:")
// let square1 = 0
// let square2 = 0
// let square3 = 0
// if (prompt == 1 ){
//     square1 = square1 + 1
//
// }
// else if(prompt == 2){
//     square2 = square2 + 1
// }
// else if(prompt == 3){
//     square2 = square2 + 1
// }else if(prompt == 2){
//     square2 = square2 + 1
// }
window.onload = function() {
    let square1 = 0
    let square2 = 0
    let square3 = 0
    let input;
    while (true) {
        input = prompt("Введите число от 1 до 4 (введите 4 для завершения):");

        if (input === null) {
            // Если пользователь закрыл окно ввода
            break;
        }

        if (!isNaN(input)) {
            input = Number(input);
            if (input == 1 ) {
                square1+= 1;
                alert("Текущее значение 1: " + square1);}
            else if (input == 2){
                square2 +=1
                alert("Текущее значение 2: " + square2);
            }
            else if (input == 3){
                square3 +=1
                alert("Текущее значение 3: " + square3);
            }
            else if (input === 4) {
                for (let i = 0; i < square1; i++) {
                    let square = document.createElement("span");
                    square.className = "square1";
                    container.appendChild(square);}
                for (let i = 0; i < square2; i++) {
                    let square = document.createElement("span");
                    square.className = "square2";
                    container.appendChild(square);}
                for (let i = 0; i < square3; i++) {
                    let square = document.createElement("span");
                    square.className = "square3";
                    container.appendChild(square);}
                break; // Завершение цикла
            }
            else {
                alert("Пожалуйста, введите число от 1 до 4.");
            }
        }
        else {
            alert("Пожалуйста, введите корректное число.");
        }
    }

    alert("Цикл завершен. Финальное значение i: " + i);
};