let a1_res = [], a2_res = [], a3_res = [], a4_res = [], a5_res = [], a6_res = [], a7_res = [], a8_res, a9_res = '', a10_res = '';

function t1() {
    let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    a1.forEach(elem => {
        a1_res.push(elem * 2);
    });
    document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').onclick = t1;


function t2() {
    let a2 = [2,3,4,5,10,11,12];
    a2.forEach(elem => {
        a2_res.push(elem / 2);
    });
    document.querySelector('.out-2').innerHTML = a2_res;
    return console.log(a2_res);
}

document.querySelector('.b-2').onclick = t2;


function t3() {
    let a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];
    a3.forEach(elem => {
        if (typeof elem === 'number') {
            a3_res.push(elem);
        }
    });
    document.querySelector('.out-3').innerHTML = a3_res;
}

document.querySelector('.b-3').onclick = t3;


function t4() {
    let a4 = document.querySelectorAll('.task-4');
    a4.forEach(elem => {
        a4_res.push(elem.dataset.attr);
    });
    document.querySelector('.out-4').innerHTML = a4_res;
}

document.querySelector('.b-4').onclick = t4;


function t5() {
    a5_res.push(this.dataset.attr);
    return console.log(a5_res);
}

document.querySelectorAll('.task-5').forEach(elem => {
    elem.onclick = t5;
});


let str6 = 'helloworld';
let out6 = document.querySelector('.out-6');

function t6() {
    a6_res = str6.split();
    out6.innerHTML = a6_res;
}

document.querySelector('.b-6').onclick = t6;


let str7='hello world hi mazai';
let out7 = document.querySelector('.out-7');

function t7() {
    a7_res = str7.split(' ');
    out7.innerHTML = a7_res;
    console.log(a7_res);
}

document.querySelector('.b-7').onclick = t7;


let a8 = [1,2,66,77,15];
let out8 = document.querySelector('.out-8');

function t8() {
    a8_res = a8.join('-');
    out8.innerHTML = a8_res;
}

document.querySelector('.b-8').onclick = t8;


let a9 = [['hi', 'mahai'], ['test', 'best']];
let out9 = document.querySelector('.out-9');

function t9() {
    a9_res = a9.map(array => array.join('-')).join('-');
    out9.innerHTML = a9_res;
    console.log(a9_res);
}

document.querySelector('.b-9').onclick = t9;


let a10 = {name: 'ivan', age: 15, sex: 1, id: 45};
let out10 = document.querySelector('.out-10');

function t10() {
    for (let key in a10) {
        a10_res += key + '=' + a10[key] + '&';
    }
    out10.textContent = a10_res;
}

document.querySelector('.b-10').onclick = t10;