let a1 = [5,7,9, 11, 13, 15];

function f1() {
    let out1 = document.querySelector('.out-1');
    for (let i = 0; i < a1.length; i++) {
        out1.innerHTML += a1[i] + ' ';
    }
}

document.querySelector('.b-1').addEventListener('click', f1);


let a2 = [5,7,9, 11, 13, 15];

function f2() {
    let out2 = document.querySelector('.out-2');
    for (let i = 0; i < a2.length; i++) {
        out2.innerHTML += a2.indexOf(a2[i]) + ' ' + a2[i] + ' ';
    }
}

document.querySelector('.b-2').addEventListener('click', f2);


function f3() {
    let out3 = document.getElementsByClassName('out-3');
    console.log(out3);
    for (let item of out3) {
        item.innerHTML = 3;
    }
}

document.querySelector('.b-3').addEventListener('click', f3);



function f4() {
    let out4 = document.querySelectorAll('.out-4');
    for (let item of out4) {
        item.innerHTML = 4;
    }
}

document.querySelector('.b-4').addEventListener('click', f4);



let a5 = [3,4,5,2,1,7,8,2,4,6,8,11,23,17];

function f5() {
    let a51 = [];
    for (let item of a5) {
        if (item > 7) {
            a51.push(item);
            console.log(a51);
        }
    }
    return a51;
}

document.querySelector('.b-5').addEventListener('click', ()=> {
    document.querySelector('.out-5').innerHTML = f5();
});



let a6 = [[1,2], [3,4], [5,6]];

function f6() {
    let out6 = document.querySelector('.out-6');
    let arr6 = [];
    for (let j = 0; j < a6.length; j++) {
        for (let i = 0; i < a6[j].length; i++) {
            out6.innerHTML += a6[j][i] + ' ';
        }
    }
    
}

document.querySelector('.b-6').addEventListener('click', f6);


let a7 = [{ id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f7() {
    const result = {};

    for (const obj of a7) {
        result[obj.id] = obj.name;
    }

    return result;
}

document.querySelector('.b-7').addEventListener('click', ()=>{
    console.log(f7());
});


let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f8() {
    let result = [];
    for (let item of a8) {
        result.push(item.id);
    }
    return result;
}

document.querySelector('.b-8').addEventListener('click', ()=>{
    console.log(f8());
});


let a9 = [ [4,3,2], [2,5], [0,0,0,0,0]];

function f9() {
    let maxIndex = -1;
    for (let arr of a9) {
        const maxArrIndex = arr.length - 1;
        if (maxArrIndex > maxIndex) {
            maxIndex = maxArrIndex;
        }
    }
    return maxIndex;
}

document.querySelector('.b-9').addEventListener('click', ()=>{
    document.querySelector('.out-9').innerHTML = f9();
});


let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let obj = {};
    for (let item of a10) {
        obj[item] = item;
    }
    return obj;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});


let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

function f11() {
    let out11 = document.querySelector('.out-11');
    for (let key in a11) {
        if (a11[key] > 10) {
            out11.innerHTML += a11[key] + ' ';
        }
    }
}

document.querySelector('.b-11').addEventListener('click', f11);



let a12 = [4,5,6,7];

function f12() {
    let out12 = document.querySelector('.out-12');
    for (let value of a12) {
        out12.innerHTML += value + ' ';
    }
}

document.querySelector('.b-12').addEventListener('click', f12);


let a13 = 'testone';

function f13() {
    let out13 = document.querySelector('.out-13');
    for (let symbol of a13) {
        out13.innerHTML += symbol + ' ';
    }
}

document.querySelector('.b-13').addEventListener('click', f13);


let a14 = new Set([4,5,6]);

function f14() {
    let out14 = document.querySelector('.out-14');
    for (let item of a14) {
        out14.innerHTML += item + ' ';
    }
}

document.querySelector('.b-14').addEventListener('click', f14);


function f15() {
    let out15 = document.querySelectorAll('.out-15');
    for (let item of out15){
        item.innerHTML = 15;
    }
}

document.querySelector('.b-15').addEventListener('click', f15);