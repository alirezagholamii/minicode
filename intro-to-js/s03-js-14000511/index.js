'use strict'
/*
const array1 = [];
const array2 = ['name',12,true,{age:15},[1,2,3]];
// console.log(array1);
console.log(array2);
console.log(array2[1]);

array2[1] = null;

console.log(array2);
console.log(array2[1]);
*/
/*
const colors = ['blue', 'black', 'red'];
console.log(colors);
const colors2 = colors;
console.log(typeof colors);
console.log(colors === colors2);
*/
// copy
//shallow copy
/*
const colors = ['blue', 'black', 'red'];
const colors2 = Object.assign([],colors);
const colors3 = [...color]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
console.log(colors2);
console.log(colors === colors2);
console.log(colors3);
*/
// const colors = ['blue', 'black', 'red'];
// console.log(colors.length);

// console.log(colors[colors.length - 1]);


// push (mutate)
// colors.push('grey');
// console.log(colors);

// pop (mutate)
// colors.pop();
// console.log(colors);


// unshift() (mutate)
// colors.unshift('yellow')
// console.log(colors);

// shift() (mutate)
// colors.shift();
// console.log(colors);


// for of
// for(const color of colors){
//     console.log(color);
// }


// for(let i = 0; i<colors.length ; i++){
//     console.log(colors[i]); 
// }

// secondLargestNumber in array
//[2,3,9,12,11,3,1] // 11
//[1,1,1,1,1,1] // null
//[1,1,0,1,1,1] // 0
//[1] // null
//[] // null
/*
const findLargestNumber = (arr)=>{
    let largestNumber = arr[0];
    for(const num of arr){
        if(num  > largestNumber){
            largestNumber = num
        }
    }
    return largestNumber
}

const findSecondLargest = (arr)=>{
    if(!Array.isArray(arr)){
        return null
    }
    if(arr.length < 2){
        return null
    }
    const largestNumber = findLargestNumber(arr);
    
    const tempArr = [];
    for(const item of arr){
        if(item !== largestNumber){
            tempArr.push(item)
        }
    }
    if(tempArr.length === 0){
        return null
    }
    const secondLargestNumber =findLargestNumber(tempArr)
    
    return secondLargestNumber
}

//[2,3,9,12,11,3,1] // 11
//[1,1,1,1,1,1] // null
//[1,1,0,1,1,1] // 0
//[1] // null
//[] // null

console.log(findSecondLargest([2,3,9,12,11,3,1]));
console.log(findSecondLargest([1,1,1,1,1,1]));
console.log(findSecondLargest([1,1,0,1,1,1]));
console.log(findSecondLargest([1]));
console.log(findSecondLargest([]));

// console.log(findLargestNumber([1,1,1,1,1,1]));

*/



// rotate left
// [1,2,3,4,5]
// [2,3,4,5,1]  // n === 1
// [3,4,5,1,2]  // n === 2


// concat (new array);
// const colors = ['blue', 'black', 'red'];
// const newColors = colors.concat([1,'orange','red'])

// copy
// const newColors = colors.concat()

// console.log(colors);
// console.log(newColors);
// console.log(colors === newColors);

// indexOf   &&   includes
/*
 const colors = ['blue', 'black', 'red','blue'];
 console.log(colors.indexOf('yellow'));

 console.log(colors.includes('red'));
 */

// reverse (mutate)

//  const numbers = [0,1,2,3,4,5];
//  const colors = ['blue', 'black', 'red'];


//  numbers.reverse();
//  colors.reverse();

//  console.log(numbers);
//  console.log(colors);

// join arr ---> str
/*
 let str = 'alireza';
 let arr = str.split('')
 arr.reverse();
 const result = arr.join('')
 console.log(result);
 */

// slice (new array)
//  const nums = ['000','111','222','333','444','555'];

//copy
//  const newNums = nums.slice()

//  const newNums2 = nums.slice(1,3)

//  const newNums3 = nums.slice(3)



//  console.log(newNums3);


//  // nestet loop
//  const arr = [[5,6],[7,8],['nested','nested2'],[77,44,2,3,4],[0,1]]

// for(let i = 0; i< arr.length ; i++){
//     console.log(arr[i]);
//     // console.log(Array.isArray(arr[i]));
//     for(let j = 0 ; j < arr[i].length ; j++ ){
//         console.log(arr[i][j]);
//     }
// }
// nestet loop

// const arr = [['yeloo', 'blu'], ['red', 'white'], ['nesfgdted', 'nedfsted2']]

// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     const colors = arr[i]
//     // console.log(Array.isArray(arr[i]));
//     for (let j = 0; j < colors.length; j++) {
//         console.log(colors[j]);
//     }
// }
/*
for(const item of arr){
    for(const color of item ){
        console.log(color);
    }
}
*/


// splice (mutate)

//  const nums = ['000','111','222','333','444'];

// remove
//  nums.splice(0,1);

//insert
//  nums.splice(2,0,'qqq')
//  nums.splice(2,0,'zzz','sss',78)

// remove & insert
// nums.splice(1,1,'999')

//  console.log(nums);


// sort (mutate)
// const nums = [4,1,19,0,2000,20,21];

// const names = ['reza','mehran','zahra','mina','kian'] 

// nums.sort()
// names.sort()

// console.log(nums);
// console.log(names);


// functions are first class citizen
// callback
// https://javascript.info/callbacks
// https://www.w3schools.com/js/js_callback.asp
/*
function funnyLog (){
    console.log('🥱😫😯');
}

function addSomething(param1,param2,func0){
    func0()
    return param1 + param2
}

let a = 10;
let b = 15;
addSomething(a,b,funnyLog)
*/



// const nums = [4,1,19,0,2000,20,21];
// nums.sort(function(a,b){
//     return a - b;
// });

// nums.sort((a,b)=>{
//     return a - b;
// })

// nums.sort((a,b)=>{
//     return b - a;
// })
// console.log(nums);

// sort string
// const names = ['zzz','reza','mehran','zahra','mina','kian'] 
// const farsiNames = ['رضا','احمد','مرتضی','پرهام','بابک'] 
// names.sort((a,b)=>{
//     if(a < b){
//         return -1
//     }
//     if(a>b){
//         return 1
//     }
//     return 0
// })

// farsiNames.sort((a,b)=>{
// return a.localeCompare(b);
// })

// console.log(farsiNames);


// recursion functions
// let x = Math.pow(2,3);
// console.log(x);
// https://javascript.info/recursion
/*
function pow(num, exp) {
    if (exp < 2) {
        return num
    }
    return num * pow(num, exp - 1)

}
*/


// f(2,3)
// 2 * f(2,2)
// 2* ( 2 * f(2,1))
// 2* ( 2 * 2)
// 2 * (4)
// 8 


// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1));
//   }


// console.log( pow(2,4));

//https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript

// stack overflow
// function aaa (){
//     aaa()
// }
// aaa()


// ternary

// function something(a){
//     if(a > 10){
//         return 'big'
//     }else{
//         return 'small'
//     }
// }
/*
function something(a) {
    return a > 10 ? 'big' : 'small'
}
console.log(something(11));
*/
