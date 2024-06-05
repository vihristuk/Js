let out1 = document.querySelector('.out-1');
function f1() {
    out1.style.height = '40px';
    out1.style.width = '200px';
 }

 document.querySelector('.b-1').onclick = f1;

 let out2 = document.querySelector('.out-2');
 function f2() {
    out2.classList.add('bg-2');
 }
 
 document.querySelector('.b-2').onclick = f2;

 let out3 = document.querySelector('.out-3');
 function f3() {
    out3.classList.remove('bg-3');
 }
 
 document.querySelector('.b-3').onclick = f3;

 let out4 = document.querySelector('.out-4');
 function f4() {
    out4.classList.toggle('bg-4');
 }
 
 document.querySelector('.b-4').onclick = f4;

 let out5 = document.querySelector('.out-5');
 function f5() {
    return out5.innerHTML = out4.classList.contains('bg-4');
 }
 
 document.querySelector('.b-5').onclick = f5;

 let out6 = document.querySelector('.out-6');
 let p6 = document.querySelectorAll('.p-6');
 function f6() {
    out6.innerHTML = p6.length;
 }
 
document.querySelector('.b-6').onclick = f6;

let blocks7 = document.querySelectorAll('.out-7');

function f7() {
   let i = 0;
   while (i <= blocks7.length) {
      blocks7[i].classList.add('bg-7');
      i++;
   }
}

document.querySelector('.b-7').onclick = f7;

let blocks8 = document.querySelectorAll('.out-8');

function f8() {
   let i = 0;
   while (i <= blocks8.length) {
      blocks8[i].classList.toggle('bg-8');
      i++;
   }
}

document.querySelector('.b-8').onclick = f8;

function f9() {
   this.classList.add('bg-9');
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
   div9[i].onclick = f9;
}

let div10 = document.querySelectorAll('.out-10');
   console.log(div10.length);

function f10() {
   this.classList.toggle('bg-10');
}

for (let i = 0; i < div10.length; i++) {
   div10[i].onclick = f10;
}


let out11 = document.querySelector('.out-11');

function f11() {
   let a = document.createElement('div');
   a.innerHTML = '25';
   out11.appendChild(a);
}

document.querySelector('.b-11').onclick = f11;

let out12 = document.querySelector('.out-12');
function f12() {
   let a = document.createElement('div');
   a.innerHTML = '12';
   a.classList.add('bg-12');
   out12.appendChild(a);
}

document.querySelector('.b-12').onclick = f12;


let out13 = document.querySelector('.out-13');

function f13() {
   let a = document.createElement('div');
   a.innerHTML = 'pushMe';
   a.classList.add('bg-13');
   a.onclick = f13_1;
   out13.appendChild(a);
}

function f13_1() {
    document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}


document.querySelector('.b-13').onclick = f13;

let out14 = document.querySelector('.out-14');
function f14() {
   let a = document.createElement('div');
   a.innerHTML = '14';
   a.classList.add('bg-14');
   out14.prepend(a);
}

document.querySelector('.b-14').onclick = f14;

let out15 = document.querySelector('.out-15');

function f15() {
   let a = document.createElement('div');
   a.innerHTML = '15';
   a.classList.add('bg-15');
   out15.before(a);
}

document.querySelector('.b-15').onclick = f15;

let out16 = document.querySelector('.out-16');
function f16() {
   let a = document.createElement('div');
   a.innerHTML = '16';
   a.classList.add('bg-16');
   out16.after(a);
}

document.querySelector('.b-16').onclick = f16;

let out17 = document.querySelector('.out-17');
function f17() {
   let a = document.createElement('div');
   a.innerHTML = '17';
   a.classList.add('bg-17');
   out17.replaceWith(a);
}

document.querySelector('.b-17').onclick = f17;

let out18 = document.querySelector('.out-18');
let p18 = document.querySelector('.p-18');
function f18() {
   out18.innerHTML = p18.getAttribute('data-b');
}

document.querySelector('.b-18').onclick = f18;

let out19 = document.querySelector('.out-19');
let p19 = document.querySelectorAll('.p-19');

function f19() {
   for (i = 0; i < p19.length; i++) {
      out19.innerHTML += p19[i].getAttribute('data-b') + ' ';
   }
}

document.querySelector('.b-19').onclick = f19;


let out20 = document.querySelector('.out-20');
function f20() {
   out20.setAttribute('title', 'go');
}

document.querySelector('.b-20').onclick = f20;