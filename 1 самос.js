let name = prompt('Укажите свое имя');
let nameDOM = document.getElementById('name');
nameDOM.innerText = name

let lastname = prompt('укажите всою фамилию')
let lastnameDOM = document.getElementById('lastname')
lastnameDOM.innerText = lastname

let middlename = prompt('укажите своё отчество')
let middlenameDOM = document.getElementById('middlename')
middlenameDOM.innerText = middlename

let school = prompt('укажите свою школу')
let schoolDOM = document.getElementById('school')
schoolDOM.innerText =school

let age = prompt('укажите свой возраст')
let ageDOM = document.getElementById('age')
ageDOM.innerText = age

let class2 = prompt('укажите свой класс')
let class2DOM = document.getElementById('class2')
class2DOM.innerText = class2

let sport = prompt('укажите свой любтмый спорт')
let sportDOM = document.getElementById('sport')
sportDOM.innerText = sport

let subject = prompt('укажите свой любимый предмет')
let subjectDOM = document.getElementById('subject')
subjectDOM.innerText = subject

let color = prompt('укажите свой цвет')
let colorDOM = document.getElementById('color')
colorDOM.innerText = color

function ClearDiv() {
    let div = document.getElementById('clear')
}
