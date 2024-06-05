let div1 = document.querySelector('.div-1');
let out1 = document.querySelector('.out-1');

function t1() {
    return out1.innerHTML = div1.textContent;
}

div1.onclick = t1;

let out2 = document.querySelector('.out-2');

function t2() {
    return out2.innerHTML = event.altKey;
}

document.querySelector('.div-2').onclick = t2;


let w3 = 75;
let out3 = document.querySelector('.out-3');

function t3() {
    w3 += 5;
    this.style.width = w3 + 'px';
    this.style.background = 'red';
    out3.innerHTML = w3;
}

document.querySelector('.div-3').onclick = t3;

let out4 = document.querySelector('.out-4');
let div4 = document.querySelector('.div-4');

function t4() {
    out4.textContent = div4.textContent;
}

div4.ondblclick = t4;

let div5 = document.querySelector('.div-5');

function t5() {
    div5.classList.toggle('active');
}

div5.ondblclick = t5;


let div6 = document.querySelector('.div-6');
let ul6 = document.querySelector('.ul-6');

function t6() {
    ul6.classList.toggle('hide');
}

div6.ondblclick = t6;


let div7 = document.querySelector('.div-7');

function t7() {
    div7.classList.toggle('active');
}

div7.oncontextmenu = t7;


let ch8 = document.querySelector('.ch-8');

function t8() {
    if (ch8.checked) {
        document.addEventListener('contextmenu', disableContextMenu);
    } else {
        document.removeEventListener('contextmenu', disableContextMenu);
    }
}

function disableContextMenu(event) {
    event.preventDefault();
}

ch8.onchange = t8;

let div9 = document.querySelector('.div-9');
let img = document.querySelector('.div-9 > img');

function t9() {
    img.src = './img/Gurudev.jpg';
}

div9.oncontextmenu = t9;


let div10 = document.querySelector('.div-10');
let img10 = document.querySelector('.div-10 > img');

function t10() {
    img10.src = './img/Gurudev.jpg';
}

div10.onmouseenter = t10;


let div11 = document.querySelector('.div-11');
let img11 = document.querySelector('.div-11 > img');

function t11() {
    img11.src = './img/Gurudev.jpg';
}

function t11_1() {
    img11.src = './img/Didi.jpg';
}

div11.onmouseenter = t11;
div11.onmouseleave = t11_1



let div12 = document.querySelector('.div-12');


const t12 = () => {
    div12.classList.add('active');
}

div12.onmousedown = t12;

let div13 = document.querySelector('.div-13');


const t13 = () => {
    div13.classList.add('active');
}

const t13_1 = () => {
    div13.classList.remove('active');
}

div13.onmousedown = t13;

div13.onmouseup = t13_1;



let div14 = document.querySelector('.div-14');

function t14() {
    div14.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


let div15 = document.querySelector('.div-15');

function t15() {
    div15.textContent = parseInt(div15.textContent) + 1;
}

div15.onmousemove = t15;


let div16 = document.querySelector('.div-16');
    let a = 50;

function t16() {
    div16.style.background = 'blue';
    div16.style.width = a + 'px';
    a++;
}

div16.onmousemove = t16;


function t17On() {
    div16.onmousemove = t16;
}
function t17Off() {
    div16.onmousemove = null;
}
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;


let div18 = document.querySelector('.div-18');

function t18() {
    let a = div18.offsetWidth;
    div18.innerHTML = a;
}

div18.onmouseenter = t18;


function t19() {
    let div19 = document.querySelector('.div-19');
    div19.innerHTML = div19.classList;
}

document.querySelector('.div-19').onmouseout = t19;


let prog = document.querySelector('progress');

function t20() {
    let a = prog.value;
    prog.value = a + 1;
}

prog.onmousemove = t20;