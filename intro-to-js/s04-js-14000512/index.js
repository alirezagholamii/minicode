'use strict'

// higher order function
// callback

// higher order function
/*
function runTwice(func){
    let num = Math.random()
    func(num);
    num = Math.random()
    func(num);
}

function logSomething(param){
    console.log('AAAA',param);
}

runTwice(logSomething)
*/

// forEach

// const colors = ['blue','red','black','white'];

// const logger = (item)=>{
//     console.log(item);
// }

// colors.forEach(logger)

// colors.forEach(function(item){
//     console.log(item);
// })

// colors.forEach((item,index)=>{ console.log(index,item);})


// map (new array)
// const colors = ['blue', 'red', 'black', 'white'];

// const colorsWithStar = colors.map((item) => {
//     return item + '**';
// })

// const colorsWithStar = colors.map((item) => item + '**')

// const colorsWithStar2 = (arr) => { // map
//     const result = []
//     for (const item of arr) {
//         result.push(item + '**')
//     }
//     return result
// }

// console.log(colorsWithStar);
// console.log(colorsWithStar2(colors));

//filter (new array)
/*
 const colors = ['blue', 'red', 'black', 'white'];
 const filteredColor = colors.filter((item)=>{
    return item.startsWith('b')
 })
 console.log(filteredColor);
*/
// reduce 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// const numbers = [15,2,3,4,7,9,2,1,10];

// [].reduce((accumulator, currentValue)=>{
     
// })
// const sum =numbers.reduce((total, num)=>{
//     console.log(total);
//      return total + num
// })

// const sum =numbers.reduce((total, num)=>{
//     console.log(total);
//      return total + num
// },100)

// console.log(sum);
/*
const numbers = [15,2,3,4,7,9,2,1,10];
const min = numbers.reduce((min,item)=>{
    if(item < min){
        return item
    }   
    return min
})
console.log(min);
*/

// every   returns boolean
// const numbers = [15,2,3,4,7,9,2,1,14];
// const result = numbers.every((item)=>{
//     return item < 20
// })

// console.log(result);

// some  returns boolean

// const colors = ['zblue', 'red', 'black', 'white'];

// const result = colors.some(item=>item.startsWith('b'))

// console.log(result);

// اشتراک دو آرایه

// const a = ['sada','a','b',1,1,1]
// const b = ['sdsadaaa',1,'a',45]


function findSubscription (arr1,arr2){
    const result = [];
    for(const item of arr1){ // n
        for(const itemSec of arr2){ // m
            if(item === itemSec && !result.includes(item)){ //l
                result.push(item)
            }
        }
    }
    // n * m 
    return result
}

// findSubscription(a,b)

/*
const a = ['sada','a','b',1,1,1]
const b = ['z',1,1,1,'a',45]

function findSubscription2 (arr1,arr2){
    const map = {};
    const result = [];
    for(const item of arr1){ // n
        map[item] = true
    }
    for(const item of arr2){ // m
        if(map[item]){ // 1
            result.push(item);
            map[item] = false;
        }
    }
    // n + m  //n O(n)
    return result
}

console.log(findSubscription2(a,b)); 

*/


