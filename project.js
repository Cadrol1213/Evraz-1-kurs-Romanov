let dentsArray = [];
let RightStatus = "";
let LeftStatus = "";
let step = 0
let radarPosition = 10; // Глобальная переменная для отслеживания позиции радара
let foundDents = []; // Массив для найденных вмятин

function add() {
    document.getElementById("container").innerHTML = "";
    document.getElementById("container1").innerHTML = "";
    foundDents = []; // Очищаем массив найденных вмятин при новом запуске

    let railLengthInput = document.getElementById("top_input").value;
    let railLength = parseInt(railLengthInput) || 500;

    let dentsInput = document.getElementById("down_input").value;
    dentsArray = dentsInput.split(',')
        .map(item => parseInt(item.trim()))
        .filter(num => !isNaN(num) && num > 0 && num < railLength);

    let sleeper = document.createElement("div");
    sleeper.className = "sleeper";
    sleeper.style.width = railLength + "px";
    sleeper.id = "rail";

    // Создаем индикаторы
    let indicators = document.createElement("div");
    indicators.className = "radar-indicators";
    let leftIndicator = document.createElement("div");
    leftIndicator.className = "indicator left";
    leftIndicator.id = "left-indicator";

    let rightIndicator = document.createElement("div");
    rightIndicator.className = "indicator right";
    rightIndicator.id = "right-indicator";

    indicators.appendChild(leftIndicator);
    indicators.appendChild(rightIndicator);
    sleeper.appendChild(indicators);

    // Создаем радар
    let radar = document.createElement("div");
    radar.id = "radar_id";
    radar.className = "radar";
    radarPosition = 10; // Устанавливаем начальную позицию
    radar.style.left = radarPosition + "px"; // Используем переменную radarPosition
    sleeper.appendChild(radar);
    document.getElementById("container").appendChild(sleeper);

    Algoritm();
    RightCheck();
    scanRail()
}

function Algoritm() {
    let radar = document.getElementById("radar_id");
    if (!radar) {
        console.error("Радар не создался");
        return;
    }
    // Получаем текущую позицию радара из глобальной переменной
    console.log(`Текущая позиция радара: ${radarPosition}px`);
    console.log(dentsArray);
    return {
        radarPosition: radarPosition,
        dents: dentsArray
    };
}

function createDents() {
    let container = document.getElementById("container");
    let railLengthInput = document.getElementById("top_input").value;
    let railLength = parseInt(railLengthInput) || 500;
    let dentsInput = document.getElementById("down_input").value;
    let dentsArray = dentsInput.split(',')
        .map(item => parseInt(item.trim()))
        .filter(num => !isNaN(num) && num > 0 && num < railLength);

    let existingDents = document.querySelectorAll('.dent');
    existingDents.forEach(dent => dent.remove());

    dentsArray.forEach(dentPos => {
        let dent = document.createElement("div");
        dent.className = "dent";
        dent.style.left = `${dentPos}px`;
        dent.title = `Дефект на позиции: ${dentPos}px`;
        container.querySelector('.sleeper').appendChild(dent);
    });
    console.log(`Создано ${dentsArray.length} вмятин`);
    return dentsArray;
}

