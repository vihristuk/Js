console.log('Anastasiia');
console.log(08);
console.log('Добро '+'пожаловать '+'на курс');
// alert(2023);
// alert(2019 - 200);
document.getElementById('one').innerHTML = 'Hello World';
document.getElementById('two').innerHTML = 12*12;
document.querySelector('.one').innerHTML = 'Hello World';
document.querySelector('span').innerHTML = 'world';
document.querySelector('.three').innerHTML = '<h3>Haribol</h3>';
document.querySelector('.four').innerHTML = '<h4>Hare Krishna</h4>';
document.querySelector('.four').innerHTML += '<p>Nitai Gour!</p>';

let a = document.querySelector('.five');
a.innerHTML = 3.1415;

let div7 = document.querySelector('.seven');
div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';

let z1 = 6;
let z2 = 3;
let Z = document.querySelector('.my_room');
Z.innerHTML = z1 * z2;

let y1 = 6;
let y2 = 3;
let Y = document.querySelector('.my_class');
Y.innerHTML = y1 / y2;

let x1='Hello';
let x2 = 5;
let X = document.querySelector('.my_god');
X.innerHTML = x1 + x2;

let d1 = document.querySelector('.test-1');
console.log(d1);

let d2 = document.querySelector('.test-2').innerHTML;
console.log(d2); //???//
d2 = 5;
console.log(d2);

let divS3 = document.querySelector('div.s3');
console.log(divS3);
divS3 = document.querySelector('div.s4');
console.log(divS3);

// document.querySelector('body').innerHTML = '';