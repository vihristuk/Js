function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
    console.log(arr);
}

let d1 = [33, 'best', 66, 'best'];

function f1() {
    let i1 = document.querySelector('.i-1').value;
    d1.push(i1);
    showArr('.out-1', d1);
}

document.querySelector('.b-1').onclick = f1;


function f2() {
    d1.pop();
    showArr('.out-2', d1);
}

document.querySelector('.b-2').onclick = f2;

function f3() {
    d1.shift();
    showArr('.out-3', d1);
}

document.querySelector('.b-3').onclick = f3;

function f4() {
    let i4 = document.querySelector('.i-4').value;
    d1.push(i4);
    showArr('.out-4', d1);
}

document.querySelector('.b-4').onclick = f4;

function f5() {
    let i5 = document.querySelector('.i-5').value;
    d1.unshift(i5);
    showArr('.out-5', d1);
}

document.querySelector('.b-5').onclick = f5;

let d6 = ['test', 5, 12];

function f6() {
    let i6 = document.querySelector('.i-6').value;
    d6[d6.length] = i6;
    showArr('.out-6', d6);
}

document.querySelector('.b-6').onclick = f6;

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    d7.length--;
    showArr('.out-7', d7);
}

document.querySelector('.b-7').onclick = f7;

let d8 = [2, '4', 12, 67, 'hello'];

function f8() {
    let i8 = document.querySelector('.i-8').value;
    for (let i = d8.length; i > 0; i--) {
        d8[i] = d8[i - 1];
    }
    d8[0] = i8;
    showArr('.out-8', d8);
}

document.querySelector('.b-8').onclick = f8;

let d9 = [100, 200, 300, 400, 700, 121];

function f9() {
    for (let i = 0; i < d9.length; i++) {
        d9[i] = d9[i + 1];
    }
    d9.length--;
    showArr('.out-9', d9);
}

document.querySelector('.b-9').onclick = f9;

let d10 = [3, 14, 15, 92, 6];

function f10() {
    d10.reverse();
    showArr('.out-10', d10);
}

document.querySelector('.b-10').onclick = f10;

let d11 = [2, 3, 4, 5, 6, 7, 7];
let out11 = document.querySelector('.out-11');

function f11() {
    let i11 = document.querySelector('.i-11').value;
    let i111 = Number(i11);
    console.log(i111);
    out11.innerHTML = d11.indexOf(i111);
}

document.querySelector('.b-11').onclick = f11;

let d12 = [6, 62, 60, 70, 1, 5];
let out12 = document.querySelector('.out-12');

function f12() {
    let i12 = document.querySelector('.i-12').value;
    let i112 = Number(i12);
    console.log(i112);
    let a = -1;
    for (let i = 0; i < d12.length; i++) {
        if (d12[i] === i112) {
            a = i;
        break;
        }
    }
    out12.innerHTML = a;
}

document.querySelector('.b-12').onclick = f12;

let d13 = [6, 0, 22, 1, 4, 76];

function f13() {
    let d131 = [];
    for (let i = 0; i < d13.length; i++) {
        d131.push(d13[d13.length - (i + 1)]);
    console.log(d131);
    }
    d13 = d131;
    showArr('.out-13', d13);
}

document.querySelector('.b-13').onclick = f13;

let d14 = [];

function f14() {
    let i14 = document.querySelector('.i-14').value;
    let i14number = Number(i14);
    for (let i = 0; i <= i14number; i++) {
        d14.push(1);
    }
    showArr('.out-14', d14);
}

document.querySelector('.b-14').onclick = f14;

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    let i15 = document.querySelector('.i-15').value;
    let i15number = Number(i15);
    console.log(i15number);
    let a = d15.indexOf(i15number);
    console.log(a);
    if (a === -1) {
        d15.push(i15number);
    }
    showArr('.out-15', d15);
}

document.querySelector('.b-15').onclick = f15;

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {
    d16 = d161.concat(d162);
    showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;

let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];

function f17() {
    for (let i = 0; i < d172.length; i++) {
        d171.push(d172[i]);
    }
    d17 = d171;
    showArr('.out-17', d17);
}

document.querySelector('.b-17').onclick = f17;

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];
let out18 = document.querySelector('.out-18');

function f18() {
    let i18 = document.querySelector('.i-18').value;
    out18.innerHTML = d18.includes(i18);
}

document.querySelector('.b-18').onclick = f18;

let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
let maxString = '';
let out19 = document.querySelector('.out-19');

function f19() {
    for (let i = 0; i < d19.length; i++) {
        if (d19[i].length > maxString.length) {
            maxString = d19[i];
        }
    }
    out19.innerHTML = maxString;
}

document.querySelector('.b-19').onclick = f19;

let d20 = [4, 5, 6, 7, 8, 9, 10];
let out20 = document.querySelector('.out-20');

function f20() {
    out20.innerHTML = d20.join('');
}

document.querySelector('.b-20').onclick = f20;