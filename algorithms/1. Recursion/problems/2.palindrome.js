'use strict'

function isPalindrome(input) {
    if (input.length < 2) {
        return true
    }

    if(input.charAt(0) === input.slice(-1) ){
        return isPalindrome(input.slice(1,-1))
    }

    return false
}

console.log(isPalindrome('alireza'));
console.log(isPalindrome('level'));
console.log(isPalindrome('david'));