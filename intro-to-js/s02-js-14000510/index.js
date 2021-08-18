'use strict'
/*
// https://www.w3schools.com/js/js_strict.asp
const result = 15;
console.log(result);
*/

// Math
/*
const num = 2.1;
const result = Math.floor(num);
const result2 = Math.ceil(num);
console.log(result2);
*/
// const randomNumber = Math.random();
// console.log(randomNumber);


// const num =Math.floor(Math.random() * 6) + 1;

// console.log(num);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
/*
function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    return result
}
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
*/
// function declaration
// console.log(rollDice());
// function rollDice() {
// const result = Math.floor(Math.random() * 6) + 1;
// return result
// }

// function expression
/*
const rollDice = function () {
    const result = Math.floor(Math.random() * 6) + 1;
    return result
}
console.log(rollDice());
*/

// arrow functions
/*
const rollDice =  () => {
    return Math.floor(Math.random() * 6) + 1;
}
const rollDice =  () =>  Math.floor(Math.random() * 6) + 1;

console.log(rollDice());
*/

// comparesion opretors
// > >=  < <= 
// 12 > 0
// 'b' > 'a' // 'b'.charCodeAt(0) > 'b'.charCodeAt(0)
// == ===
// != !==


// conditionals
/*
const age = 15;
if (age > 0) {
    console.log('aa');
}

let a = null;
if(a){ // false

}
*/
// falsy: false 0 '' undefined null NaN

// const age = 20;
// if (age < 10) {
//     console.log('you are a child');
// }else if(age < 20){
//     console.log('you are young');
// }else{
//     console.log('you are something');
// }
/*
const detectStrings = (param) => {
    // return typeof param === 'string'
    if (typeof param === 'string') {
        return 'input is a str'
    } else {
        console.log('aaaaaaa');
        return 'input is a not str'\
    }


}

console.log(detectStrings('aaa'));
*/

// AND OR NOT
// const firstName = 'alireza';
// const age = 20;

// if(firstName === 'alireza'){
//     if(age === 20){
//         console.log('do something');
//     }
// }
// &&
// if(firstName === 'alireza' && age === 20){
//     console.log('do something');
// }

// ||
/*
if(firstName === 'alireza' || firstName === 'mehran'){
    console.log('do something');
}
*/
// !
/*
const isSummer = false;
if(!isSummer){
    console.log('go to school');
}
*/



// switch case
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
/*
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
} */


// loops
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
/*
 let num = 0;
 num = num + 1;
 num += 1
 num++;
 console.log(num);
*/

// for(let index = 0 ;index < 11  ; index++){
//     console.log(index);
// }

// for(let index = 10 ;index >=0  ; index--){
//     console.log(index);
// }

// const logNumbers = (n) => {
//     for (let i = 0; i < n; i = i + 2) {
//         console.log(i);
//     }
// }
/*
const logNumbers = (n) => {
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// break
// continue

logNumbers(14)
*/
/*
let i = 0
while(i<15){
    console.log(i);
    i = i + 5
    if(i === 10){
        break
    }
}
*/

/*
function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    return result
}

while(true){
    const result = rollDice();
    console.log(result);
    if(result === 6){
        break
    }
}

*/
/*
let i = 11 ;
do{
    console.log(i);
    i++
}while(i<10)

*/

// Objects
// const obj1 = {};
// console.log(obj1);
/*
const person = {
    firstName: 'alir',
    lastName: 'sada',
    age: 26,
    eat: function(){
        console.log('eat');
    },
    sleep(){
        console.log('sleep');
    }
}
person.gender = 'm'

// console.log(person);
console.log(person.age);
const ageOfAlire = person.age // get

person.age = 31; // set

person.address = 'mshd';
person['idNumber'] = 2056394;

person.walk = function(){
    console.log('walking');
}

person.walk();
person.sleep();

console.log(person);

*/
/*
const person = {
    firstName: 'alir',
    lastName: 'sada',
    age: 26,
}

console.log(person.hasOwnProperty('firstName'));
console.log(person.hasOwnProperty('log'));

console.log(person.city);

*/

// const person = {
//     firstName: 'alir',
//     lastName: 'sada',
//     age: 26,
// }

// for (const key in person) {
//     console.log(key);
//     console.log(person[key]);
// }

// pass by reference
/*
const obj1 = {};
const obj2 = obj1;

obj1.age = 15;

console.log(obj1 === obj2);
*/
// console.log(obj1);
// console.log(obj2);

// pass by value
/*
let str1 = 'aaaa';
let str2 = str1;
str1 = 'xxxxx';
console.log(str1);
console.log(str2);
*/

// copy objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// const obj1 = {lastName: 'aliaa'};
// const obj2 = Object.assign({},obj1);
// console.log(obj1,obj2, obj1 === obj2);

// spread
// const obj1 = {lastName: 'aliaa'};
// const obj2 = {...obj1}


















