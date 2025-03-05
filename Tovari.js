let a = 0;
let b = 0;
let priceValue1 = 0;
let TypeCash = ""

function CreateInput(radio) {
    let container = document.getElementById('Yes_NO_cont');
    if (radio.value === 'yes' || radio.parentElement.id === 'Yes') {
        CreateInput1(container);
    } else {
        CreateInput2(container);
    }
}

function CreateInput1(container) {
    if (!document.getElementById('NewInput')) {
        let inputDiv = document.createElement('div');
        a = 1;
        inputDiv.id = 'NewInput';
        inputDiv.innerHTML = `
            <div class="Style_div"><label>Введите процент скидки:</label></div>
            <label>
                <div><input type="text" id="salary"> %
                </label></div>
        `;
        container.appendChild(inputDiv);
    }
}

function CreateInput2(container) {
    let NewInput = document.getElementById('NewInput');
    if (NewInput) {
        container.removeChild(NewInput);
        a = 0;
    }
}
function typeofcash(){
    TypeCash = 'no-cash'
    console.log(TypeCash)
}
function typeofcash1(){
    TypeCash = 'cash'
    console.log(TypeCash)

}

function addProduct() {
    let TypeCash1 = TypeCash
    let Category = document.getElementById("Category").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let much = document.getElementById("much").value;
    let colors = document.getElementById("colors").value;
    let geo = document.getElementById("geo")
    let Checkbox = document.getElementById("Specifics");
    let Checkbox1 = document.getElementById("Specifics1");

    let specifics = "";
    if (Checkbox.checked) {
        specifics += "Б/У  ";
    }
    if (Checkbox1.checked) {
        specifics += "Хрупкий  ";
    }

    let story = document.getElementById("story").value;

    let container1 = document.getElementById("container1");
    let newDiv = document.createElement("div");
    newDiv.className = "tovar"; // добавляем класс
    newDiv.setAttribute('data-name', name); // сохраняем имя продукта для обновления

    if (a === 1) {
        let salary = document.getElementById("salary").value;
        priceValue1 = price - price * (salary / 100);
        b = b +1
        newDiv.id = 'id' + b
        newDiv.innerHTML = `
            <span class="close"><button onclick="Delete(this)">✖</button></span>
            <span class="changer"><button onclick="changer(this)">✎ </button></span>
            <span class="arrow"><button onclick="arrow1(this)">🠝</button></span>
            <span class="arrow"><button onclick="arrow2(this)">🠟</button></span>
            <h3 class="producth3">${name}</h3>
            <div class="product_Category">${Category}</div>
            <div>Особенности: <div>${specifics}</div></div>
            <div>${story}</div>
            <div class =  "tovar-price">Цена: <span class="NewPrice">${price}</span><div>${priceValue1}</div></div>
            <div>Количество: <span>${much.value}</span></div>
            <div>Пункт выдачи: <span>${geo.value} </span></div>
            <div>Тип оплаты: <span>${TypeCash1}</span> </div>
            <div>Цвет: <span>${colors}</span></div>
        `;
    }
    else {
        b = b +1
        newDiv.id = 'id' + b
        newDiv.innerHTML = `  
            <span class="close"><button onclick="Delete(this)">✖</button></span>
            <span class="changer"><button onclick="changer(this)">✎ </button></span>
            <span class="arrow"><button onclick="arrow1(this)">🠝</button></span>
            <span class="arrow"><button onclick="arrow2(this)">🠟</button></span>
            <h3 class="producth3">${name}</h3>
            <div class="product_Category">${Category}</div>
            <div>Особенности: <div>${specifics}</div></div>
            <div>${story}</div>
            <div>Цена: <span>${price}</span></div>
            <div>Количество: <span>${much}</span></div>
             <div>Пункт выдачи: <span>${geo} </span></div>
            <div>Тип оплаты: <span>${TypeCash1}</span> </div>
            <div>Цвет: <span>${colors}</span></div>
        `;
    }

    container1.appendChild(newDiv); // добавляем новый div в контейнер
}

function Delete(button) {
    let product = button.parentElement.parentElement;//возвращает родителя
    product.remove();
}

// function changer(button) {
//     let productDiv = button.parentElement.parentElement;
//     let nameElement = productDiv.querySelector('.product h3');
//     let priceElement = productDiv.querySelector('.NewPrice');
//     let countElement = productDiv.querySelector('div:nth-last-child(1) > div');
//     let Category = document.getElementById("Category").value;
//     let name = document.getElementById("name").value;
//     let Newprice = document.getElementById("price").value;
//     let much = document.getElementById("much").value;
//
//     let Checkbox = document.getElementById("Specifics");
//     let Checkbox1 = document.getElementById("Specifics1");
//
//     let specifics = "";
//     if (Checkbox.checked) {
//         specifics += "Б/У  ";
//     }
//     if (Checkbox1.checked) {
//         specifics += "Хрупкий  ";
//     }
//
//     let story = document.getElementById("story").value;
//
//     let newName = prompt("Введите новое имя продукта:")
//
//
//     nameElement.textContent;
//     let newPrice = prompt("Введите новую цену продукта:", priceElement.textContent);
//     let newCount = prompt("Введите новое количество продукта:", countElement.textContent);
//
//     if (newName) {
//         nameElement.textContent = newName;
//     }
//
//     if (newPrice) {
//
//         priceElement.textContent = newPrice;
//     }
//
//     if (newCount) {
//         countElement.textContent = newCount;
//     }
// }
// function arrow1(){}