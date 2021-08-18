'use strict'

function toBinary(decimal, result = '') {
    if (decimal === 0) {
        return result
    }
    result = decimal % 2 + result;
    return toBinary(Math.trunc(decimal / 2), result)
}

console.log(toBinary(5));
console.log(toBinary(256));
console.log(toBinary(1024));
