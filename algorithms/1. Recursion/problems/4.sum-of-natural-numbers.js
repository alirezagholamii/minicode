'use strict'

function sumOfNaturalNumbers(number) {
    if (number <= 1) {
        return number
    }

    return number + sumOfNaturalNumbers(number - 1)
}

console.log(sumOfNaturalNumbers(5));
console.log(sumOfNaturalNumbers(10));
console.log(sumOfNaturalNumbers(20));
