let result = document.getElementById('res');
let input1 = document.getElementById('inp1');
let a = "Стивен Хокинг"
let b = "Линус Торвальдс"
let c = "Билл Гейтс"
let answer = '';
function checkInput() {
    let input1 = document.getElementById('inp1');
}
    if (input1.value === a) {
        answer = "Стивен Хокинг -  британский физик-теоретик, космолог, астрофизик и писатель Директор по научной работе Центра теоретической космологии Кембриджского университета"
    } else if (input1.value === b) {
        answer = "Линус Торвальдс - финно-американский программист. Создатель ядра Linux.Воодушевлённый прочтением книги Эндрю Таненбаума"
    } else if (input1.value ===  c) {
        answer = "Билл Гейтс -  американский предприниматель и общественный деятель, филантроп, один из создателей (совместно с Полом Алленом) и бывший крупнейший акционер компании Microsoft."
    } else {
        answer = "нн какой то"
    }

    result.innerText = answer


