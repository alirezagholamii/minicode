'use strict'

//sources

// https://developer.mozilla.org/en-US/
// https://javascript.info/
// https://www.w3schools.com/js/


/*
Primitive data types
*/

// Number

// 12
// 12.5
// -5
// NaN
// console.log(typeof 8989);

// Variables
// let
// var ❌🙄
/*
let pi =89;
console.log(pi);
pi = 12;
let num = 2005;

console.log(pi , num)
*/
// const
// const age = 25;
// console.log(age);

// let name;

//camelCase
// let firstName;
// const name = 'alireza'

//SNAKE_CASE
// const GOOGLE_URL = 'www.google.com'

// kebab-case


// Boolean
/*
let isSunday = true;
isSunday = false;

console.log(isSunday);
console.log(typeof isSunday);
*/


// String
/*
const firstName = 'alireza';
const char = firstName[1];

console.log(firstName);
console.log(char);
console.log(typeof firstName);

console.log(firstName.length,typeof firstName.length);

console.log(firstName.toUpperCase());
*/

// escaping string in javascript
// const lastName = 'me\'hrani';
/*
const firstName = 'kian';
const lastName = 'mehrani';
const surName = firstName + ' ' + lastName;
// toUpperCase
const upper = surName.toUpperCase();
console.log('upper>>>',upper);

// toLowerCase
const lower = upper.toLowerCase();

console.log('lower>>>',lower);


console.log('surName>>>>',surName);
*/

// trim
/*
const name2 = '        alireza ';
const name3 = name2.trim()
console.log(name2.length);
console.log(name3.length);
*/

// console.log(lastName);

// chaining methods
// console.log(name2.trim().toUpperCase().toLowerCase());



// indexOf
/*
const firstName = 'mehranmmmm';
console.log(firstName.indexOf('m'));
console.log(firstName.indexOf('mehran2'));
*/

//includes
/*
const firstName2 = 'omid';
console.log(firstName2.includes('xomid'));
console.log(firstName2.includes('omid'));
*/

// slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
/*
const surName = "alireza gholami";
const something = surName.slice(8);
console.log(something);

const firstName = surName.slice(0,7)
console.log(firstName,firstName.length);
*/

// concat
/*
const a = 'aaa';
const b = 'bbb';
const c = 'ccc';

// const sum = a + b + c
const sum = a.concat(b,c)
console.log(sum);
*/

// split
/*
const str = 'im sdkasdjn jhsd lasd dsf afdsa fdf';
const str2 = 'ab,12,i8,df';
console.log(str.split());

console.log(str.split(''));

console.log(str.split(' '));

console.log(str2.split(','));
*/

//replace
/*
const str = 'mehran omidi';
const str2 = str.replace('m','x');
const str2 = str.replace(/m/g,'x');
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
console.log(str2);
*/

// replaceAll
/*
const str = 'mehran omidi';
const str3 = str.replaceAll('m','x');
console.log(str3);
*/

// repeat
/*
const str = 'rr ';
const str2 = str.repeat(50);
console.log(str2 , str2.length);
*/


// string template literals
/*
const str1 = 'aaa';
const str2 = 'bbb';
const str3 = 'ZX ' + str1 + ' OOPO ' + str2;
console.log(str3);

const str4 = `ZX ${str1} OOPO ${str2}`;
console.log(str4);
*/

// functions
/*
let a = 5;
let b = 10;

function sum(){
 console.log(a+b);
}

sum();
*/
/*
function sum(a,b=1){
    console.log(a + b);
}

sum(15,10)
*/


/*
function sum(a,b){
    return a+b
}

let result = sum(15,10);
console.log(result);
*/
/*
let i =0;
function changeI(num){
    i = num
}
changeI(20)
console.log(i);
*/


// null
/*
let something = null;
console.log(something);
console.log(typeof something); // X
*/

// undefined
/*
let something ;
console.log(something);
console.log(typeof something);
*/

// num to str
/*
let num = 5555;
let str = String(num);
let str2 = num.toString();
let str3 = '' + num;

console.log(num);
console.log(str);
console.log(str2);
console.log(str3);

*/

// str to num
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

/*
let str = '818.5';

const num = Number(str);
const num2 = +str;
const num3 = parseInt(str);
const num4 = parseFloat(str);


console.log(str);
console.log(num);
console.log(num2);
console.log(num3);
console.log(num4);

*/

