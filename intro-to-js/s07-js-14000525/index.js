'use strict'
// call stack  & memory heap

// LIFO

// js is single threaded language 
/* function multiply (x,y){
    return x * y
}
function square (x){
    return multiply(x,x)
}

// 3 4 5 >>>>>>  9 + 16  === 25

function isRightTriangle(a,b,c){
     return square(a) + square(b)  === square(c)
}
const logSome = () =>{ console.log('HIIIIIIII');}


console.log('before    *********');
const result = isRightTriangle(3,80,5)
console.log('after    ********@@@@@*');
logSome() */

//call stack
// isRightTriangle

//call stack

// square
// isRightTriangle


//call stack

// multiply
// square
// isRightTriangle



//call stack

// square
// isRightTriangle

//call stack

// isRightTriangle



//call stack

// // js is single threaded language can be non-blocking

// async

// const logSome = (param) =>{ console.log(param);}


// logSome('HIII')
// setTimeout(()=>{console.log('inside timeout');},0);
// logSome('BYE')

// call stack
// Event loop & callback queue

// callback queue

// Event loop


/*
// stack overflow
// function doSomething(){
//     doSomething()
// }

// doSomething()

//call stack

// doSomething


//call stack

// doSomething
// doSomething
*/







// callback hell

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "blue";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "grey";
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)



// const changeColor = (color, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color
//         if (doNext) {
//             doNext()
//         }

//     }, delay)
// }

// callback hell
// changeColor('red', 1000, () => {
//     changeColor('blue', 1000,()=>{
//         changeColor('orange',1000,()=>{
//             changeColor('grey',1000,()=>{
//                 changeColor('khaki',1000)
//             })
//         })
//     })
// })


// Promise

// pending
// fulfilled
// rejected
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve()
//     },5000)
// })

/* const headOrTail = (f1, f2) => {
    const result = Math.random() > 0.5 ? 'Head' : 'Tail';
    if (result === 'Head') {
        f1()
    } else {
        f2()
    }
}
const success = () => { console.log('yaaaaaay'); }
const fail = () => { console.log('ohhhh');}


headOrTail(success,fail) */
/*
const headOrTailPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random() > 0.5 ? 'Head' : 'Tail';
            if (result === 'Head') {
                resolve('BE HAPPY ☺')
            } else {
                reject( new Error('dddddd'))
            }
        }, 1000)
    })
}


console.log('aaa');
headOrTailPromise().then((res)=>{
    console.log('you win');
    console.log(res);

}).catch((e)=>{
    console.log('OH NO');
    console.log(e);
})
console.log('bbb');
*/

/* const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random()
            if (num > 0.2) {
                resolve('here you respons😎')
            } else {
                reject('connection lost!!!')
            }
        }, 1000)
    })
}; */

// X
// fakeRequest('yahoo.com/user1')
//     .then((res) => {
//         console.log('inside then>>>>', res);
//         document.write(res)
//         fakeRequest('yahoo.com/user2')
//             .then((res2) => {
//                 console.log('then two', res2);
//                 fakeRequest('yahoo.com/user3')
//                     .then((res3) => {
//                         console.log('res3', res);
//                     })
//             }).catch((e) => {
//                 console.log('catchhhhh', e);
//             })
//     })
//     .catch((e) => {
//         console.log('we have an error', e);
//     })


/*
fakeRequest('yahoo.com/user1')
    .then((res) => {
        console.log('inside then>>>>', res);
        document.write(res);
        return fakeRequest('yahoo.com/user2')
    })
    .then((res) => {
        console.log('user2', res);
        return fakeRequest('yahoo.com/user3')
    })
    .then((res) => {
        console.log('user3', res);
    })
    .catch((e) => {
        console.log('we have an error', e);
    })
*/



// links 

// Loupe
// http://latentflip.com/loupe/?code=Cgpjb25zb2xlLmxvZygiSGkhIik7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygiQ2xpY2sgdGhlIGJ1dHRvbiEiKTsKfSwgNTAwMCk7Cgpjb25zb2xlLmxvZygiV2VsY29tZSB0byBsb3VwZS4iKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


// How Does Javascript Work?
//https://www.youtube.com/watch?v=hGSHfObcVf4