'use strict'

// not optimized

/* function factorial(x) {
    if (x > 0) {
        return x * factorial(x - 1)
    }
    return 1
} */

function factorial(x) {
    return tailfactorial(x, 1)
}

function tailfactorial(x, multiplier) {
    if (x > 0) {
        return tailfactorial(x - 1, x * multiplier)
    }
    return multiplier
}