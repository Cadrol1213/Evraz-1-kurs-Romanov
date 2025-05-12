
let dentsArray = [];
let RightStatus = "";
let LeftStatus = "";
let pos = "";
let radarPosition = 20; // Глобальная переменная для отслеживания позиции радара

function add() {
    document.getElementById("container").innerHTML = "";
    document.getElementById("container1").innerHTML = "";

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
    radarPosition = 20; // Устанавливаем начальную позицию
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

    RegisterArea();

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
    console.log("Right Status:", RightStatus);

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
    console.log("Left Status:", LeftStatus);

    // Движение радара в зависимости от статуса
    // if (RightStatus === "Rgreen") {
    //     radarPosition += 20; // Обновляем глобальную переменную
    //     radar.style.left = radarPosition + "px";
    //     console.log("Moved right +20px, new position:", radarPosition);
    // }
    // else if (RightStatus === "Ryellow") {
    //     radarPosition += 200; // Обновляем глобальную переменную
    //     radar.style.left = radarPosition + "px";
    //     console.log("Moved right +6px, new position:", radarPosition);
    // }

    // Проверка на прямое попадание
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

function RegisterArea() {
    console.log(radarPosition); // Теперь используем глобальную переменную
}
function RegisterArea(){
    let radar = document.getElementById("radar_id");
    let currentRight = parseInt(radar.style.left) || 0;
    console.log(currentRight)
}
let foundDents = []; // Массив для найденных вмятин

function scanRail() {
    let radar = document.getElementById("radar_id");
    let rail = document.getElementById("rail");
    const railWidth = rail.getBoundingClientRect().width;
    //getBoundingClientRect -содержащий информацию о размере элемента и его положении относительно области просмотра
    radarPosition = 0;
    radar.style.left = radarPosition + "px";
    foundDents = [];
    function scanStep() {
        if (radarPosition >= railWidth) {
            console.log("Сканирование завершено. Найдены вмятины на позициях:", foundDents);
            return;
        }
        let isDentFound = false;
        for (let i = 0; i < dentsArray.length; i++) {
            if (Math.abs(dentsArray[i] - radarPosition) <= 0) {
                if (!foundDents.includes(dentsArray[i])) {
                    console.log(`Найдена вмятина на позиции: ${dentsArray[i]}px`);
                    foundDents.push(dentsArray[i]);
                }
                isDentFound = true;
                break;
            }
        }
        if (RightStatus == "Rgreen"){
            radarPosition += 10;
            console.log(LeftStatus)
        }
        else if(RightStatus == "Ryellow"){
            radarPosition +=5
        }
        else if(RightStatus == "Rred"){
            radarPosition += 1
            console.log("+1")
        }
        if(LeftStatus == "Lred"){
            console.log(LeftStatus)
        }



        radar.style.left = radarPosition + "px";
        RightCheck();
        if (foundDents.length === dentsArray.length) {
            console.log("Все вмятины найдены! Позиции:", foundDents);
            return;
        }

        // интервал (для визуализации)
        setTimeout(scanStep, 70);
    }
    scanStep();
}
function countingdents(){
    container1 = document.getElementById("container1")
    container1.innerText = ""
}





