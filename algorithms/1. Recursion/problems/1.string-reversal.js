'use strict'

function reverseString(input) {
    console.log(input);
    if(input.length === 0){
        return ''
    }
    return reverseString(input.slice(1)) + input.charAt(0);
}

console.log(reverseString('alireza'));

