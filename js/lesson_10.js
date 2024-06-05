let ar1 = ['Hello', 25, 13, true]
let out1 = document.querySelector('.out-1');

function f1() {
    out1.innerHTML = ar1;
}

document.querySelector('.b-1').onclick = f1;

let arr2 = [185486, 'Haribol', true, 454];

function f2() {
    let out = '';
    for (let i = 0; i < arr2.length; i++) {
        out += arr2[i]+' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

let ar3 = ['hello', 4554, 'world', 7];
let out3 = document.querySelector('.out-3');

function f3() {
    out3.innerHTML = ar3.length;
}

document.querySelector('.b-3').onclick = f3;

let ar4 =  [0,1,2,3,4,5,6,7,8,9,10];
let out4 = document.querySelector('.out-4');

function f4() {
    out4.innerHTML = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
}

document.querySelector('.b-4').onclick = f4;

let ar5 = [1,5,4,0,48,5,80,4,55,12,1];
let out5 = document.querySelector('.out-5');

function f5() {
    out5.innerHTML = ar5[0] + ar5[2] + ar5[3];
}

document.querySelector('.b-5').onclick = f5;

let ar6 = ['Nastya', 'virgo', 28, 8];
let out6 = document.querySelector('.out-6');

function f6() {
    for (i=0; i<ar6.length;i++) {
        out6.innerHTML += ar6[i] + ' ';
    }
}

document.querySelector('.b-6').onclick = f6;

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let out7 = document.querySelector('.out-7');

function f7() {
    ar7.push('italy', 'turkey', 'vietnam');
    for (i=0; i<ar7.length; i++) {
        out7.innerHTML += ar7[i] + ' ';
    }
}

document.querySelector('.b-7').onclick = f7;

let ar8 = [0,1,2,3,17,5,5,];
let out8 = document.querySelector('.out-8');
let out81 = document.querySelector('.out-8-1');

function f8() {
    for (i=0;i<ar8.length;i++) {
        out8.innerHTML += ar8[i] + '-';
        out81.innerHTML = ar8.length;
    }
}

document.querySelector('.b-8').onclick = f8;

let ar9 = [100, 200, 300, 400, 700, 121];
let out9 = document.querySelector('.out-9');

function f9() {
    let a = ar9.length - 1;
    out9.innerHTML = ar9[a];
}

document.querySelector('.b-9').onclick = f9;

let ar10 = [100, 200, 300, 400, 700, 121];
let out10 = document.querySelector('.out-10');

function f10() {
    let a = ar10.length - 1;
    out10.innerHTML = ar10[0] + ar10[a];
}

document.querySelector('.b-10').onclick = f10;

let ar11 = [2, 3, 4, 5, 6, 7];
let out11 = document.querySelector('.out-11');

function f11() {
    let a = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = a;
    for (i = 0; i < ar11.length; i++) {
        out11.innerHTML += ar11[i] + ' ';
    }
}

document.querySelector('.b-11').onclick = f11;

let ar12 = ['test', 'west', 'list', 'class', 'best'];
let out12 = document.querySelector('.out-12');

function f12() {
    let lastOne = ar12.length - 1;
    let a  = ar12[lastOne];
    ar12[lastOne] = ar12[0];
    ar12[0] = a;
    for (i = 0; i < ar12.length; i++) {
        out12.innerHTML += ar12[i] + ' ';
    }
}

document.querySelector('.b-12').onclick = f12;

let ar13 = ['test', 'west', 'list', 'class', 'best'];
let out13 = document.querySelector('.out-13');

function f13() {
    for (i = 0; i < ar13.length; i++) {
        out13.innerHTML += i + ' ' + ar13[i] + ' ';
    }
}

document.querySelector('.b-13').onclick = f13;

let ar14 = [1, 2, 3, 'hello', 66];
console.log(ar14);
let out14 = document.querySelector('.out-14');

function f14() {
    for (i = ar14.length - 1; i >= 0; i--) {
        out14.innerHTML += ar14[i] + ' ';
    }
}

document.querySelector('.b-14').onclick = f14;

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let out15 = document.querySelector('.out-15');

function f15() {
    for (i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            out15.innerHTML += ar15[i] + ' ';
        }
    }
}

document.querySelector('.b-15').onclick = f15;

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];
let out16odd = document.querySelector('.out-16-odd');
let out16even = document.querySelector('.out-16-even');

function f16() {
    for (i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 === 0) {
            ar16_even.push(ar16[i]);
            out16even.innerHTML += ar16[i] + ' ';
        } else {
            ar16_odd.push(ar16[i]);
            out16odd.innerHTML += ar16[i] + ' ';
        }
    }
}

document.querySelector('.b-16').onclick = f16;
let out17 = document.querySelector('.out-17');

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0, 10, 12];

function f17() {
    let counter = 0;
    for (i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            counter++;
        }
    }
    out17.innerHTML = counter;
}

document.querySelector('.b-17').onclick = f17;

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67, 1511];
let out18 = document.querySelector('.out-18');

function f18() {
    let a = ar18[0];
    for (i = 0; i < ar18.length; i++) {
        if (ar18[i] > a) {
            a = ar18[i];
        }
    }
    out18.innerHTML = a;
}

document.querySelector('.b-18').onclick = f18;

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67, -48];
let out19 = document.querySelector('.out-19');

function f19() {
    let a = ar19[0];
    for (i = 0; i < ar19.length; i++) {
        if (ar19[i] < a) {
            a = ar19[i];
        }
    }
    out19.innerHTML = a;
}

document.querySelector('.b-19').onclick = f19;

let ar20 = [4, 5, 6, 7, 8, 9, 10];
let out20 = document.querySelector('.out-20');

function f20() {
    sum = 0;
    for (i = 0; i < ar20.length; i++) {
        sum = sum + ar20[i];
    }
    out20.innerHTML = sum;
}

document.querySelector('.b-20').onclick = f20;