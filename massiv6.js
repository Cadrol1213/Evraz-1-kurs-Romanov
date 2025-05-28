let dentsArray = [];
let RightStatus = "";
let LeftStatus = "";
let step = 0;
let radarPosition = 10;
let foundDents = [];
let ldents = 0;
let specialMode = false;
let savedPosition = 0;
let lastRedPosition = 0;
let checkedLeft = false;
let savedScans = [];
let currentScanIndex = -1;

// Модифицируем функцию add() в project.js
// Обновленная функция add() в project.js
function add() {
    // Очистка
    const container = document.getElementById("container");
    container.innerHTML = "";
    document.getElementById("container1").innerHTML = "";

    // Сброс переменных
    foundDents = [];
    step = 0;
    ldents = 0;
    specialMode = false;
    radarPosition = 10;

    // Получение параметров
    const railLength1 = document.getElementById("top_input")
    const railLength = parseInt(document.getElementById("top_input").value) || 500;
    const dentsInput = document.getElementById("down_input").value;



    // Создаем контейнер для всей сцены
    const sleeperWithRollers = document.createElement("div");
    sleeperWithRollers.className = "sleeper-with-rollers";

    // Создаем 5 валов с уменьшенным расстоянием
    for (let i = 0; i < 5; i++) {
        const rollerContainer = document.createElement("div");
        rollerContainer.className = "roller-container";
        rollerContainer.style.left = `${i * 55}px`;

        const roller = document.createElement("div");
        roller.className = "roller";
        roller.style.animation = `rollerRotate ${1 + i * 0.4}s linear infinite`;

        rollerContainer.appendChild(roller);
        sleeperWithRollers.appendChild(rollerContainer);
    }

    // Создаем рельс
    const sleeper = document.createElement("div");
    sleeper.className = "sleeper";
    sleeper.id = "rail";
    sleeper.style.width = `${railLength}px`;
    sleeper.style.right = `${55}px`;

    // Добавляем анимацию въезда рельса
    sleeper.style.animation = "slideInRail 2s forwards";

    // Создаем индикаторы и радар (пока скрыты)
    const indicators = document.createElement("div");
    indicators.className = "radar-indicators";
    indicators.id = "indicators";

    ['left', 'right'].forEach(side => {
        const indicator = document.createElement("div");
        indicator.className = `indicator ${side}`;
        indicator.id = `${side}-indicator`;
        indicators.appendChild(indicator);
    });

    const radar = document.createElement("div");
    radar.id = "radar_id";
    radar.className = "radar";

    // Добавляем элементы в рельс
    sleeper.appendChild(indicators);
    sleeper.appendChild(radar);

    // Добавляем рельс в контейнер
    sleeperWithRollers.appendChild(sleeper);
    container.appendChild(sleeperWithRollers);

    // Парсинг координат дефектов
    dentsArray = dentsInput.split(',')
        .map(item => parseInt(item.trim()))
        .filter(num => !isNaN(num) && num > 0 && num < railLength);

    // После завершения анимации въезда рельса
    setTimeout(() => {
        // Показываем радар и индикаторы
        indicators.style.animation = "fadeIn 1s forwards";
        radar.style.animation = "fadeIn 1s forwards";

        // Создаем дефекты на рельсе
        createDents();

        // Запускаем алгоритм проверки
        setTimeout(() => {
            Algoritm();
            RightCheck();
            scanRail();
        }, 1000);

    }, 2000);
}

