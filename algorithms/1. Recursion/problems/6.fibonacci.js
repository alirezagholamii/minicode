'use strict'
// fib seq: 0 1 1 2 3 5 8 13 ...
// not optimized
function fib(num) {
    if (num <= 1) {
        return num
    }

    return fib(num - 1) + fib(num - 2)
}

console.log(fib(7));