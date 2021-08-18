'use strict'

// try catch

// console.log('aaa');
// j++
// console.log('bbb');



// try {
//     console.log('aaa');
//     j++

// } catch (e) {
//     console.log(e);
// }

// console.log('bbb');






// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const num = Math.random()
//             if (num > 0.2) {
//                 resolve('here you response😎')
//             } else {
//                 reject('connection lost!!!')
//             }
//         }, 1000)
//     })
// };
 

// async await




// fakeRequest('http://sfds.com')
//     .then((res) => {
//         const response = res
//         console.log(response);
//     }).catch((e)=>{
//         console.log(e);
//     })

// https://javascript.info/async-await
// async function something() {
//     try {
//         // const response = await fakeRequest('htts://aaa.com')
//         // console.log('here >>>>', response);
//         const response1 = await fakeRequest('yahoo.com/user1')
//         const response2 = await fakeRequest('yahoo.com/user2')
//         const response3 = await fakeRequest('yahoo.com/user3')
//         console.log('here >>>> 🧐', response1,response2,response3);

//     } catch (e) {
//         console.log('WE HAVE ERROR',e);
//     }

// }

// something()




// http

// const req = new XMLHttpRequest();
// console.log(req);

// fetch

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         return res.json()
//     }).then((res) => {
//         console.log(res);
//         console.log('price    ', res.ticker.price);
//         document.write(`${res.ticker.price} $ `)
//     })
//     .catch(((e) => {
//         console.log('ERROR---> ', e);
//     }))

/* function getBtcPrice() {
    return fetch('https://api.cryptonator.com/api/ticker/btc-usd')
}

getBtcPrice()
    .then((res) => res.json())
    .then((res) => { console.log(res.ticker.price); })
    .catch((e) => console.log(e))
 */

/* const getBtcPrice = async () => {
    try {
        const result = await fetch('https://api.crysdsptonator.com/api/ticker/btc-usd')
        const res = await result.json();
        console.log(res.ticker.price);
    } catch (e) {
        console.log('ERROR ===> ', e);
    }

}
getBtcPrice() */

// const getPrice = async (name) => {
//     try {
//         const result = await fetch(`https://api.cryptonator.com/api/ticker/${name}-usd`)
//         const res = await result.json();
//         const price = res.ticker.price
//         return price
//     } catch (e) {
//         console.log('ERROR ===> ', e);
//     }
// }
// getPrice('doge').then((res)=>{
//     console.log('aaa',res);
// })

// axios
// console.log(axios);
// https://github.com/axios/axios
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log(res);
//         const result = res.data
//         console.log(result);
//     }).catch((e) => { console.log(e); })




// oop  Object Oriented Programming

// const person = {
//     name: '',
//     age: 0 ,
//     email: '',
//     sayYourName(){
//         console.log(' sd  ');
//     },
//     changeName(){
//         // ....
//     }
// }



/* const mosnter1 = {
    name: 'mikky',
    age: 205,
    attack(){
        console.log('attack!!!');
    }
}

const mosnter2 = {
    name: 'sally',
    age: 105,
    attack(){
        console.log('attack!!!');
    }
} */


// DRY

// factory function
/* function createMonster(name, age) {
    return {
        name: name,
        age: age,
        attack(){
            console.log('attack!!!');
        }
    }
}

const monster1 = createMonster('mikky',205)
const monster2 = createMonster('sally',105)

console.log(monster1);
console.log(monster2); */


// https://javascript.info/prototype-inheritance
// constructor functions
/*
function Monster(name, age){
    this.name = name;
    this.age = age;
}
Monster.prototype.attack = function(){
    console.log('attack!!!');
}
Monster.prototype.talk = function(){
    console.log(`${this.name} is talking  !!!`);
}
const monster1 = new Monster('mikky',205);
const monster2 = new Monster('sally',105);

// console.log(monster1);
// console.log(monster2);

// monster1.attack()
monster1.talk()


monster2.talk()
*/

/* class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`${this.name} is talking  !!!`);
    }
    attack(){
        console.log('attack!!!');
    }
}

const monster1 =  new Monster('mikky',205)
const monster2 =  new Monster('sally',105)

console.log(monster1,monster2); */


// https://javascript.info/classes
class Animal {
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        console.log(this);
        console.log(`my name is "${this.name}"`);
    }
}

const cat = new Animal('Tom');
// console.log(cat);
// cat.sayMyName()

class FlyingAnimal extends Animal {
    constructor(name,age){
        super(name)
        this.age = age;
    }
    fly(){
        console.log('yay im flying!!');
    }
    talk(){
        //
    }
}

const bird = new FlyingAnimal('kabootar',15)

console.log(bird);

bird.sayMyName();
bird.fly()










