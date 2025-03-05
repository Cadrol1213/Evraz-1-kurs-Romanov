window.onload = function () {
    let square1 = 0
    let square2 = 0
    let square3 = 0

    while (input == 4) {
       let input = prompt("Введите число 1-красный 2-синий 3-зелёный введите 4 для завершения");
        if (input == 1) {
            let square = document.createElement("span");
            square.innerText = "vvv"
            square.className = "square1";
            container.appendChild(square);

            console.log("Текущее значение 1: " + square1);
        }
        else if (input == 2) {
            let square = document.createElement("span");
            square.innerText = "vvv"
            square.className = "square2";
            container.appendChild(square);

            console.log("Текущее значение 1: " + square2);
        }
        else if (input == 3) {
            let square = document.createElement("span");
            square.innerText = "vvv"
            square.className = "square3";
            container.appendChild(square);
            console.log("Текущее значение 1: " + square3);
        }
    }

}