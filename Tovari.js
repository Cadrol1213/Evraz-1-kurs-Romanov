let a = 0;
let b = 0;
let priceValue1 = 0;
let TypeCash = ""
let current_goods = ""
let form = document.getElementById('form');

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
            <div class="Style_div"><label >Введите процент скидки:</label></div>
            <label>
                <div><input type="text" id="salary" class = "poli"> %
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

function typeofcash() {
    TypeCash = 'безналичные'
    console.log(TypeCash)
}

function typeofcash1() {
    TypeCash = 'наличные'
    console.log(TypeCash)

}

function addProduct() {
    event.preventDefault();
    form.reset();
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
    let translatedColor;

    if (colors === "красный") {
        translatedColor = "red";
    } else if (colors == "синий") {
        translatedColor = "blue";
    } else if (colors == "розовый") {
        translatedColor = "pink";
    } else if (colors == "серый") {
        translatedColor = "darkslategrey;";

    } else if (colors == "белый") {
        translatedColor = "wheat";

    } else {
        translatedColor = "unknown color"; // Для неопознанного цвета
    }
    console.log(translatedColor)

    if (a === 1) {
        let salary = document.getElementById("salary").value;
        priceValue1 = price - price * salary / 100;
        b = b + 1
        newDiv.id = 'id' + b
        newDiv.innerHTML = `
            <span class="close"><button onclick="Delete(this)">✖</button></span>
            <span class="changer"><button onclick="changer(this)">✎ </button></span>
            <span class="arrow"><button onclick="arrow1(this)">🠝</button></span>
            <span class="arrow"><button onclick="arrow2(this)">🠟</button></span>
            <div style="font-size: 26px ; padding-bottom: 5px;  font-weight: bold; padding-top: 5px" >${name}</div>
            <div style="font-style: italic ; padding-bottom: 5px">Категории:<span>${Category}</span></div>
            <div style="font-style:italic ; padding-bottom: 5px">Особенности: <span>${specifics}</span></div>
            <div style="padding-bottom: 5px">${story}</div>
            <div style="padding-bottom: 5px">Пункт выдачи: <span>${geo.value} </span></div>
            <div style="padding-bottom: 5px">Тип оплаты: <span>${TypeCash1}</span> </div>
            <div style="padding-bottom: 5px">Цвет: <span id = "idcolors" style="color:${translatedColor} " >${colors}</span></div>
            <div>
            <span class =  "tovar-price">Цена: <span class="NewPrice">${price}</span><span>руб.</span></span>
            <span>Количество: <span>${much}</span></span>
            </div>
            <div class ="priceValue1" >${priceValue1}<span>руб.</span></div>
        `;
    } else {
        b = b + 1

        newDiv.id = 'id' + b
        newDiv.innerHTML = `  
            <span class="close"><button onclick="Delete(this)">✖</button></span>
            <span class="changer"><button onclick="changer(this)">✎ </button></span>
            <span class="arrow"><button onclick="arrow1(this)">🠝</button></span>
            <span class="arrow"><button onclick="arrow2(this)">🠟</button></span>
           <div style="font-size: 26px ; padding-bottom: 5px;  font-weight: bold; padding-top: 5px" >${name}</div>
            <div  style="font-style:italic ; padding-bottom: 5px">${Category}</div>
            <div style="font-style:italic ; padding-bottom: 5px">Особенности: <span>${specifics}</span></div>
            <div style="padding-bottom: 5px">${story}</div>
             <div style="padding-bottom: 5px">Пункт выдачи: <span>${geo.value} </span></div>
            <div style="padding-bottom: 5px">Тип оплаты: <span>${TypeCash1}</span> </div>
            <div style="padding-bottom: 5px">Цвет: <span style="color:${translatedColor} ">${colors}</span></div>
            <div>
            <span style=" padding-right: 40px;">Цена: <span>${price}</span><span>руб.</span></span>
            <span>Количество: <span>${much}</span><span>руб.</span></span>
            </div>
        `;
    }

    container1.appendChild(newDiv); // добавляем новый div в контейнер
}

function Delete(button) {
    let product = button.parentElement.parentElement;//возвращает родителя

    product.remove();
}

function change1(button) {
    console.log(button)
    let product = document.getElementById(current_goods)
    let button_Product = document.getElementById("addProduct");
    let h2form = document.getElementById("h2form");
    product.className = "tovar"
    button_Product.innerText = "Добавить товар"
    button_Product.onclick = addProduct
    h2form.innerText = "Форма добавления товара"
}

function changer(button) {
    // Получаем родительский элемент продукта
    let product = button.parentElement.parentElement;
    product.className = "target"; // Изменяем класс продукта
    console.log(product); // Логируем продукт

    current_goods = product.id
    console.log(current_goods)

    // Получаем кнопку "Добавить товар" и меняем её текст
    let addProduct = document.getElementById("addProduct");
    addProduct.innerText = "Изменить товар";
    addProduct.onclick = change1

    // Получаем заголовок формы и меняем его текст
    let h2form = document.getElementById("h2form");
    h2form.innerText = "Форма изменения товара";

}

    function arrow1(button) {

        let product = button.parentElement.parentElement; // получаем родительский элемент товара
        console.log(product)
        let prevProduct = product.previousElementSibling; // получаем предыдущий элемент (товар)
        console.log(prevProduct)

        if (prevProduct) { // если есть предыдущий элемент
            product.parentElement.insertBefore(product, prevProduct); // перемещаем текущий товар перед предыдущим

        }
    }
    function arrow2(button) {
        let product = button.parentElement.parentElement; // получаем родительский элемент товара
        console.log(product)
        let nextProduct = product.nextElementSibling; // получаем следующий элемент (товар)
        console.log(nextProduct)

        if (nextProduct) { // если есть следующий элемент
            product.parentElement.insertBefore(nextProduct, product); // перемещаем следующий товар перед текущим
        }
    }