function RightCheck() {
    let railLengthInput1 = document.getElementById("rail");
    const { width } = railLengthInput1.getBoundingClientRect();
    console.log(dentsArray);

    let radar = document.getElementById("radar_id");
    radarPosition = parseInt(radar.style.left) || 0; // Обновляем глобальную переменную

    let minDistRight = width;
    let minDistLeft = width;
    let check_under = null;

    for (const element of dentsArray) {
        if (element < radarPosition) {
            const dist1 = radarPosition - element;
            if (dist1 < minDistLeft) {
                minDistLeft = dist1;
                console.log("Min Left Distance:", minDistLeft);
            }
        }
        else if (element > radarPosition) {
            const dist = element - radarPosition;
            if (dist < minDistRight) {
                minDistRight = dist;
                console.log("Min Right Distance:", minDistRight);
            }
        }
        else if (element == radarPosition) {
            check_under = element - radarPosition;
            console.log("Direct hit:", check_under);
        }
    }

    // Определяем RightStatus
    if (minDistRight > 10) {
        RightStatus = "Rgreen";
    }
    else if (minDistRight <= 5) {
        RightStatus = "Rred";
    }
    else if (minDistRight > 5 && minDistRight <= 10) {
        RightStatus = "Ryellow";
    }
    console.log("Right Status:", RightStatus , `Текущая позиция радара: ${radarPosition}`);

    // Определяем LeftStatus
    if (minDistLeft > 10) {
        LeftStatus = "Lgreen";
    }
    else if (minDistLeft <= 5) {
        LeftStatus = "Lred";
    }
    else if (minDistLeft > 5 && minDistLeft <= 10) {
        LeftStatus = "Lyellow";
    }
    console.log("Left Status:", LeftStatus,`Текущая позиция радара: ${radarPosition}`);

    if (check_under === 0) {
        console.log("Точка найдена - прямое попадание!");
    }

    const leftIndicator = document.getElementById("left-indicator");
    const rightIndicator = document.getElementById("right-indicator");

    // Левый индикатор
    if (minDistLeft > 10) {
        leftIndicator.className = "indicator left green";
    }
    else if (minDistLeft <= 5) {
        leftIndicator.className = "indicator left red";
    }
    else {
        leftIndicator.className = "indicator left yellow";
    }

    // Правый индикатор
    if (minDistRight > 10) {
        rightIndicator.className = "indicator right green";
    }
    else if (minDistRight <= 5) {
        rightIndicator.className = "indicator right red";
    }
    else {
        rightIndicator.className = "indicator right yellow";
    }
}

function scanRail() {
    let radar = document.getElementById("radar_id");
    let rail = document.getElementById("rail");
    const railWidth = rail.getBoundingClientRect().width;
    radar.style.left = radarPosition + "px";
    step = 0; // Сбрасываем счетчик шагов при новом сканировании

    function scanStep() {
        if (radarPosition >= railWidth) {
            console.log("Сканирование завершено. Найдены вмятины на позициях:", foundDents);

            // Сравниваем массивы после завершения сканирования
            const allDentsFound = dentsArray.length === 0 && foundDents.length > 0;
            if (allDentsFound) {
                console.log("Все вмятины были успешно найдены и удалены из массива!");
            } else if (foundDents.length > 0) {
                console.log("Были найдены не все вмятины.");
            } else {
                console.log("Вмятин не обнаружено.");
            }

            stepscollect(); // Вызываем сборщик шагов перед завершением
            return;
        }

        // Проверяем наличие вмятин на текущей позиции
        for (let i = dentsArray.length - 1; i >= 0; i--) {
            if (Math.abs(dentsArray[i] - radarPosition) <= 0) {
                console.log(`Найдена вмятина на позиции: ${dentsArray[i]}px`);
                foundDents.push(dentsArray[i]);

                // Удаляем вмятину из массива
                dentsArray.splice(i, 1);

                // Обновляем отображение вмятин
                createDents();
                break;
            }
        }

        // Сохраняем предыдущую позицию для сравнения
        let prevPosition = radarPosition;

        // Определяем движение на основе статусов
        if (RightStatus === "Rgreen" && LeftStatus == "Lgreen") {
            radarPosition += 20;
            console.log("+20");
            step += 1;
        }
        else if (RightStatus === "Ryellow" && LeftStatus == "Lgreen") {
            radarPosition += 5;
            console.log("+5");
            step += 1;
        }
        else if (RightStatus === "Rred" && LeftStatus == "Lgreen") {
            radarPosition += 1;
            console.log("+1");
            step += 1;
        }

        // Если слева красный или желтый - отступаем
        if (LeftStatus === "Lred") {
            radarPosition -= 1;
            console.log("-1");
            step += 1;
        }
        else if (LeftStatus === "Lyellow") {
            radarPosition -= 5;
            console.log("-5");
            step += 1;
        }

        // Проверяем границы рельса
        if (radarPosition < 0) radarPosition = 0;
        if (radarPosition > railWidth) radarPosition = railWidth;

        // Если позиция изменилась - вызываем сборщик шагов
        if (radarPosition !== prevPosition) {
            stepscollect();
        }

        radar.style.left = radarPosition + "px";
        RightCheck(); // Обновляем статусы

        // Продолжаем сканирование
        setTimeout(scanStep, 70);
    }

    scanStep();
}

function stepscollect() {
    let container1 = document.getElementById("container1");
    let stepInfo = document.createElement("div");
    stepInfo.textContent = `Шаг ${step}: радар перешел на позицию: ${radarPosition}px`;
    container1.appendChild(stepInfo);

    // Прокручиваем контейнер к последнему добавленному шагу
    container1.scrollTop = container1.scrollHeight;
}