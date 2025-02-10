function add1() {
    let span_add1 = document.getElementById("span_add1");
    if (span_add1) {
        for (let i = 0; i < 5; i++) {
            let span = document.createElement("span");
            span.textContent = i;
            span.classList.add("margin"); // Добавляем класс
            span_add1.appendChild(span);
        }
    }
}
function add2() {
    let span_add2 = document.getElementById("span_add2");
    if (span_add2) {
        for (let i = 1; i < 6; i++) {
            let span = document.createElement("span");
            span.textContent = i;
            span.classList.add("margin"); // Добавляем класс
            span_add2.appendChild(span);
        }
    }
}
function add3() {
    let span_add3 = document.getElementById("span_add3");
    if (span_add3) {
        for (let i = 0; i < 11; i++) {
            let span = document.createElement("span");
            span.textContent = i;
            span.classList.add("margin"); // Добавляем класс
            span_add3.appendChild(span);
        }
    }
}
function add4() {
    let span_add4 = document.getElementById("span_add4");
    if (span_add4) {
        for (let i = 1; i < 12; i++) {
            let span = document.createElement("span");
            span.textContent = i;
            span.classList.add("margin"); // Добавляем класс
            span_add4.appendChild(span);
        }
    }
}
function add5() {
    let span_add4 = document.getElementById("span_add5");
    if (span_add4) {
        for (let i = 0; i < 20; i=i+2) {
            let span = document.createElement("span");
            span.textContent = i;
            span.classList.add("margin"); // Добавляем класс
            span_add4.appendChild(span);
        }
    }
}
function add6() {
    let span_add4 = document.getElementById(" span_add6");
    if (span_add4) {
        for (let i = 1; i < 21; i=i+2) {
            let span = document.createElement("span");
            span.textContent = i;
            span.classList.add("margin"); // Добавляем класс
            span_add4.appendChild(span);
        }
    }
}


function add7() {
    let span_add6 = document.getElementById("span_add7");
    if (span_add6) {
        for (let i = 0; i < 11; i = i + 1) {
            let span = document.createElement("span");
            span.textContent = i;
            span.classList.add("margin"); // Добавляем класс
            if (i %2 === 0){
                span.classList.add("red")
            }
        span_add6.appendChild(span);
        }
    }
}
