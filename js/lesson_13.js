function f1() {
    let a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    document.querySelector('.out-1').innerHTML = a1.two;
    //return ...
}

document.querySelector('.b-1').onclick = f1;


function f2() {
    let a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };

    return a2.five;
}

document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = f2();
}


function f3() {
    let a3 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };
    return '&nbsp;' + a3.odd;
}

document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = f3();
}


let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};
function f4() {
    let out = ' ';
    for (let key in a4) {
        out += key + ' ' + a4[key] + ' <br>';
    }
    return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}

function f5(arr, block) {
    let out = '';
    for (let key in arr) {
        out += `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML = out;
}

// давайте протестируем f5

document.querySelector('.b-5').onclick = () => {
    let a5 = {
        "one": 1,
        "two": 2
    }
    f5(a5, '.out-5');
}

let a6 = {
    "b": 17,
    "e": 22
};

function f6() {
    let key = document.querySelector('.i-61').value;
    let value = document.querySelector('.i-62').value;
    a6[key] = value;
    f5(a6, '.out-6');
}

document.querySelector('.b-6').onclick = f6;

let a7 = {
    "b": 17,
    "e": 22
};

function f7() {
    let key = document.querySelector('.i-7').value;
    let out7 = document.querySelector('.out-7');
    if ([key] in a7) {
        out7.innerHTML = 1;
    } else {
        out7.innerHTML = 0;
    }
}

document.querySelector('.b-7').onclick = f7;

let a8 = {
    "b": 17,
    "e": 22
};

function f8() {
    let key = document.querySelector('.i-8').value;
    let out8 = document.querySelector('.out-8');
    if ([key] in a8) {
        out8.innerHTML = a8[key];
    } else {
        out8.innerHTML = 0;
    }
}

document.querySelector('.b-8').onclick = f8;

let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9() {
    let out9 = document.querySelector('.out-9');
    for (let key in a9) {
        let value = document.querySelector('.i-9').value;
        if (a9[key] == value) {
            out9.innerHTML += key + ' ';
        } else {
            out9.innerHTML += '';
        }
      }
}

document.querySelector('.b-9').onclick = f9;

function f10(arr, val) {
    for (let key in arr) {
        if (arr[key] === val) {
            return true;
        } else {
            return false;
        }
    }
}

document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.out-10').innerHTML = f10(a10, 23);
};

let a11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f11() {
    let value = document.querySelector('.i-11').value;
    delete a11[value];
    f5(a11, '.out-11');
}

document.querySelector('.b-11').onclick = f11;

let a12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 17,
};

function f12() {
    for (let key in a12) {
        let value = document.querySelector('.i-12').value;
        if (a12[key] == value) {
            delete a12[key];
        }
    }
    f5(a12, '.out-12');
}

document.querySelector('.b-12').onclick = f12;

let a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

function f13() {
    let out13 = document.querySelector('.out-13');
    for (let key in a13) {
        if (a13[key] )
        out13.innerHTML += a13[key] + ' ';
    }
}

document.querySelector('.b-13').onclick = f13;

let a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f14() {
    let out14 = document.querySelector('.out-14');
    for (let key in a14) {
        out14.innerHTML += a14[key][0] + ' ';
    }
}

document.querySelector('.b-14').onclick = f14;

let a15 = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f15() {
    let out15 = document.querySelector('.out-15');
    for (let key in a15) {
        let array = a15[key];
        for (let i = 0; i < array.length; i++) {
            out15.innerHTML += array[i] + ' ';
        }
    }
}

document.querySelector('.b-15').onclick = f15;

let a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f16() {
    let out16 = document.querySelector('.out-16');
    for (let key in a16) {
        out16.innerHTML += a16[key].name + ' ';
    }
}

document.querySelector('.b-16').onclick = f16;

let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f17() {
    let out17 = document.querySelector('.out-17');
    for (let key in a17) {
        if (a17[key].age > 30) {
            out17.innerHTML += a17[key].name + ' ';
        }
    }
}

document.querySelector('.b-17').onclick = f17;

let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f18() {
    let out18 = document.querySelector('.out-18');
    let i18 = document.querySelector('.i-18').value;
    out18.innerHTML = a18[i18].join(' ');
}

document.querySelector('.b-18').onclick = f18;

let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {
    let out19 = document.querySelector('.out-19');
    let i19 = document.querySelector('.i-19').value;
    for (let key in a19) {
        let array = a19[key];
        console.log(array);
        for (let i = 0; i < array.length; i++) {
            if (array[i].toLowerCase() == i19.toLowerCase()) {
                out19.innerHTML += key;
                console.log(array[i]);
            } else {
                out19.innerHTML += ' ';
                console.log(array[i]);
            }
        }
    }
}

document.querySelector('.b-19').onclick = f19;

let a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}

function f20() {
    let out20 = document.querySelector('.out-20');
    for (let key in a20) {
        let array = a20[key];
        for (let i = 0; i < array.length; i++) {
            if (array[i][1] === 2) {
                out20.innerHTML += array[i][0] + ' ';
            }
        }
    }
}

document.querySelector('.b-20').onclick = f20