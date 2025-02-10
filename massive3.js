
window.onload = function() {
    let square1 = 0
    let square2 = 0
    let square3 = 0
        while (input !== 4) {
            input = prompt("Введите число (1, 2, 3 для добавления или 4 для завершения):");
            if (!isNaN(input)) {
                input = Number(input);
                if (input == 1) {
                    for (let i = 0; i < square1; i++) {
                        let square = document.createElement("span");
                        square.className = "square1";
                        container.appendChild(square);
                } }
                    else if (input == 2) {
                    for (let i = 0; i < square2; i++) {
                        let square = document.createElement("span");
                        square.className = "square2";
                        container.appendChild(square);
                    }
                }
                    else if (input == 3) {
                    for (let i = 0; i < square3; i++) {
                        let square = document.createElement("span");
                        square.className = "square3";
                        container.appendChild(square);
                    }
                }
                    else {
                    alert("Пожалуйста, введите число от 1 до 4.");
                }
            }
// Создание элементов после завершения цикла
        for (let i = 0; i < square1; i++) {
            let square = document.createElement("span");
            square.className = "square1";
            container.appendChild(square);
        }

        for (let i = 0; i < square3; i++) {
            let square = document.createElement("span");
            square.className = "square3";
            container.appendChild(square);
        }

        alert("Цикл завершен. Финальное значение square1: " + square1 + ", square2: " + square2 + ", square3: " + square3);}}
