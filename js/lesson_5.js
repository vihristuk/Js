let b1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');

b1.onclick = function t1() {
    for (let i = 1; i <= 50; i++ ) {
        out1.innerHTML += i + ' ';
    }
}

let b2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');

b2.onclick = function t2() {
    for (let i = 2; i < 124; i = i + 2) {
        out2.innerHTML += i + ' ';
    }
}

let b3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');

b3.onclick = function t3() {
    for (let i = 25; i > 6; i--) {
        out3.innerHTML += i + ' ';
    }
}

let b4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

b4.onclick = function t4() {
    for (let i = 77; i > 34; i = i - 3) {
        out4.innerHTML += i + '_';
    }
}

let b5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');

b5.onclick = function t5() {
    for (let i = 1; i < 18; i++) {
        let a;
        if ( i % 2 == 0) {
            a = '_**';
        } else {
            a = '_*';
        }
        out5.innerHTML += i + a;
    }
}

let i6 = document.querySelector('.i-6');
let b6 = document.querySelector('.b-6');
let out6 = document.querySelector('.out-6');

b6.onclick = function t6() {
    let a = i6.value;
    console.log(a);
    for (let i = 0; i < a; i++ ) {
        out6.innerHTML += '******<br>';
    }
}

let i7 = document.querySelector('.i-7');
let b7 = document.querySelector('.b-7');
let out7 = document.querySelector('.out-7');

b7.onclick = function t7() {
    let a = i7.value;
    for (let i = a; i >= 0; i--) {
        out7.innerHTML += i + ' ';
    }
}

let i81 = document.querySelector('.i-81');
let i82 = document.querySelector('.i-82');
let b8 = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');

b8.onclick = function t8() {
    let a = i81.value;
    let b = i82.value;
    for (let i = a; i <= b; i++) {
        out8.innerHTML += i + ' ';
    }
}

let i91 = document.querySelector('.i-91');
let i92 = document.querySelector('.i-92');
let b9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');

b9.onclick = function t9() {
    let a = i91.value;
    let b = i92.value;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            out9.innerHTML += i + ' ';
        }
    } else {
        for (let i = b; i <= a; i++) {
            out9.innerHTML += i + ' ';
        }
    }
}

let b10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');

b10.onclick = function t10() {
    for (let i = 1950; i <= 2000; i = i + 2) {
        out10.innerHTML += i + ' ';
    }
}

let b11 = document.querySelector('.b-11');
let out11 = document.querySelector('.out-11');

b11.onclick = function t11 () {
    let a = document.querySelectorAll('div');
    for (let i = 0; i < a.length - 1; i++) {
        console.log(a[i].innerHTML);
        out11.innerHTML += a[i].innerHTML + '<br>';
    }
}

let b12 = document.querySelector('.b-12');
let out12 = document.querySelector('.out-12');

b12.onclick = function t12 () {
    let a = document.querySelectorAll('div');
    for (let i = 0; i < a.length; i++) {
        a[i].style.background = 'orange';
    }
}

let i13 = document.querySelector('.i-13');
let b13 = document.querySelector('.b-13');

b13.onclick = function t13 () {
    let a = document.querySelectorAll('input');
    for (let i = 0; i < a.length; i++) {
        a[i].value = i + 1;
    }
}

let i14 = document.querySelector('.i-14');
let b14 = document.querySelector('.b-14');
let out14 = document.querySelector('.out-14');

b14.onclick = function t14 () {
    let a = document.querySelectorAll('.i-14');
    for (let i = 0; i < a.length; i++) {
        if (a[i].checked) {
        out14.innerHTML += a[i].value + ' ';
        }
    }
}

let b15 = document.querySelector('.b-15');
let out15 = document.querySelector('.out-15');

b15.onclick = function t15 () {
    let a = ' ';
    for (let i = 10; i >= 0; i--) {
        a += i + ' ' + (10 - i) + ' ';
    }
    out15.innerHTML = a;
}