let b1 = document.querySelector('.b-1');

b1.onclick = () => {
    alert('Task 1');
}

let b2 = document.querySelector('.b-2');

b2.onclick = () => {
    alert('Task 2');
}

let p3 = document.querySelector('.p-3');

p3.onclick = () => {
    alert('Task 3');
}

let i4 = document.querySelector('.i-4');
let b4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

b4.onclick = function () {
    if (i4.checked) {
        out4.innerHTML = 'true';
    } else {
        out4.innerHTML = 'false';
    }
}

let i5 = document.querySelector('.i-5');
let b5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');

b5.onclick = () => {
    if (i5.checked) {
        out5.innerHTML = i5.value;
    } else {
        out5.innerHTML = 'false';
    }
}

let i6 = document.querySelector('.i-6');
let b6 = document.querySelector('.b-6');
let out6 = document.querySelector('.out-6');

b6.onclick = () => {
    out6.innerHTML = i6.value;
}

let i7 = document.querySelector('.i-7');
let b7 = document.querySelector('.b-7');
let out7 = document.querySelector('.out-7');
let out72 = document.querySelector('.out-72');

b7.onclick = () => {
    out7.innerHTML = i7.value;
    let a = i7.value.length;
    console.log(a);
    if (a >= 6) {
        out72.innerHTML = 1;
    } else {
        out72.innerHTML = 0;
    }
}

let out8 = document.querySelector('.out-8');
let b8 = document.querySelector('.b-8');

b8.onclick = () => {
    out8.innerHTML = '<input type="text" class="i-81"><button class="b-81">button</button>'
    let b81 = document.querySelector('.b-81');
    let i81 = document.querySelector('.i-81');
    let out81 = document.querySelector('.out-81');
    b81.onclick = function f81 () {
        out81.innerHTML = i81.value;
    }
}

let r9 = document.querySelector('.r-9');
let b9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');

b9.onclick = () => {
    let a = r9.value;
    if (r9.checked) {
        out9.innerHTML = a;
    } else {
        out9.innerHTML = 0;
    }
}

let i10 = document.querySelector('.i-10');
let b10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');

b10.onclick = () => {
    out10.style.background = i10.value;
}

let i111 = document.querySelector('.color-111');
let i112 = document.querySelector('.color-112');
let b11 = document.querySelector('.b-11');

b11.onclick = () => {
    let a = i111.value;
    console.log(a);
    i112.value = a;
}

let i12 = document.querySelector('.i-12');
let b12 = document.querySelector('.b-12');
let out12 = document.querySelector('.out-12');

b12.onclick = () => {
    out12.innerHTML = i12.value;
}

let i13 = document.querySelector('.i-13');
let out13 = document.querySelector('.out-13');

i13.oninput = () => {
    let a = i13.value;
    out13.innerHTML = a;
}

let t14 = document.querySelector('.t-14');
let b14 = document.querySelector('.b-14');
let out14 = document.querySelector('.out-14');

b14.onclick = () => {
    out14.innerHTML = t14.value;
}

let t15 = document.querySelector('.t-15');
let i15 = document.querySelector('.i-15');
let b15 = document.querySelector('.b-15');
let out15 = document.querySelector('.out-15');

b15.onclick = () => {
    t15.value = i15.value;
    out15.innerHTML = i15.value;
}

let s16 = document.querySelector('.s-16');
let b16 = document.querySelector('.b-16');
let out16 = document.querySelector('.out-16');

b16.onclick = () => {
    out16.innerHTML = s16.value;
}

let s17 = document.querySelector('.s-17');
let out17 = document.querySelector('.out-17');

s17.onchange = function f17 () {
    out17.innerHTML = s17.value;
}

let s18 = document.querySelector('.s-18');
let i18 = document.querySelector('.i-18');

s18.onchange = function f18 () {
    i18.value = s18.value;
}

let i191 = document.querySelector('.i-191');
let i192 = document.querySelector('.i-192');
let b19 = document.querySelector('.b-19');
let out19 = document.querySelector('.out-19');

b19.onclick = function () {
    let a = i191.value;
    let b = i192.value;
    out19.innerHTML = a + ' ' + b;
}

let form = document.forms[1];
let i20 = form.elements.i200;
let i201 = form.elements.i2001;
let b20 = document.querySelector('.b-20');
let out20 = document.querySelector('.out-20');

b20.onclick = () => {
    out20.innerHTML = i20.value + ' ' + i201.value;
}