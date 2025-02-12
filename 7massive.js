function add1() {
    let addElement = document.getElementById('container');
    let input = document.getElementById('text');
    let olElement = addElement.querySelector('ol'); // Получаем существующий ol или создаем новый
    // console.log(olElement)

    if (input.value === '') {
        alert('Убедитесь, что значение названия не пустое');
    }
    else{

        if (!olElement) {  //Если ol не существует, создаем его
            olElement = document.createElement('ol');
            addElement.appendChild(olElement);
        }
        let liElement = document.createElement('li');
        liElement.innerText = input.value;
        olElement.appendChild(liElement);
        input.value = '';
        console.log(olElement)
    }
}
function add2(){
    let length = document.getElementById('olElement').length;
    let input2 =  document.getElementById('text2');
    let index =  document.getElementById('index');
    if(length == index){
        let olElement =document.getElementById('olElement');


    }
    else{
        console.error('такого айди нету')
    }


}

