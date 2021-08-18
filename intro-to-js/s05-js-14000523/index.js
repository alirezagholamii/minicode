'use strict'

// global scope
/* let name = 'omid';

const obj = {};

function funA(){
    // local scope
    let user = 'ali'
    console.log(user);
    function funB(){
        // scope chainig
        console.log(user);
    }
    funB()
}

funA(); */


// function scope
/* function funC() {
    if (true) {

        var username = 'zzz';

    }

    console.log(username);

}
funC() */


// block scope
/* function funC() {
    if (true) {
        let username = 'zzz';
        const username2 = 'zzz';
    }
    console.log(username);

}
funC() */



// window

// function log(){
//     console.log('hi');
// }

// const result = window.parseInt('122222')
// console.log(result);


// console.log(globalThis === window);

// in node
// global    globalThis === global


// this keyword

// console.log(this);
// console.log(window === this);

// function func(){
//     console.log(this);
// }

// func()
// in function
/* const objA = {
    username: 'reza',
    age: 15,
    logSomething(){
        console.log(this);
        // console.log(`hi, ${this.username} `);
    }
}

objA.logSomething() */
// console.log(objA.logSomething());


// in arrow functions
// const objA = {
//     username: 'reza',
//     age: 15,
//     logSomething:()=>{
//         console.log(this);
//         console.log(`hi, ${this.username} `);
//     }
// }

// objA.logSomething()



// alert

// function sayHi(){
//     alert('HIIIIIIIIIIII')
// }
// sayHi()

// prompt
// const str = prompt('How old are you?',50)
// console.log(str);

// confirm
// const isAgreed = confirm('im a good person')
// console.log(isAgreed);


// setTimeout
// console.log('11111111');
// setTimeout(()=>{
//     console.log('logged after 5 secends');
// },500)
// console.log('22222222222');


// setInterval

// function logHi(){
//     console.log('hi');
// } 
// setInterval(logHi,1000);



// function logHi() {
//     console.log('hi');
// }
// const interval = setInterval(logHi, 1000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000);

// const date = new Date();

// console.log(date);
// console.log(typeof date);
// console.log(date.getHours(),date.getMinutes(),date.getSeconds());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleDateString('fa-ir'));

// function logTime() {
//     console.clear();
//     const date = new Date();
//     console.log(date.toLocaleTimeString());
// }
// const interval = setInterval(logTime, 1000);



// let i = 0;
// const intervalId = setInterval(()=>{
//     console.log('hiiiii');
//     i++
//     if(i === 10){
//         clearInterval(intervalId)
//     }
// },1000)



// DOM
// console.dir(document);

// Selecting

// const element = document.getElementById('para');

// const element = document.getElementsByClassName('list');

// const element = document.getElementsByTagName('p');

// const element = document.querySelector('p');
// const element = document.querySelector('#para');
// const element = document.querySelector('.list');
// const element = document.querySelector('div p');

// const element = document.querySelectorAll('div');
// console.log(element);

// Manipulating

// const element = document.querySelector('#para');

// console.log(element.innerText); 
// element.innerText = '*******'

// element.innerHTML = '<ul><li>aa</li></ul>'


/* 
const element = document.querySelector('div p');

console.log(element);

console.log(element.getAttribute('id'));

element.setAttribute('id','para2000');

console.log(element.getAttribute('id')); */


// const elem = document.querySelector('#para');

// console.log(elem.style.fontSize);

// elem.style.backgroundColor = 'green'
// elem.style.fontSize = '40px'


/* const element = document.querySelector('div');

console.log(element.classList);

element.classList.add('oioioio');

element.classList.remove('auth');

element.classList.toggle('auth'); */

// const elem = document.querySelector('#para');

// console.log(elem);
/* const parentEl = elem.parentElement
console.log(parentEl); */
/* 
const children = elem.children;
console.log(children); */



// const newElement =  document.createElement('p');
// const newElement2 =  document.createElement('span');

// newElement.innerText = 'something';
// newElement.innerHTML = '<p></p>';


/* newElement2.innerText = 'HI IIIIII'
newElement.appendChild(newElement2)

const pTag = document.querySelectorAll('.list')[1];
console.log(pTag);

pTag.appendChild(newElement) */

// console.log(newElement);


// const pTag = document.querySelectorAll('.list')[1];
// console.log(pTag);

// pTag.append('  8888888888')



// removeChild
// const element  = document.querySelector('#para');
// const parentEl = element.parentElement;
// parentEl.removeChild(element);


// remove()
// const element  = document.querySelector('#para');
// element.remove()



// events
// const btn = document.querySelector('button')
// console.log(btn);

/* const handleEvent = function(){
    console.log('clicked');
};
btn.addEventListener('click',handleEvent) */

/* btn.addEventListener('click',function(){
    console.log('clicked');
})

const p = document.querySelector('#para')
p.addEventListener('mouseenter',function(){
    console.log('PPPP mouseenter hereeee');
})
p.addEventListener('dblclick',function(){
    console.log('XOXISIKKSJSJSJ');
})

// https://developer.mozilla.org/en-US/docs/Web/Events

 */


// const bodyEl = document.querySelector('body');

// bodyEl.addEventListener('keydown',function(event){
//     console.log(event.code, event.key);
// })

/* const input =  document.querySelector('#filter');

input.addEventListener('input',(event)=>{
    console.log(event.target.value);

    document.querySelector('#result').innerHTML = event.target.value;
})
 */
/*
 const ul = document.querySelector('ul');
 console.log(ul.children);

 for(const elem of ul.children){
     elem.addEventListener('click',function(){
         console.log('aaaa');
     })
 }
 */


// const elem  = document.querySelector('#para');
// 0-255
// elem.style.backgroundColor = 'rgb(200,50,50)'



