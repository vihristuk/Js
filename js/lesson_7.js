let a1 = 9;

function t1() {
    document.querySelector('.out-1').innerHTML = a1;
}

document.querySelector('.b-1').onclick = t1;


let a2 = 8;
function t2() {
    return a2;
}
document.querySelector('.b-2').onclick = function() {
    document.querySelector('.out-2').textContent = t2();
}

function t3(a,b) {
    return a * b;
}
document.querySelector('.b-3-1').onclick =function() {
    document.querySelector('.out-3-1').textContent = t3(3,4);
}
document.querySelector('.b-3-2').onclick = function(){
    document.querySelector('.out-3-2').textContent = t3(5,6);
}

function age(year) {
    return 2023 - year;
}
document.querySelector('.out-4').innerHTML = age(1988);

function greeting(name) {
    return 'Hello, ' + name;
}
document.querySelector('.out-5').innerHTML = greeting('Anastasiia');

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

document.querySelector('.out-6').innerHTML = randomInteger(10, 100);

function t7() {
    return `rgb(${randomInteger(0,255)}, ${randomInteger(0,255)}, ${randomInteger(0,255)}`
}

document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').style.background = t7();
}

function t8(str) {
    return str.trim();
}

document.querySelector('.b-8').onclick = function () {
    document.querySelector('.out-8').textContent = t8('  Hello  ');
}

function t9(num) {
    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return num % 2 === 0;
}

document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(15);
}

function t10(a, b) {
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    } else {
        return a || b
    }

}

document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(100, 100);
}