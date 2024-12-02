function changeText() {
    let middlename = prompt('Укажите свое имя');
    let middlenameDOM = document.getElementById('middlename');
    middlenameDOM.innerText = middlename
}
