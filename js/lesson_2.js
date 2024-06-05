let a = 7;
let b = 9;
console.log(a * b);

let c = 7;
let d = 9;
document.querySelector('.one').innerHTML = c / d;

let e = 3;
let f = 5;
document.querySelector('.two').innerHTML = e + f;

let e1 = '3';
let f1 = 5;
document.querySelector('.three').innerHTML = e1 + f1;

let e2 = 3;
let f2 = 0;
document.querySelector('.four').innerHTML = e2 / f2;

let e3 = 3;
let f3 = 'Hello';
document.querySelector('.five').innerHTML = e3 + f3;

let e4 = 3;
let f4 = 'Hello';
document.querySelector('.six').innerHTML = e4 * f4;

let input = document.querySelector('input');
let button = document.querySelector('button');

button.onclick = function () {
    console.log(input.value);
}


let myInput = document.querySelector('.my_input');
let myButton = document.querySelector('.my_button');
let myDiv = document.querySelector('.seven');

myButton.onclick = function () {
    myDiv.innerHTML = myInput.value;
    myInput.value = '';
}

let oneMoreInput = document.querySelector('.one_more_input');
let oneMoreButton = document.querySelector('.one_more_button');
let oneDiv = document.querySelector('.eight');

oneMoreButton.onclick = function () {
    oneDiv.innerHTML = oneMoreInput.value * 10;
}

let iAmButton = document.querySelector('.third_button');
let iAmInput = document.querySelector('.third_input');
let iAmDiv = document.querySelector('.nine');

iAmButton.onclick = function () {
    iAmDiv.innerHTML = +iAmInput.value + 10;
}

let firstName = document.querySelector('.name');
let surname = document.querySelector('.surname');
let helloBtn = document.querySelector('.hello');

helloBtn.onclick = function () {
    console.log('Hello ' + firstName.value + ' ' + surname.value)
}

let number = document.querySelector('.number');
let anotherNumber = document.querySelector('.another_number');
let numberButton = document.querySelector('.numbers');
let numberDiv = document.querySelector('.ten');

numberButton.onclick = function () {
    numberDiv.innerHTML = +number.value + +anotherNumber.value;
}

let inputValue = document.querySelector('.my_value');
inputValue.value = 'Hello';

let newInput = document.querySelector('.eleven');
newInput.style.border = '2px solid red';

let one_ = document.querySelector('.one_');
let two_ = document.querySelector('.two_');
let summ = document.querySelector('.summ');
let btn = document.querySelector('.sum');

console.log(one_.value);

btn.onclick = function () {
    summ.innerHTML = +one_.value + +two_.value;
}

let text = document.querySelector('.text');
let textBtn = document.querySelector('.my_text');

textBtn.onclick = function () {
    t = text.value;
    t = parseInt(t);
    console.log(t);
}

let text2 = document.querySelector('.text2');
let textBtn2 = document.querySelector('.my_text2');

textBtn2.onclick = function () {
    t = text.value;
    t = parseFloat(t);
    console.log(t);
}

let myNumber = document.querySelector('.my_number');
let myNumber2 = document.querySelector('.my_number2');
let bB = document.querySelector('.bb');
let myNumberSumm = document.querySelector('.my_number_summ');

bB.onclick = function () {
    myNumberSumm.innerHTML = parseFloat(myNumber.value) + parseFloat(myNumber2.value);
}

const myName = document.querySelector('.my__name');
const mySurname = document.querySelector('.my__surname');
const myAge = document.querySelector('.my__age');
const myJob = document.querySelector('.my__job');
const myBtn = document.querySelector('.myself');
const about = document.querySelector('.about__me');

myBtn.onclick = () => {
    about.innerHTML = 'Уважаемый ' + myName.value + ' ' + mySurname.value + ', ваш возраст ' + myAge.value + ', по профессии вы ' + myJob.value;
}