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

function add() {
    document.getElementById("container").innerHTML = "";
    document.getElementById("container1").innerHTML = "";
    foundDents = [];
    step = 0;
    ldents = 0;
    specialMode = false;

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

    let radar = document.createElement("div");
    radar.id = "radar_id";
    radar.className = "radar";
    radarPosition = 10;
    radar.style.left = radarPosition + "px";
    sleeper.appendChild(radar);
    document.getElementById("container").appendChild(sleeper);

    createDents();
    Algoritm();
    RightCheck();
    scanRail();
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

    function scanStep() {
        if (radarPosition >= railWidth) {
            stepscollect(`Сканирование завершено. Всего шагов: ${step}`);
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
        //лево - красное
        if (LeftStatus === "Lred" && RightStatus === "Rgreen") {
            radarPosition -= 1;
            step += 1;
            stepscollect(`-1px  (красный, позиция: ${radarPosition}px)`);
        }
        //лево - желое
        else if (LeftStatus === "Ryellow" && RightStatus === "Rgreen") {
            radarPosition -= 6;
            step += 1;
            stepscollect(`-6px  (желтый, позиция: ${radarPosition}px)`);
        }
        //лево - красное,право - желтое
        else if (LeftStatus === "Lred" && RightStatus === "Ryellow") {
            if (!checkedLeft) {
                radarPosition -= 1;
                checkedLeft = true;
                step += 1;
                stepscollect(`-1px  (красный-желтый, позиция: ${radarPosition}px)`);
            } else {
                radarPosition = prevPosition + 6;
                checkedLeft = false;
                step += 1;
                stepscollect(` +6px после проверки (позиция: ${radarPosition}px)`);
            }
        }
        //лево - красное,право - желтое
        else if (RightStatus === "Rgreen" && LeftStatus === "Lgreen") {
            radarPosition += 20;
            step += 1;
            stepscollect(`Быстрое движение +20 (позиция: ${radarPosition}px)`);
        }
        else if (RightStatus === "Ryellow" && LeftStatus === "Lgreen") {
            radarPosition += 6;
            step += 1;
            stepscollect(`+6 (позиция: ${radarPosition}px)`);
        }
        else if (RightStatus === "Rred" && LeftStatus === "Lgreen") {
            radarPosition += 1;
            step += 1;
            stepscollect(`+1 (позиция: ${radarPosition}px)`);
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