function Algoritm() {
    let radar = document.getElementById("radar_id");
    if (!radar) {
        console.error("Радар не создался");
        return;
    }
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
    let rail = document.getElementById("rail");
    const { width } = rail.getBoundingClientRect();

    let radar = document.getElementById("radar_id");
    radarPosition = parseInt(radar.style.left) || 0;

    let minDistRight = width;
    let minDistLeft = width;
    let check_under = null;

    for (const element of dentsArray) {
        if (element < radarPosition) {
            const dist1 = radarPosition - element;
            if (dist1 < minDistLeft) {
                minDistLeft = dist1;
            }
        }
        else if (element > radarPosition) {
            const dist = element - radarPosition;
            if (dist < minDistRight) {
                minDistRight = dist;
            }
        }
        else if (element == radarPosition) {
            check_under = element - radarPosition;
        }
    }

    if (minDistRight > 10) {
        RightStatus = "Rgreen";
    }
    else if (minDistRight <= 5) {
        RightStatus = "Rred";
    }
    else if (minDistRight > 5 && minDistRight <= 10) {
        RightStatus = "Ryellow";
    }

    if (minDistLeft > 10) {
        LeftStatus = "Lgreen";
    }
    else if (minDistLeft <= 5) {
        LeftStatus = "Lred";
    }
    else if (minDistLeft > 5 && minDistLeft <= 10) {
        LeftStatus = "Lyellow";
    }

    const leftIndicator = document.getElementById("left-indicator");
    const rightIndicator = document.getElementById("right-indicator");

    leftIndicator.className = "indicator left " +
        (minDistLeft > 10 ? "green" : minDistLeft <= 5 ? "red" : "yellow");

    rightIndicator.className = "indicator right " +
        (minDistRight > 10 ? "green" : minDistRight <= 5 ? "red" : "yellow");
}
function scanRail() {
    let radar = document.getElementById("radar_id");
    let rail = document.getElementById("rail");
    const railWidth = rail.getBoundingClientRect().width;
    radar.style.left = radarPosition + "px";
    step = 0;
    let fastSkipMode = false;

    // Очищаем предыдущие результаты перед новым сканированием
    document.getElementById("saved-results").innerHTML = "";

    function scanStep() {
        if (radarPosition >= railWidth) {
            const message = `Сканирование завершено. Всего шагов: ${step}`;
            stepscollect(message);

            // Сохраняем текущие результаты
            saveCurrentScan();

            console.log("Сканирование завершено. Шагов сделано:", step);
            return;
        }

        let dentFound = false;
        for (let i = dentsArray.length - 1; i >= 0; i--) {
            if (Math.abs(dentsArray[i] - radarPosition) <= 0) {
                stepscollect(`Позиция: ${radarPosition}px - найдена вмятина!`, true);
                foundDents.push(dentsArray[i]);
                dentsArray.splice(i, 1);
                createDents();
                dentFound = true;
                fastSkipMode = true;
                lastRedPosition = radarPosition;
                break;
            }
        }

        let prevPosition = radarPosition;
        console.log(prevPosition);

        //лево - красное
        if (LeftStatus === "Lred" && RightStatus === "Rgreen") {
            radarPosition -= 1;
            step += 1;
            stepscollect(`-1см (красный, позиция: ${radarPosition}см)`);
            console.log("-1");
        }
        //лево - желтое
        else if (LeftStatus === "Lyellow" && RightStatus === "Rgreen") {
            radarPosition -= 6;
            step += 1;
            stepscollect(`-6см (желтый, позиция: ${radarPosition}см)`);
            console.log("-6");
        }
        //лево - красное, право - желтое
        else if (LeftStatus === "Lred" && RightStatus === "Ryellow") {
            const leftDents = dentsArray.filter(dent => dent < radarPosition);
            const hasLeftDent = leftDents.length > 0;
            const rightDents = dentsArray.filter(dent => dent > radarPosition);
            const hasRightDent = rightDents.length > 0;

            if (hasLeftDent) {
                radarPosition -= 1;
                step += 1;
                stepscollect(`-1см (красный-желтый, есть дефект слева, позиция: ${radarPosition}см)`);
                console.log("-1 (дефект слева)");
            }
            else if (hasRightDent) {
                radarPosition = prevPosition + 6;
                step += 1;
                stepscollect(`+6см (красный-желтый, нет дефектов слева, есть справа, позиция: ${radarPosition}см)`);
                console.log("+6 (дефект справа)");
            }
            else {
                radarPosition += 6;
                step += 1;
                stepscollect(`+6см (красный-желтый, неожиданный случай, позиция: ${radarPosition}см)`);
                console.log("+6 (неожиданный случай)");
            }
        }
        //лево - желтое, право - красное (НОВЫЙ БЛОК)
        else if (LeftStatus === "Lyellow" && RightStatus === "Rred") {
            const leftDents = dentsArray.filter(dent => dent < radarPosition);
            const hasLeftDent = leftDents.length > 0;
            const rightDents = dentsArray.filter(dent => dent > radarPosition);
            const hasRightDent = rightDents.length > 0;

            if (hasLeftDent) {
                radarPosition -= 6;
                step += 1;
                stepscollect(`-6см (желтый-красный, есть дефект слева, позиция: ${radarPosition}см)`);
                console.log("-6 (дефект слева)");
            }
            else if (hasRightDent) {
                radarPosition = prevPosition + 1;
                step += 1;
                stepscollect(`+1см (желтый-красный, нет дефектов слева, есть справа, позиция: ${radarPosition}см)`);
                console.log("+1 (дефект справа)");
            }
            else {
                radarPosition += 1;
                step += 1;
                stepscollect(`+1см (желтый-красный, неожиданный случай, позиция: ${radarPosition}см)`);
                console.log("+1 (неожиданный случай)");
            }
        }
//лево - красное , право - красное
        else if (LeftStatus === "Lred" && RightStatus === "Rred") {
            const leftDents = dentsArray.filter(dent => dent < radarPosition);
            const hasLeftDent = leftDents.length > 0;
            const rightDents = dentsArray.filter(dent => dent > radarPosition);
            const hasRightDent = rightDents.length > 0;

            if (hasLeftDent) {
                radarPosition -= 1;
                step += 1;
                stepscollect(`-1см (красный-красный, есть дефект слева, позиция: ${radarPosition}см)`);
                console.log("-1 (дефект слева)");
            }
            else if (hasRightDent) {
                radarPosition =prevPosition + 1;
                step += 1;
                stepscollect(`+1см (красный-красный, нет дефектов слева, есть справа, позиция: ${radarPosition}см)`);
                console.log("+1 (дефект справа)");
            }
            else {
                radarPosition += 1;
                step += 1;
                stepscollect(`+1см (красный-красный, неожиданный случай, позиция: ${radarPosition}см)`);
                console.log("+1 (неожиданный случай)");
            }
        }
        //лево - желто, право - желто
        else if (LeftStatus === "Lyellow" && RightStatus === "Ryellow") {
            const leftDents = dentsArray.filter(dent => dent < radarPosition);
            const hasLeftDent = leftDents.length > 0;
            const rightDents = dentsArray.filter(dent => dent > radarPosition);
            const hasRightDent = rightDents.length > 0;

            if (hasLeftDent) {
                radarPosition -= 6;
                step += 1;
                stepscollect(`-6см(желтый-желтый, есть дефект слева, позиция: ${radarPosition}см)`);
                console.log("-6 (дефект слева)");
            }
            else if (hasRightDent) {
                radarPosition = prevPosition + 6;
                step += 1;
                stepscollect(`+6см(желтый-желтый, нет дефектов слева, есть справа, позиция: ${radarPosition}см)`);
                console.log("+6 (дефект справа)");
            }
            else {
                radarPosition += 6;
                step += 1;
                stepscollect(`+6см (желтый-желтый, неожиданный случай, позиция: ${radarPosition}см)`);
                console.log("+6 (неожиданный случай)");
            }
        }

        else if (RightStatus === "Rgreen" && LeftStatus === "Lgreen") {
            radarPosition += 20;
            step += 1;
            stepscollect(`Быстрое движение +20см (позиция: ${radarPosition}см)`);
            console.log("+20");
        }
        else if (RightStatus === "Ryellow" && LeftStatus === "Lgreen") {
            radarPosition += 6;
            step += 1;
            stepscollect(`+6 (позиция: ${radarPosition}см)`);
            console.log("+6");
        }
        else if (RightStatus === "Rred" && LeftStatus === "Lgreen") {
            radarPosition += 1;
            step += 1;
            stepscollect(`+1 (позиция: ${radarPosition}см)`);
            console.log("+1");
        }

        if (radarPosition < 0) radarPosition = 0;
        if (radarPosition > railWidth) radarPosition = railWidth;

        radar.style.left = radarPosition + "px";
        RightCheck();

        setTimeout(scanStep, 50);
    }

    scanStep();
}
function stepscollect(message, isDentFound = false) {
    let container1 = document.getElementById("container1");
    let stepInfo = document.createElement("div");

    if (isDentFound) {
        stepInfo.className = "dent-found";
        stepInfo.textContent = message;
    } else {
        stepInfo.className = "step-info";
        stepInfo.textContent = `Шаг ${step}: ${message}`;
    }

    container1.appendChild(stepInfo);
    container1.scrollTop = container1.scrollHeight;
}
function saveCurrentScan() {
    const container1 = document.getElementById("container1");
    const scanData = {
        html: container1.innerHTML,
        steps: step,
        date: new Date().toLocaleTimeString()
    };

    savedScans.push(scanData);
    currentScanIndex = savedScans.length - 1;
    updateNavigation();
    showCurrentScan();
}

function showCurrentScan() {
    if (currentScanIndex >= 0 && currentScanIndex < savedScans.length) {
        const scan = savedScans[currentScanIndex];
        document.getElementById("saved-results").innerHTML = scan.html;
        document.getElementById("scan-number").textContent = currentScanIndex + 1;
    }
}

function updateNavigation() {
    const prevButton = document.getElementById("prev-scan");
    const nextButton = document.getElementById("next-scan");

    prevButton.disabled = currentScanIndex <= 0;
    nextButton.disabled = currentScanIndex >= savedScans.length - 1;
}

// Добавляем обработчики для кнопок навигации
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("prev-scan").addEventListener('click', function() {
        if (currentScanIndex > 0) {
            currentScanIndex--;
            showCurrentScan();
            updateNavigation();
        }
    });

    document.getElementById("next-scan").addEventListener('click', function() {
        if (currentScanIndex < savedScans.length - 1) {
            currentScanIndex++;
            showCurrentScan();
            updateNavigation();
        }
    });
});

