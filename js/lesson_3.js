const b1 = document.querySelector('.b-1');
const i1 = document.querySelector('.i-1');
const out1 = document.querySelector('.out-1');

b1.onclick = function f1 () {
    let a = +i1.value;
    if ( a == 4 ) {
        out1.innerHTML = true;
    } else {
        out1.innerHTML = false;
    }
}

let a21 = 7;
let a22 = 9;

let b2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');

b2.onclick = function f2 () {
    if ( a21 > a22 ) {
        out2.innerHTML = a21;
    } else {
        out2.innerHTML = a22;
    }
}

let b3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');

b3.onclick = function f3 () {
    let a = +document.querySelector('.i-31').value;
    b = +document.querySelector('.i-32').value;
    console.log(a);
    console.log(b);
    if (a > b) {
        out3.innerHTML = a;
    } else {
        out3.innerHTML = b;
    }
}

let b4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

b4.onclick = function f4 () {
    let a = +document.querySelector('.i-4').value;
    if (a > 18 || a == 18) {
        out4.innerHTML = 1;
    } else {
        out4.innerHTML = 0;
    }
}

let b5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');

b5.onclick = function f5 () {
    let a = +document.querySelector('.i-5').value;
    if (a < 0) {
        out5.innerHTML = 'm';
    } else if (a == 0) {
        out5.innerHTML = 0;
    } else {
        out5.innerHTML = 1;
    }
}

let b6 = document.querySelector('.b-6');
let out6 = document.querySelector('.out-6');

b6.onclick = function f6 () {
    let a = +document.querySelector('.i-6').value;
    if ( a % 2 == 0) {
        out6.innerHTML = 'even';
    } else {
        out6.innerHTML = 'odd';
    }
}

let b7 = document.querySelector('.b-7');
let out7 = document.querySelector('.out-7');

b7.onclick = function f7 () {
    let a = +document.querySelector('.i-71').value;
    b = +document.querySelector('.i-72').value;
    out7.innerHTML = Math.pow(a, b);
}

let b8 = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');

b8.onclick = function f8 () {
    i = +document.querySelector('.s-8').value;
    switch(i) {
        case 1:
          out8.innerHTML = 'one';
          break;
        case 2:
            out8.innerHTML = 'two';
          break;
        case 3:
            out8.innerHTML = 'three';
          break;
      }
}

let b9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');

b9.onclick = function f9 () {
    let a = +document.querySelector('.i-9').value;
    if (a >= 1 && a <= 32) {
        out9.innerHTML = 1;
    } else if (a >= 33 && a <= 43) {
        out9.innerHTML = 2;
    } else if (a >= 44 && a <= 64) {
        out9.innerHTML = 3;
    } else {
        out9 = 0;
    }
}

let b10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');

b10.onclick = function f10 () {
    let a = +document.querySelector('.s-100').value;
    out10.innerHTML = a;
}

let out11 = document.querySelector('.out-11');
let s110 = document.querySelector('.s-110');

s110.onchange = function f11 () {
    let a = +s110.value;
    out11.innerHTML = a;
}

let b120 = document.querySelector('.b-120');
let out120 = document.querySelector('.out-120');

b120.onclick = function f12 () {
    let a = document.querySelector('.i-120').value;
    out120.innerHTML = typeof a;
}

let b130 = document.querySelector('.b-130');
let out130 = document.querySelector('.out-130');

b130.onclick = function f13 () {
    let a = document.querySelector('.i-120').value;
    out130.innerHTML = typeof a;
}

let b14 = document.querySelector('.b-14');
let out14 = document.querySelector('.out-14');

b14.onclick = function f14 () {
    let a = +document.querySelector('.i-141').value;
    let b = +document.querySelector('.i-142').value;
    let c = document.querySelector('.s-143').value;

    if (c == '+') {
        out14.innerHTML = a + b;
    } else if (c == '-') {
        out14.innerHTML = a - b;
    } else if (c == '*') {
        out14.innerHTML = a * b;
    } else {
        out14.innerHTML = a / b;
    }
}

let b15 = document.querySelector('.b-15');
let out15 = document.querySelector('.out-15');

b15.onclick = function f15 () {
    let a = +document.querySelector('.s-151').value;
    let b = +document.querySelector('.s-152').value;
    let c = document.querySelector('.s-153').value;

    switch (c) {
        case '&&':
            out15.innerHTML = a + ' и ' + b;
            break;
        case '||':
            out15.innerHTML = a + ' или ' + b;
            break;
    }
}