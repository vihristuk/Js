let out1 = document.querySelector('.out-1');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        out1.innerHTML += '*';
    }
    out1.innerHTML += '_';
}

let out2 = document.querySelector('.out-2');

for (let i = 1; i <= 3; i++) {
    out2.innerHTML += i + '<br>';
    for (let j = 0; j < 3; j++) {
        out2.innerHTML += '*_';
    }
        out2.innerHTML += '<br>'
}

let out3 = document.querySelector('.out-3');

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j < 3; j++) {
        out3.innerHTML += '*_';
    }
        out3.innerHTML += '<br>'
}

let out4 = document.querySelector('.out-4');

for (let i = 1; i <= 3; i++) {
    out4.innerHTML += i + '_';
    for (let j = 1; j < 6; j++) {
        out4.innerHTML += j + ' ';
    }
}

let out5 = document.querySelector('.out-5');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
        if (j % 2 == 0) {
            out5.innerHTML += 1;
        } else {
            out5.innerHTML += 0;
        }
    }
    out5.innerHTML += '<br>';
}

let out6 = document.querySelector('.out-6');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
        if (j === 2 || j === 5) {
            out6.innerHTML += 'x';
        } else if (j === 0 || j === 4) {
            out6.innerHTML += 1;
        } else {
            out6.innerHTML += 0;
        }
    }
    out6.innerHTML += '<br>';
}

let out7 = document.querySelector('.out-7');

for (let i = 1; i < 5; i++) {
    for (let j = 1; j <= i; j++) {
        out7.innerHTML += '*';
    }
    out7.innerHTML += '<br>';
}

let out8 = document.querySelector('.out-8');

for (let i = 6; i > 1; i--) {
    for (let j = 1; j < i; j++) {
        out8.innerHTML += '*';
    }
    out8.innerHTML += '<br>';
}

let out9 = document.querySelector('.out-9');

for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) {
        out9.innerHTML += j + ' ';
    }
    out9.innerHTML += '<br>';
}

let out10 = document.querySelector('.out-10');

for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 10; j++) {
        if (j < 10) {
            let a = String(i);
            out10.innerHTML += a + j + ' ';
        } else {
            out10.innerHTML += i + 1 + '0';
        }
        
    }
    out10.innerHTML += '<br>';
}

let out11 = document.querySelector('.out-11');

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        out11.innerHTML += `${i}*${j}=${i * j}<br>`;
    }
    out11.innerHTML += '<hr>';
} 

let out12 = document.querySelector('.out-12');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        out12.innerHTML += '*';
    }
    out12.innerHTML += '<br>';
}

let out13 = document.querySelector('.out-13');

for (let i = 1; i < 6; i++) {
    for (j = 5; j >= i; j--) {
        out13.innerHTML += '*';
    }
    out13.innerHTML += '<br>';
}

let out14 = document.querySelector('.out-14');

for (let i = 0; i < 3; i++) {
        if (i === 0) {
            out14.innerHTML += '&nbsp;&nbsp;';
        } else if (i === 1) {
            out14.innerHTML += '&nbsp;';
        }
    for (let j = 0; j < 5; j++) {
        out14.innerHTML += '*';
    }
    out14.innerHTML += '<br>';
}

let out15 = document.querySelector('.out-15');

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 1; j++) {
        if (i === 0 || i === 4) {
            out15.innerHTML += '*';
        } else if (i === 1 || i === 3) {
            out15.innerHTML += '**';
        } else {
            out15.innerHTML += '***'
        }
    }
    out15.innerHTML += '<br>';
}

let out16 = document.querySelector('.out-16');

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
        if (i === 0 || i === 4 || j === 0 || j === 5) {
            out16.innerHTML += '*';
        } else {
            out16.innerHTML += '&nbsp;&nbsp;&nbsp;';
        }
    }
    out16.innerHTML += '<br>';
}

let out17 = document.querySelector('.out-17');

for (let i = 6; i > 1; i--) {
    for (let j = i - 1; j > 0; j--) {
        out17.innerHTML += j + ' ';
    }
    out17.innerHTML += '<br>';
}

let out18 = document.querySelector('.out-18');

for (let i = 1; i < 6; i++) {
    for (let j = 5; j > 0; j--) {
        if (j > i) {
        out18.innerHTML += '&nbsp;&nbsp;&nbsp;';
        } else {
            out18.innerHTML += j + ' ';
        }
    }
    out18.innerHTML += '<br>';
}

let out19 = document.querySelector('.out-19');

for (let i = 1; i < 6; i++) {
    for (let j = 5; j > 0; j--) {
        if (j > i) {
        out19.innerHTML += 'x ';
        } else {
            out19.innerHTML += j + ' ';
        }
    }
    out19.innerHTML += '<br>';
}

let out20 = document.querySelector('.out-20');

for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
        if (j <= i) {
            out20.innerHTML += i + ' ';
        }
    }
    out20.innerHTML += '<br>';
}

let out21 = document.querySelector('.out-21');

for (let i = 5; i > 0; i--) {
    for (let j = 1; j < 6; j++) {
        if (j >= i && i % 2 === 0) {
            out21.innerHTML += 'x ';
        } else if (j >= i) {
            out21.innerHTML += i + ' ';
        }
    }
    out21.innerHTML += '<br>';
}

let out22 = document.querySelector('.out-22');

for (let i = 1; i <= 3; i++) {
    if (i === 1) {
        out22.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
    } else if (i === 2) {
        out22.innerHTML += '&nbsp;&nbsp;';
    }
    for (let j = 1; j <= i*2+3; j++) {
        out22.innerHTML += '*';
    }
    out22.innerHTML += '<br>';
}

let out23 = document.querySelector('.out-23');

for (let i = 1; i < 4; i++) {
    if (i === 1) {
        out23.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
    } else if (i === 2) {
        out23.innerHTML += '&nbsp;&nbsp;';
    }
    for (j = 1; j <= i*2; j++) {
        out23.innerHTML += '*';
    }
    out23.innerHTML += '<br>';
}

for (let i = 2; i > 0; i--) {
    if (i === 1) {
        out23.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
    } else {
        out23.innerHTML += '&nbsp;&nbsp;';
    }
    for (j = 1; j <= i*2; j++) {
        out23.innerHTML += '*';
    }
    out23.innerHTML += '<br>';
}