function t1() {
    let i = 1;
    let out1 = document.querySelector('.out-1');
    while (i <= 50) {
        out1.innerHTML += i + ' ';
        i++;
    }
}

document.querySelector('.b-1').onclick = t1;

function t2() {
    let i = 2;
    let out2 = document.querySelector('.out-2');
    while (i <= 122) {
        out2.innerHTML += i + ' ';
        i = i + 2;
    }
}

document.querySelector('.b-2').onclick = t2;

function t3() {
    let i = 25;
    let out3 = document.querySelector('.out-3');
    while (i >= 7) {
        out3.innerHTML += i + ' ';
        i--;
    }
}

document.querySelector('.b-3').onclick = t3;

function t4() {
    let i = 77;
    let out4 = document.querySelector('.out-4');
    while (i >= 35) {
        out4.innerHTML += i + '_';
        i = i - 3;
    }
}

document.querySelector('.b-4').onclick = t4;

function t5() {
    let i = 1;
    let out5 = document.querySelector('.out-5');
    while (i <= 17) {
        if (i % 2 === 0) {
            out5.innerHTML += i + '_**';
        } else {
            out5.innerHTML += i + '_*';
        }
        i++;
    }
}

document.querySelector('.b-5').onclick = t5;

function t6() {
    let i = 0;
    let i6 = document.querySelector('.i-6').value;
    let out6 = document.querySelector('.out-6');
    while (i < i6) {
        let i1 = 0;
        while (i1 < 6) {
            out6.innerHTML += '*';
            i1++
        }
        out6.innerHTML += '<br>';
        i++;
    }
}

document.querySelector('.b-6').onclick = t6;

function t7() {
    let i7 = document.querySelector('.i-7').value;
    let i = i7;
    let out7 = document.querySelector('.out-7');
    while (i > 0) {
        out7.innerHTML += i + ' ';
        i--;
    }
}

document.querySelector('.b-7').onclick = t7;

let out8 = document.querySelector('.out-8');

function t8() {
    let i81 = document.querySelector('.i-81').value;
    let i82 = document.querySelector('.i-82').value;
    let i = i81;
    while (i <= i82) {
        out8.innerHTML += i + ' ';
        i++;
    }
}

document.querySelector('.b-8').onclick = t8;

function t9() {
    let out9 = document.querySelector('.out-9');
    let i91 = document.querySelector('.i-91').value;
    let i92 = document.querySelector('.i-92').value;
    let min = Math.min(i91, i92);
    let max = Math.max(i91, i92);
    while (min <= max) {
        out9.innerHTML += min + ' ';
        min++;
    }
}

document.querySelector('.b-9').onclick = t9;

function t10() {
    let out10 = document.querySelector('.out-10');
    let i = 1950;
    while (i <= 2000) {
        out10.innerHTML += i + ' ';
        i = i+2;
    }
}

document.querySelector('.b-10').onclick = t10;

function t11() {
    let arr = document.querySelectorAll('.div-11');
    let div111 = document.querySelector('.div-111');
    let i = 0;
    while (i < arr.length) {
        div111.innerHTML += arr[i].textContent + ' ';
        i++;
    }
}

document.querySelector('.b-11').onclick = t11;

function t12() {
    let arr = document.querySelectorAll('.div-12');
    let i = 0;
    while (i < arr.length) {
        arr[i].style.background = 'orange';
        i++;
    }
}

document.querySelector('.b-12').onclick = t12;

function t13() {
    let arr = document.querySelectorAll('.i-13');
    let i = 0;
    while (i < arr.length) {
        arr[i].value = i + 1;
        i++;
    }

}

document.querySelector('.b-13').onclick = t13;

function t14() {
    let arr = document.querySelectorAll('.i-14');
    let out14 = document.querySelector('.out-14');
    let i = 0;
    while (i < arr.length) {
        if (arr[i].checked) {
            out14.innerHTML += arr[i].value + ' ';
        }
        i++;
    }
}

document.querySelector('.b-14').onclick = t14;

function t15() {
    let out15 = document.querySelector('.out-15');
    let i = 10;
    while (i >= 0) {
        out15.innerHTML += i + ' ' + (10 - i) + ' ';
        i--;
    }
}

document.querySelector('.b-15').onclick = t15;